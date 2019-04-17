import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import Index_Sections_Grid from './Index_Sections_Grid';
import bdhRequester from './requests';
import { generateArticleLink, generateAuthorLink, getFullSectionName, all_sections, getSectionUrl, sortArticlesByDate } from './constants';

var sample_section = {
		title:"University News",
		url:"#",
		featured_articles:[
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"}
		]
	};

class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.generatePreview = this.generatePreview.bind(this);
		this.generateSectionObject = this.generateSectionObject.bind(this);
		this.mergeSections = this.mergeSections.bind(this);

		this.state = { fetchedApiData: null, 
			  unews: {},
			  metro: {},
			  sr: {},
			  ac: {},

			  sports: {},
			  sportscol: {},

			  op: null,
			  col: null,
			  ed: null,
			  lett: null,
			  ednot: null,
		};
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
				this._acAsyncRequest = null;
				this.setState({ac});
			}
		); 

		this._metroAsyncRequest = bdhRequester.getLatestArticlesBySection("metro").then(
			metro => {
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

		this._spAsyncRequest = bdhRequester.getLatestArticlesBySection("sports").then(
			sports => {
				this._spAsyncRequest = null;
				this.setState({sports});
			}
		);

		this._spColAsyncRequest = bdhRequester.getLatestArticlesBySection("sportscol").then(
			sportscol => {
				this._spColAsyncRequest = null;
				this.setState({sportscol});
			}
		);

		/************OPINIONS CALLS********************/

		this._opAsyncRequest = bdhRequester.getLatestArticlesBySection("opinion").then(
			op => {
				this._opAsyncRequest = null;
				this.setState({op});
			}
		);

		this._colAsyncRequest = bdhRequester.getLatestArticlesBySection("col").then(
			col => {
				this._colAsyncRequest = null;
				this.setState({col});
			}
		);

		this._editAsyncRequest = bdhRequester.getLatestArticlesBySection("edit").then(
			ed => {
				this._editAsyncRequest = null;
				this.setState({ed});
			}
		);

		this._letAsyncRequest = bdhRequester.getLatestArticlesBySection("letter").then( 
			lett => {
				this._letAsyncRequest = null;
				this.setState({lett});
			}
		);

		this._notAsyncRequest = bdhRequester.getLatestArticlesBySection("notes").then(
			ednot => {
				this._notAsyncRequest = null;
				this.setState({ednot});
			}
		);
	} 

	mergeSections(arrayOfSects) {
		let fullArr = [];
		console.log(arrayOfSects);
		for (var i = 0; i < arrayOfSects.length; i++) {
			console.log(arrayOfSects)
			if (arrayOfSects[i].data) {
				var currArts = arrayOfSects[i].data.items;
				currArts.map(x => fullArr.push(x));
				console.log(fullArr);
			}
		}
		fullArr.sort(
			function(a, b) {
				return b.id - a.id;
			}
		);
		console.log(fullArr);
		return fullArr;
	}

	generatePreview(content) {
		return (new DOMParser).parseFromString(content, "text/html").getElementsByTagName("p")[0].innerText;
	}

	//Generates a section object to pass into the relevant props.
	generateSectionObject(section) {
		var featuredArticles = [{}, {}, {}]
		for (var i = 0; i < 3; i++) {
			if (this.state[section].data) {
				var curr_article = this.state[section].data.items[i];
				featuredArticles[i] = {
					title: curr_article.title,
					url: generateArticleLink(curr_article),
					imgUrl: i === 0 ? curr_article.featured_image.meta.download_url : null,
					imgAlt: i === 0 ? "an image" : null,
					author:{
						name: curr_article.authors[0].author.title,
						url: generateAuthorLink(curr_article.authors[0])
					},
					date: new Date(curr_article.meta.first_published_at).toDateString(),
				};
			} else {
				featuredArticles[i] = sample_section.featured_articles[i];
			}
		}
		return {
			title: getFullSectionName(section),
			url: getSectionUrl(section),
			featured_articles: featuredArticles,
		};
	}

	generateSectionObjectForMerged(section, secName) {
		var featuredArticles = [{}, {}, {}]
		for (var i = 0; i < 3; i++) {
			console.log(section);
			var curr_article = section[i];
			featuredArticles[i] = {
				title: curr_article.title,
				url: generateArticleLink(curr_article),
				imgUrl: i === 0 ? curr_article.featured_image.meta.download_url : null,
				imgAlt: i === 0 ? "an image" : null,
				author:{
					name: curr_article.authors[0].author.title,
					url: generateAuthorLink(curr_article.authors[0])
				},
				date: new Date(curr_article.meta.first_published_at).toDateString(),
			};
		}
		return {
			title: secName,
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
		 	var sect_list = [unews, metro, sci_res, arts_cult,]; //sci_res, metro, arts_cult, arts_cult, arts_cult];

		 	if (this.state.op && this.state.col && this.state.ed && this.state.lett && this.state.ednot) {
		 		console.log(this.state);
		 		var merged = this.mergeSections([this.state.op, this.state.col, this.state.ed, this.state.lett, this.state.ednot]);
		 		var ops = this.generateSectionObjectForMerged(merged, "opinions");
		 		var sect_list = [unews, metro, sci_res, arts_cult, ops, unews];
		 	}

		 	var hero = {
		 		imgUrl: mainFeature.featured_image.meta.download_url,
		 	 	imgAlt: "featured home page image",
		 	 	section: {name: getFullSectionName(mainFeature.section), url: getSectionUrl(mainFeature.section)}, //do URL properly later.
		 	 	url: generateArticleLink(mainFeature),
		 	 	title: mainFeature.title,
		 	 	author: {name: mainFeature.authors[0].author.name + " " + mainFeature.authors[0].author.lastName, 
		 	 			url: generateAuthorLink(mainFeature.authors[0])}, //traverse array of authors, gen URL
		 	 	date: new Date(mainFeature.meta.first_published_at).toDateString(),
		 	 	excerpt: featuredExcerpt,
		 	};

		 	var belowFeatures = [{
				section:{name: getFullSectionName(secondFeature.section), url: getSectionUrl(mainFeature.section)},
				url: generateArticleLink(secondFeature),
				title:secondFeature.title,
				author:{name: secondFeature.authors[0].author.name + " " + secondFeature.authors[0].author.lastName, 
						url: generateAuthorLink(secondFeature.authors[0])},
				date: new Date(secondFeature.meta.first_published_at).toDateString(),
				excerpt: secondExcerpt,
			}, {
				section:{name: getFullSectionName(thirdFeature.section), url: getSectionUrl(mainFeature.section)},
				url: generateArticleLink(thirdFeature),
				title:thirdFeature.title,
				author:{name: thirdFeature.authors[0].author.name + " " + thirdFeature.authors[0].author.lastName,
						url: generateAuthorLink(thirdFeature.authors[0])},
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
