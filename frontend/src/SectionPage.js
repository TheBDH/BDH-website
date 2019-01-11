import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import NonSports from './NonSports';
import Section_Features from './Section_Features';
import './general-style.css';
import './fixed-style.css';

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

//props would go in the below - if it's sports, we need to add in that extra thing about sports below (in the space between Section_Features + Adv)
const SectionPage = (props) => {
	var section_name = props.match.params.section;
	return (
		<div className = 'main-content'>
			<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
			<br/>
			<p>{section_name}</p>
			<Section_Features section={section} />

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

export default SectionPage;






