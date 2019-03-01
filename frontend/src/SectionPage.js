import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import NonSports from './NonSports';
import Section_Features from './Section_Features';
import SportsSection from './SportsSection';
import './general-style.css';
import './fixed-style.css';

import Pagination from './Pagination';

import {getBackendSectionName, getFullSectionName, generateArticleLink} from './constants.js';

import bdhRequester from './requests.js'

var hero = {imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",
			imgAlt:"bear",section:{name:"University News", url:"#"},url:"#",title:"Lorem ipsum dolor",
			author:{name:"John Doe", url:"#"},date:"May 10, 2010",excerpt:"Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod\
			tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum\
			 dolor sit amet, consectetuer [...]"}
var section = {name:"University News", url:"#", 
	featured_articles:[{imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", 
	imgAlt:"bear", url: "#", title:"Sample 1", author: {name: "JD", url:"#"}, date: "today"},
	{url:"#", title:"Sample 2", author: {name: "JD", url:"#"}, date:"today"},
	{url:"#", title:"Sample 2", author: {name: "JD", url:"#"}, date:"today"}]};

const sportsList = [
	{name: 'Athlete of the Week', link: '/topics/athlete-of-the-week'},
	{name: 'Athletics', link: '/topics/athletics'},
	{name: 'Baseball', link: '/topics/baseball'},
	{name: "Men's Basketball", link: '/topics/m-basketball'},
	{name: "Women's Basketball", link: '/topics/w-basketball'},
	{name: 'Crew', link: '/topics/crew'},
	{name: 'Cross Country', link: '/topics/cross-country'},
	{name: 'Fencing', link: '/topics/fencing'},
	{name: 'Field Hockey', link: '/topics/field-hockey'},
	{name: 'Football', link: '/topics/football'},

	{name: 'Golf', link: '/topics/golf'},
	{name: 'Gymnastics', link: '/topics/gymnastics'},
	{name: "Men's Ice Hockey", link: '/topics/m-ice-hockey'},
	{name: "Women's Ice Hockey", link: '/topics/w-ice-hockey'},
	{name: "Men's Lacrosse", link: '/topics/m-lacrosse'},
	{name: "Women's Lacrosse", link: '/topics/w-lacrosse'},
	{name: "Men's Soccer", link: '/topics/m-soccer'},
	{name: "Women's Soccer", link: '/topics/w-soccer'},
	{name: "Softball", link: '/topics/softball'},
	{name: "Sports Columns", link: '/topics/sports-columns'},

	{name: 'Sports Features', link: '/topics/sports-features'},
	{name: 'Squash', link: '/topics/squash'},
	{name: 'Swimming & Diving', link: '/topics/swimming-diving'},
	{name: "Men's Tennis", link: '/topics/mens-tennis'},
	{name: "Women's Tennis", link: '/topics/womens-tennis'},
	{name: 'Track & Field', link: '/topics/track-field'},
	{name: 'Volleyball', link: '/topics/volleyball'},
	{name: "Men's Water Polo", link: '/topics/m-water-polo'},
	{name: "Women's Water Polo", link: '/topics/w-water-polo'},
	{name: "Wrestling", link: '/topics/wrestling'}]; 

class SectionPage extends React.Component {

	constructor(props) {
		super(props);
		this.generateFeaturedArticles = this.generateFeaturedArticles.bind(this);
		this.generatePreview = this.generatePreview.bind(this);
		this.generateAllArticlePreviewComponents = this.generateAllArticlePreviewComponents.bind(this);
		this.state = {
			allOtherArticles: null,
			currentlyVisibleArticles: null,
			currentPage: null,
			totalPages: null,
		};
	}

	componentDidMount() {
		let sect_name = getBackendSectionName(this.props.match.params.section);

		this._allArticleRequest = bdhRequester.getArticlesBySection(sect_name).then(
			allOtherArticles => {
				this._allArticleRequest = null;
				this.setState({allOtherArticles});
				var currentlyVisibleArticles = allOtherArticles.data.items.slice(0,10);
				this.setState({currentlyVisibleArticles})
				console.log("API Data Fetched for All Articles in Section");
			}
		);
	}

	onPageChanged = data => {
		 const { currentPage, totalPages, pageLimit } = data;

 // axios.get(`/api/countries?page=${currentPage}&limit=${pageLimit}`)
 //   .then(response => {
 //     const currentCountries = response.data.countries;
 //     this.setState({ currentPage, currentCountries, totalPages });
 //   });
	}

	//We want ALL the articles and then find the earliest one with a featured image and then push that up (return the index!).

	generateFeaturedArticles() {
		var featuredArticles = [{}, {}, {}];
		for (var i = 0; i < 3; i++) {
			if (this.state.allOtherArticles) {
				var curr_article = this.state.allOtherArticles.data.items[i];
				featuredArticles[i] = {
					url: generateArticleLink(curr_article),
					title: curr_article.title,
					imgUrl: i === 0 ? curr_article.featured_image.meta.download_url : null,
					imgAlt: i === 0 ? "an image" : null,
					author:{name:curr_article.authors[0].author.name , 
							lastName: curr_article.authors[0].author.lastName, url:"#"},
					date: new Date(curr_article.meta.first_published_at).toDateString(),
				}
			}
		}
		return featuredArticles;
	}

	generatePreview(content) {
		return (new DOMParser).parseFromString(content, "text/html").getElementsByTagName("p")[0].innerText;
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
					   description = {this.generatePreview(article.content)} />)
	}

	generateAllArticlePreviewComponents(articleList) {
		return articleList.map(x => this.generateArticlePreviewComponent(x));
	}

	//for loop for each article, how does that work with paginatioN? look at the e.g. online

	render() {
		var section_name = this.props.match.params.section;
		console.log(this.state);

		if (this.state.allOtherArticles) {
			console.log(this.state.allOtherArticles.data.items);
			var feat = this.generateFeaturedArticles();
			console.log(feat);

			var others;

			if (this.state.allOtherArticles.request) {
				console.log(feat);
				others = this.generateAllArticlePreviewComponents(this.state.allOtherArticles.data.items)
			} else {others = null; }
		//load featured articles into the section object, and the rest into the NonSports component - all of this on SUNDAY
			return (
				<div className = 'main-content'>
					<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
					<br/>		
					<h3 class='med-nav-title'>{getFullSectionName(section_name)}</h3>
					{ section_name==='sports' ? (<SportsSection sports={sportsList} />) : null}
					<Section_Features section={{featured_articles: feat}} />

					<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />

					{others}

					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					 <Pagination />
					<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
				</div>
			);
		} else return null;
	}
}

export default SectionPage;






