import React from 'react';
import './general-style.css';
import './fixed-style.css';
import {getBackendSectionName, getFullSectionName, generateArticleLink} from './constants.js';
import bdhRequester from './requests.js';
import NonSports from './NonSports';

import Pagination from './Pagination';
import Advertisement_728x90 from './Advertisement_728x90';

class TopicPage extends React.Component {

	constructor(props) {
		super(props);
		this.generatePreview = this.generatePreview.bind(this);
		this.state = { fetchedApiData: null, articles: null, pageOfItems: [] };
	}

	componentDidMount() {
		this._asyncRequest = bdhRequester.getArticlesByTag(this.props.match.params.topicName).then(
			fetchedApiData => {
				this._asyncRequest = null;
				if (fetchedApiData.data.items.length > 0) {
					this.setState({fetchedApiData: fetchedApiData, articles: fetchedApiData.data.items});
					console.log('topic articles received');
				}
			}
		); // Add something in constants.js for special cases like News, Opinions

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
	}

	render(props) {
		var section_name = this.props.match.params.topicName;
		let articles = [];
		if (this.state.fetchedApiData) {
			return (
				<div className = 'main-content'>
						<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
							{this.state.pageOfItems.map(item =>
	                            this.generateArticlePreviewComponent(item)
	                        )}
	                    	<center><Pagination items={this.state.articles} onChangePage={this.onChangePage.bind(this)} /></center>
	                    <Advertisement_728x90 adUnit="BDH_Footer_728x90" />
	            </div>
			);
		} else return null;
	}
}

export default TopicPage;
