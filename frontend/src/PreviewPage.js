import React from 'react';
import bdhRequester from './requests';
import Single_Article from './Single_Article';

class PreviewPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = { previewedArticle: null }

		let sectMap = {
			'sr': 'Science and Research',
			'ac': 'Arts and Culture',
			'n': 'News', 
			'sports': 'Sports',
			'opinion': 'Opinion',
		};
	}

	componentDidMount() {
		var articleId = this.props.match.params.id;
		this._asyncRequest = bdhRequester.getArticleById(articleId).then(
			previewedArticle => {
				this._asyncRequest = null;
				this.setState({previewedArticle});
				console.log(this.state);
				console.log("API Data Fetched for Preview Page");
			}
		);
	}

	render() {
		if (this.state.previewedArticle === null) { 
			return (<div className='main-content'>Loading...</div>);
		} else {
			console.log(this.state.previewedArticle);
			var articleData = this.state.previewedArticle.data.items[0];

			var publishedOn = new Date(articleData.meta.first_published_at);

			var sect = articleData.section;

			var sectionUrl = '/' + articleData.section;
			var topics = articleData.tags; //.split(",");

			document.title=articleData.title;
			return (
				<div className = 'main-content'>
					<center><h1> Advertisement Here </h1></center>
					<Single_Article sectionHeader = {{url: sectionUrl, title: articleData.section}}
						articleTitle = {articleData.title}
						articleSubTitle = {articleData.summary}

						authorName = {{url: '#', name: 'Jane Doe'}}
						authorPosition = 'Senior Staff Writer'

						publishDate = {publishedOn.toDateString()} // Need to add in a 'Last updated' field as well
						articleBody = {articleData.content}

						topics = {topics}
						relatedArticles = {[]}/>
					<center><h1> Advertisement Here </h1></center>
				</div>
			);
		}
	}
}

export default PreviewPage;