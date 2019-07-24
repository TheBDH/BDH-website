import React from 'react';
import './general-style.css';
import './fixed-style.css';
import {getBackendSectionName, getFullSectionName, generateArticleLink} from './constants.js';
import bdhRequester from './requests.js';
import NonSports from './NonSports';

class TopicPage extends React.Component {

	constructor(props) {
		super(props);
		this.generatePreview = this.generatePreview.bind(this);
	}

	state= {fetchedApiData : null}

	componentDidMount() {
		this._asyncRequest = bdhRequester.getArticlesByTag('dog').then(
			fetchedApiData => {
				this._asyncRequest = null;
				this.setState({fetchedApiData});
			}
		); // Add something in constants.js for special cases like News, Opinions

	}

	generatePreview(content) {
		return (new DOMParser).parseFromString(content, "text/html").getElementsByTagName("p")[0].innerText;
	}

	render(props) {
		var section_name = this.props.match.params.topicName;
		let articles = [];
		if (this.state.fetchedApiData) {
			console.log('article', this.state.fetchedApiData.data.items[0]);
			for(let i = 0; i < this.state.fetchedApiData.data.items.length; i++){
				let article = this.state.fetchedApiData.data.items[i];
				articles.push(
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

			
		}
		
		return (
			<div>
				{articles.map(article => <div> {article} </div>)} 
			</div>
		);
	}
}

export default TopicPage;
