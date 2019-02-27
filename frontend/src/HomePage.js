import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import Index_Sections_Grid from './Index_Sections_Grid';
import bdhRequester from './requests';
import { generateArticleLink, getFullSectionName, all_sections, getSectionUrl } from './constants';

class HomePage extends React.Component {

	sample_section = {
		title:"University News",
		url:"#",
		featured_articles:[
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"}
		]
	};

	constructor(props) {
		super(props);
		this.generatePreview = this.generatePreview.bind(this);
		//this.generateSectionObject = this.generateSectionObject.bind(this);
		this.state = { fetchedApiData: null, 
			  unews: {},
			  opinions: {},
			  sr: this.sample_section,
			  ac: this.sample_section,
			  sports: {},
			  metro: {} };
	}

	componentDidMount() {
		this._asyncRequest = bdhRequester.getFeaturedArticlesOnHomePage().then(
			fetchedApiData => {
				this._asyncRequest = null;
				this.setState({fetchedApiData});
				console.log(this.state);
				console.log("API Data Fetched for Home Page");
			}
		);

		let sects = ["sr", "ac", "news", "opinions", "sports", "metro"];

		this._srAsyncRequest = bdhRequester.getLatestArticlesBySection("sr").then(
			sr => {
				this._srAsyncRequest = null;
				this.setState({sr});
			}
		); 

		this._acAsyncRequest = bdhRequester.getLatestArticlesBySection("ac").then(
			ac => {
				console.log(ac);
				this._acAsyncRequest = null;
				this.setState({ac});
			}
		); 

		this._metroAsyncRequest = bdhRequester.getLatestArticlesBySection("metro").then(
			metro => {
				console.log(metro);
				this._metroAsyncRequest = null;
				this.setState({metro});
			}
		);

		this._unewsAsyncRequest = bdhRequester.getLatestArticlesBySection("unews").then(
			unews => {
				this._unewsAsyncRequest = null;
				this.setState({unews});
			}
		);

		// this._spAsyncRequest = bdhRequester.getLatestArticlesBySection("sports").then(
		// 	sports => {
		// 		this._spAsyncRequest = null;
		// 		this.setState({sports});
		// 	}
		// ); 


		///next up : metro!!!!
	}

		// Opinions - deal with the multiple possible backend sections.

	generatePreview(content) {
		return (new DOMParser).parseFromString(content, "text/html").getElementsByTagName("p")[0].innerText;
	}

	//Generates a section object to pass into the relevant props.
	generateSectionObject(section) {
		var featuredArticles = [{}, {}, {}, {}]
		console.log(this.state[section]);
		for (var i = 0; i < 4; i++) {
			if (this.state[section].data) {
				var curr_article = this.state[section].data.items[i];
				console.log(curr_article);
				featuredArticles[i] = {
					title: curr_article.title,
					url: generateArticleLink(curr_article),
					imgUrl: i === 0 ? curr_article.featured_image.meta.download_url : null,
					imgAlt: i === 0 ? "an image" : null,
					author:{name:curr_article.authors[0].author.name ,url:"#"},
					date: new Date(curr_article.meta.first_published_at).toDateString(),
				};
			} else {
				featuredArticles[i] = this.sample_section.featured_articles[i];
			}
		}

		console.log(section);
		return {
			title: getFullSectionName(section),
			url: getSectionUrl(section),
			featured_articles: featuredArticles,
		};
	}

 	render() {
 		if (this.state.fetchedApiData === null) { 
			return null;
		} else {
		 	var mainFeature = this.state.fetchedApiData.data.items[0];
		 	var secondFeature = this.state.fetchedApiData.data.items[1];
		 	var thirdFeature = this.state.fetchedApiData.data.items[2];

		 	var featuredExcerpt = this.generatePreview(mainFeature.content);
		 	var secondExcerpt = this.generatePreview(secondFeature.content);
		 	var thirdExcerpt = this.generatePreview(thirdFeature.content);

		 	var arts_cult = this.generateSectionObject("ac");
		 	var sci_res = this.generateSectionObject("sr");
		 	var metro = this.generateSectionObject("metro");
		 	var unews = this.generateSectionObject("unews");
		 	//university news
		 	var sect_list = [unews, sci_res, metro, arts_cult, arts_cult, arts_cult];

		 	var hero = {
		 		imgUrl: "/media/original_images/BBOsMih.jpeg",
		 	 	imgAlt: "featured home page image",
		 	 	section: {name: getFullSectionName(mainFeature.section), url: "#"}, //do URL properly later.
		 	 	url: generateArticleLink(mainFeature),
		 	 	title: mainFeature.title,
		 	 	author: {name: mainFeature.authors[0].author.name + " " + mainFeature.authors[0].author.lastName, url: "#"}, //traverse array of authors, gen URL
		 	 	date: new Date(mainFeature.meta.first_published_at).toDateString(),
		 	 	excerpt: featuredExcerpt,
		 	};

		 	var belowFeatures = [{
				section:{name: getFullSectionName(secondFeature.section), url:"#"},
				url: generateArticleLink(secondFeature),
				title:secondFeature.title,
				author:{name: secondFeature.authors[0].author.name + " " + secondFeature.authors[0].author.lastName, url: "#"},
				date: new Date(secondFeature.meta.first_published_at).toDateString(),
				excerpt: secondExcerpt,
			}, {
				section:{name: getFullSectionName(thirdFeature.section), url:"#"},
				url: generateArticleLink(thirdFeature),
				title:thirdFeature.title,
				author:{name: thirdFeature.authors[0].author.name + " " + thirdFeature.authors[0].author.lastName, url: "#"},
				date: new Date(thirdFeature.meta.first_published_at).toDateString(),
				excerpt: thirdExcerpt,
			}];

		 	//add in sections!!

		 	return (
					<div className = 'main-content'>
						<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
						<br/>
						<Index_Featured_Article_Grid hero={hero} sections={belowFeatures}/>
						<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
						<Index_Sections_Grid sections={sect_list}/>
						<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
					</div>
			);
		}	
	}
}

export default HomePage;
