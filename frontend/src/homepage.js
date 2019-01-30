import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import Index_Sections_Grid from './Index_Sections_Grid';
import bdhRequester from './requests';

var hero = {
	imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",
	imgAlt:"bear",
	section:{name:"University News", url:"#"},
	url:"#",
	title:"Lorem ipsum dolor",
	author:{name:"John Doe", url:"#"},
	date:"May 10, 2010",
	excerpt:"Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
};
var sections = [{section:{name:"University News", url:"#"},url:"#",title:"Lorem ipsum dolor",author:{name:"John Doe", url:"#"},date:"May 10, 2010",excerpt:"Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volut pat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer [...]"},{section:{name:"University News", url:"#"},url:"#",title:"Lorem ipsum dolor",author:{name:"John Doe", url:"#"},date:"May 10, 2010",excerpt:"Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volut pat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer [...]"}]
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
var sections_list = [sample_section, sample_section, sample_section, sample_section, sample_section, sample_section];

class HomePage extends React.Component {

	constructor(props) {
		super(props);
		//this.state = { fetchedApiData: null}; 
		this._asyncRequest = bdhRequester.getFeaturedArticlesOnHomePage().then(
			fetchedApiData => {
				this._asyncRequest = null;
				this.setState({fetchedApiData});
				console.log(fetchedApiData);
				console.log("API Data Fetched for Home Page");
			}
		);
	}

 	render() {
	 	//Deal with hero first from the fetched API data, and then the other two
	 	//var mainFeature = this.state.fetchedApiData.data.items[0];
	 	console.log(this.state);

	 	// var hero = {
	 	// 	imgUrl: "/media/original_images/istock-511366776.jpg",
	 	// 	imgAlt: "featured home page image",
	 	// 	section: {title: mainFeature.section, url: "#"},
	 	// 	url: "/hello",
	 	// 	title: mainFeature.title,
	 	// 	author: {name: mainFeature.authors[0].author.firstName, url: "#"},
	 	// 	date: "May 25, 2019",
	 	// 	excerpt: mainFeature.summary,
	 	// };

	 	return (
				<div className = 'main-content'>
					<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
					<br/>
					<Index_Featured_Article_Grid hero={hero} sections={sections}/>
					<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
					<Index_Sections_Grid sections={sections_list}/>
					<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
				</div>
		);
	}
}

export default HomePage;
