import React from 'react';
import './general-style.css';
import './fixed-style.css';
import {getBackendSectionName, getFullSectionName, generateArticleLink} from './constants.js';
import bdhRequester from './requests.js';
import NonSports from './NonSports';

import Pagination from './Pagination';
import Advertisement_728x90 from './Advertisement_728x90';
import SearchAuthorInfo from '.SearchAuthorInfo';

class TopicPage extends React.Component {

	constructor(props) {
		super(props);
		this.generatePreview = this.generatePreview.bind(this);
		this.state = { 
			fetchedApiData: null, 
			articles: [], 
			authors: [], 
			pageOfItems: [] };
	}

	componentDidMount() {
		this._asyncRequest = bdhRequester.performSearch(this.props.match.params.query).then(
			fetchedApiData => {
				this._asyncRequest = null;
				if (fetchedApiData.data.items.length > 0) {
					this.setState({fetchedApiData: fetchedApiData});
				}
			}
		);
	}

	separatePageTypes(data) {
		var pages = data.data.items;
		var authors = pages.filter(x => x.meta.type === 'newspaper.AuthorsPage');
		var articles = pages.filter(x => x.meta.type === 'newspaper.ArticlePage');
		return [authors, articles]
	}

	generatePreview(content) {
		var parElems = (new DOMParser).parseFromString(content, "text/html").getElementsByTagName("p");
		if (parElems[0]) {
			if (parElems[0].innerText === '') return parElems[1].innerText;
			return parElems[0].innerText
		}
		else return '';
	}

	onChangePage(pageOfItems) {
		this.setState({ pageOfItems: pageOfItems });
	}

	/* 
	 * The below method needs to be updated to work with the latest author component, and also add css. 
	*/

	// generateAuthorPreviewComponent(author) {
	// 	var imgURL = author.image ? author.image.meta.download_url : 'https://35ht6t2ynx0p1ztf961h81r1-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/generic-avatar.jpg' ;
	// 	return (
	// 		<Author_Info name={author.title} image = {imgURL} />
	// 	)
	// }

	generateArticlePreviewComponent(article) {
		return (
			<NonSports title = {article.title}
					   author ={article.authors[0].author.name}
					   date = {new Date(article.meta.first_published_at).toDateString()}
					   authorLink = {"#"}
					   articleLink = {generateArticleLink(article)}
					   imageLink = {generateArticleLink(article)}
					   image = {article.featured_image ? article.featured_image.meta.download_url : null}
					   description = {this.generatePreview(article.content)} />
				);
	} //separate author pages from article pages

	render(props) {
		var section_name = this.props.match.params.topicName;
		if (this.state.fetchedApiData && this.state.fetchedApiData.data.items) {
			var allData = this.separatePageTypes(this.state.fetchedApiData);
			var authors = allData[0];
			var articles = allData[1];
			console.log(authors);
			console.log(articles);
			return (
				<div className = 'main-content'>
						<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
						Search Results for query {this.props.match.params.query}:
							// {authors.map(item => this.generateAuthorPreviewComponent(item))} - re-activate this line once the method is live
							{this.state.pageOfItems.map(item =>
	                            this.generateArticlePreviewComponent(item) 
	                        )}
	                    	<center><Pagination items={articles} onChangePage={this.onChangePage.bind(this)} /></center>
	                    <Advertisement_728x90 adUnit="BDH_Footer_728x90" />
	            </div>
			);
		} else return null;
	}
}

export default TopicPage;
