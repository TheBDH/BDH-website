import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import NonSports from './NonSports';
import Section_Features from './Section_Features';
import Author_Info from './Author_Info';
import './general-style.css';

import bdhRequester from './requests.js'
import { getFrontendRole, generateArticleLink, generateAuthorLink } from './constants'

class AuthorPage extends React.Component {

	constructor(props) {
		super(props);
	}

	state = { fetchedApiData: null };

	componentDidMount() {
		let authorSlug = this.props.match.params.authName;
		let firstName = authorSlug.split("-")[0];
		this._asyncRequest = bdhRequester.getAuthor({slug: authorSlug}).then(
			fetchedApiData => {
				this._asyncRequest = null;
				if (fetchedApiData.data.items.length > 0) {
					this.setState({fetchedApiData});
					console.log("API Data Fetched for Author");
				} else {
                	window.location = "/404.html";
				}
			}
		);
	}

	generatePreview(content) {
		var parElems = (new DOMParser).parseFromString(content, "text/html").getElementsByTagName("p");
		if (parElems[0]) {
			if (parElems[0].innerText === '') return parElems[1].innerText;
			return parElems[0].innerText
		}
		else return '';
	}


	generateArticlePreviewComponent(article) {
		console.log(article);
		return (
			<NonSports title = {article.title}
					   date = {new Date(article.meta.first_published_at).toDateString()}
					   authorLink = {"#"}
					   //author = {generateAuthorLink(article.authors[0].author.name)}
					   articleLink = {generateArticleLink(article)}
					   imageLink = {generateArticleLink(article)}
					   image = {article.featured_image ? article.featured_image.meta.download_url : null}
					   description = {this.generatePreview(article.content)} />)
	}

	generateAllArticlePreviewComponents(article_meta_info_list) {
		var article_list = article_meta_info_list.map(x => x.article);
		console.log(article_list);
		return article_list.map(x => this.generateArticlePreviewComponent(x));
	}

	render() {
		console.log(this.state);
		if (this.state.fetchedApiData === null) { 
			return null;
		} else {
			var authorData = this.state.fetchedApiData.data.items[0];
			var desc = authorData.description !== "<p></p>" ? authorData.description : "No description available.";
			var imgURL = authorData.image ? authorData.image.meta.download_url : 'https://35ht6t2ynx0p1ztf961h81r1-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/generic-avatar.jpg' ;
			var writtenArticles = this.generateAllArticlePreviewComponents(authorData.articles);
			return (
				<div className = 'main-content'>
					<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
					<Author_Info 
						name={authorData.name + " " + authorData.lastName}
						titlePosition = {getFrontendRole(authorData.position)}
						description = {desc}
						image = {imgURL} />
					{writtenArticles}

					<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
				</div>
			);
		}
	}
}

export default AuthorPage;






