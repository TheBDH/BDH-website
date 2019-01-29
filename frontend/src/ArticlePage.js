import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import NonSports from './NonSports';
import './general-style.css';
import Single_Article from './Single_Article';

import bdhRequester from './requests.js'

class ArticlePage extends React.Component {

	constructor(props) {
		super(props);
		
		let sectMap = {
			'sr': 'Science and Research',
			'ac': 'Arts and Culture',
			'n': 'News', 
			'sports': 'Sports',
			'opinion': 'Opinion',
		};

	}

	state = { fetchedApiData: null, relatedArticles: null };

	componentDidMount() {
		console.log(this.props.match.params.slug);
		var artSlug = this.props.match.params.slug;
		this._asyncRequest = bdhRequester.getArticleBySlug(artSlug).then(
			fetchedApiData => {
				this._asyncRequest = null;
				if (fetchedApiData.data.items.length > 0) {
					this.setState({fetchedApiData});
					console.log("API Data Fetched for Article");
				} else {
					console.log("No API data available");
				}
			}
		);
		// document.title=this.state.fetche
	}

	render() {
		if (this.state.fetchedApiData === null) { 
			return (<div className='main-content'>no content</div>); //Throw a 404 here
		} else {
			console.log(this.state.fetchedApiData);
			var articleData = this.state.fetchedApiData.data.items[0];

			var publishedOn = new Date(articleData.meta.first_published_at);

			var sect = articleData.section;
			//var fullSect = this.sectMap[sect];

			var sectionUrl = '/' + articleData.section;
			var topics = articleData.tags.split(",");
			console.log(topics);

			// this._asyncRelatedArticlesRequest = bdhRequester.getArticlesBySection(this.state.fetchedApiData.data.items[0].section).then(
			// 	relatedArticles => {
			// 		this._asyncRelatedArticlesRequest = null;
			// 		this.setState({relatedArticles});
			// 		console.log('Related Articles Fetched');
			// 		console.log(this.state);
			// 	}
			// );

			document.title=articleData.title;
			return (
				<div className = 'main-content'>
					<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
					<Single_Article sectionHeader = {{url: sectionUrl, title: articleData.section}}
						articleTitle = {articleData.title}
						articleSubTitle = {articleData.summary}

						authorName = {{url: '#', name: 'Jane Doe'}}
						authorPosition = 'Senior Staff Writer'

						publishDate = {publishedOn.toDateString()} // Need to add in a 'Last updated' field as well
						articleBody = {articleData.content}

						topics = {topics}
						relatedArticles = {[]}/>
					<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
				</div>
			);
		}
	}
}

export default ArticlePage;






