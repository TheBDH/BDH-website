import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import NonSports from './NonSports';
import './general-style.css';
import Single_Article from './Single_Article';
import deepEqual from 'deep-equal';

import bdhRequester from './requests.js'

class ArticlePage extends React.Component {

	constructor(props) {
		super(props);
		this.generateImagesObject = this.generateImagesObject.bind(this);
		
		let sectMap = {
			'sr': 'Science and Research',
			'ac': 'Arts and Culture',
			'n': 'News',
			'sports': 'Sports',
			'opinion': 'Opinion',
		};
		this.state = {
			fetchedApiData: null,
			relatedArticles: []
		};
	}

	async componentDidMount() {
		var artSlug = this.props.match.params.slug;
		this._asyncRequest = bdhRequester.getArticleBySlug(artSlug).then(
			fetchedApiData => {
				this._asyncRequest = null;
				if (fetchedApiData.data.items.length > 0) {
					this.setState({ fetchedApiData });
				} else {
                	window.location = "/404.html";
				}
			}
		).then(
			() => { 
				if (this.state.fetchedApiData) {
					this._relArtRequest = bdhRequester.getLatestArticlesBySection(this.state.fetchedApiData.data.items[0].section).then(
						relatedArticles => {
							this._relArtRequest = null;
							this.setState({ relatedArticles: relatedArticles.data.items });
						}
					);
				}
			}
		);
	}

	generateImagesObject() {
		if (this.state.fetchedApiData.data.items[0].gallery_images.length != 0) {
			var imgs = this.state.fetchedApiData.data.items[0].gallery_images;
			var imgArr = []
			for (var i = 0; i < imgs.length; i++) {
				var imgUrl = imgs[i].image.meta.download_url;
				imgArr.push({"original": imgUrl, "thumbnail": imgUrl})
			}
			return imgArr;
		} else return null;
	}

	render() {
		if (this.state.fetchedApiData === null) {
			return (<div className='main-content'>no content</div>); //Throw a 404 here
		} else {
			console.log(this.state.fetchedApiData);
			
			var gallery = this.generateImagesObject();
			var hasGallery = !!gallery;

			var articleData = this.state.fetchedApiData.data.items[0];
			var publishedOn = new Date(articleData.meta.first_published_at);
			var sect = articleData.section;
			var img = articleData.featured_image.meta.download_url;
			var sectionUrl = '/' + articleData.section;
			var topics = articleData.tags;
			document.title=articleData.title;

			return (
				<div className='main-content'>
					<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
					<Single_Article 
						sectionHeader = {{url: sectionUrl, title: articleData.section}}
						articleTitle = {articleData.title}
						articleSubTitle = {articleData.summary}
						gallery = {hasGallery}
						galleryImgs = {gallery}
						authorName = {{url: '#', name: 'Jane Doe'}}
						authorPosition = 'Senior Staff Writer'
						featuredImg = {img}
						publishDate = {publishedOn.toDateString()} // Need to add in a 'Last updated' field as well
						updateDate = {publishedOn.toDateString()}
						articleBody = {articleData.content}
						topics={topics}
						relatedArticles={this.state.relatedArticles} />
					<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
				</div>
			);
		}
	}
}

export default ArticlePage;
