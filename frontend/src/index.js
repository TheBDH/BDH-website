import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './general-style.css';
import App from './App';
import Header from './Header';
import Sidebar from './Sidebar';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Index_Sections_Grid from './Index_Sections_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import Footer from './Footer';
import Article from './Article'
import registerServiceWorker from './registerServiceWorker';
import {AdSlot, DFPManager} from 'react-dfp';
import NonSports from './NonSports';
import Author_Info from'./Author_Info';

function renderArticle(){
	var article = document.getElementById('article-component');
	var year = article.getAttribute('year');
	var title = article.getAttribute('title');
	ReactDOM.render(<Article year={year} title={title}/>, document.getElementById('article-component'));
}

function renderHeader(){
	ReactDOM.render(<Header/>, document.getElementById('headerNew'));
}

function renderSidebar(){
	var post_articles = [{title:"Lorem ipsum", url:"#"},{title:"Nulla eu risus sem", url:"#"},{title:"article 3", url:"#"},{title:"article 4", url:"#"}]
	var blog_articles = [{title:"article 1", url:"#"},{title:"article 2", url:"#"},{title:"article 3", url:"#"},{title:"article 4", url:"#"}]
	var latest_issue = {title:"latest issue", url:"#", imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"};
	ReactDOM.render(<Sidebar post_articles={post_articles} blog_articles={blog_articles} latest_issue={latest_issue}/>, document.getElementById('sidebar'));
}

function renderIndexFeatured(){
	var hero = {imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"bear",section:{name:"University News", url:"#"},url:"#",title:"Lorem ipsum dolor",author:{name:"John Doe", url:"#"},date:"May 10, 2010",excerpt:"Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer [...]"}
	var sections = [{section:{name:"University News", url:"#"},url:"#",title:"Lorem ipsum dolor",author:{name:"John Doe", url:"#"},date:"May 10, 2010",excerpt:"Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volut pat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer [...]"},{section:{name:"University News", url:"#"},url:"#",title:"Lorem ipsum dolor",author:{name:"John Doe", url:"#"},date:"May 10, 2010",excerpt:"Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volut pat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer [...]"}]
	ReactDOM.render(<Index_Featured_Article_Grid hero={hero} sections={sections}/>, document.getElementById('hero'));
}

function renderIndexSections(){
	var sample_section = {
		title:"University News",
		url:"#",
		featured_articles:[
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"},
			{title:"Lorem ipsum dolor",url:"#",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",imgAlt:"img alt",author:{name:"John Doe",url:"#"},date:"May 10, 2010"}
		]
	}
	var sections_list = [sample_section, sample_section, sample_section, sample_section, sample_section, sample_section];
	ReactDOM.render(<Index_Sections_Grid sections={sections_list}/>, document.getElementById('section'));
}


function renderFooter(){
	ReactDOM.render(<Footer/>, document.getElementById('footerNew'));
}

// function renderNonSports(){
// 	var nonsports1 = <NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
// 									authorLink={"#"} articleLink={'#'} imageLink={'#'}
// 									description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."}
// 									image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
//
// 	var nonsports2 = <NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
// 									authorLink={"#"} articleLink={'#'} imageLink={'#'}
// 									description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."}
// 									image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
//
// 	var nonsports3 = <NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
// 									authorLink={"#"} articleLink={'#'} imageLink={'#'}
// 									description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."}
// 									image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
//
// 	ReactDOM.render([nonsports1, nonsports2, nonsports3], document.getElementById('nonsports'));
// }
//
// function renderAuthorInfo(){
// 	var author = <Author_Info name={"John Doe"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}
// 								titlePosition={"Title Position"} description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."}/>
//
// 	ReactDOM.render([author], document.getElementById('authorInfo'));
// }
function renderAd() {
	ReactDOM.render(<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />, document.getElementById('728x90'));
	ReactDOM.render(<Advertisement_728x90 adUnit="BDH_Footer_728x90" />, document.getElementById('728x90f'));
}

renderHeader();
renderFooter();
renderSidebar();
renderIndexFeatured();
renderIndexSections();
renderAd();
renderArticle();
//renderNonSports();
//renderAuthorInfo();
registerServiceWorker();