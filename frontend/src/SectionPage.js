import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import NonSports from './NonSports';
import Section_Featured_Articles from './Section_Featured_Articles';
import SportsSection from './SportsSection';
import './general-style.css';
import './fixed-style.css';

import { getFullSectionName } from './constants.js';

import bdhRequester from './requests.js'

var hero = {imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",
			imgAlt:"bear",section:{name:"University News", url:"#"},url:"#",title:"Lorem ipsum dolor",
			author:{name:"John Doe", url:"#"},date:"May 10, 2010",excerpt:"Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod\
			tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum\
			 dolor sit amet, consectetuer [...]"}
var section = {name:"University News", url:"#", 
	featured_articles:[{imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", 
	imgAlt:"bear", url: "#", title:"Sample 2", author: {name: "JD", url:"#"}, date: "today"}, {
	imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", 
	imgAlt:"bear", url: "#", title:"Sample 3", author: {name: "JD", url:"#"}, date: "today"},
	{imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", 
	imgAlt:"bear", url: "#", title:"Sample 4", author: {name: "JD", url:"#"}, date: "today"}]};

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
	}

	state= {fetchedApiData : null}

	componentDidMount() {
		this._asyncRequest = bdhRequester.getFeaturedArticlesOnSection(this.props.match.params.section).then( //add something in constants for this
			fetchedApiData => {
				this._asyncRequest = null;
				this.setState({fetchedApiData});
				console.log(fetchedApiData);
				console.log("API Data Fetched for Features");
			}
		); 
		this._asyncRequest = bdhRequester.getArticlesBySection(this.props.match.params.section).then( //add something in constants for this
			fetchedApiData => {
				this._asyncRequest = null;
				this.setState({fetchedApiData});
				console.log(fetchedApiData);
				console.log("API Data Fetched for Section");
			}
		); // Add something in constants.js for special cases like News, Opinions
	}

	render(props) {
		var section_name = this.props.match.params.section;
		return (
			<div className = 'main-content'>
				<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
				<br/>		
				<h3 class='med-nav-title'>{getFullSectionName(section_name)}</h3>
				{ section_name==='sports' ? (<SportsSection sports={sportsList} />) : null}
				<Section_Featured_Articles section={section} />

				<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
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
				 // add in pagination
				<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
			</div>
		);
	}
}

export default SectionPage;






