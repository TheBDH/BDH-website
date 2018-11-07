import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './general-style.css';
import App from './App';
import Header from './Header';
import Sidebar from './Sidebar';
import Index_Featured from './Index_Featured';
import Index_Sections from './Index_Sections';
import Footer from './Footer';
import Article from './Article'
import registerServiceWorker from './registerServiceWorker';
import Single_Article from "./Single_Article"

function renderArticle() {
	var article = document.getElementById('article-component');
	var year = article.getAttribute('year');
	var title = article.getAttribute('title');
	ReactDOM.render(<Article year={year} title={title} />, document.getElementById('article-component'));
}

function renderHeader() {
	ReactDOM.render(<Header />, document.getElementById('headerNew'));
}

function renderSidebar() {
	var ad1 = { name: "advertisement 1", url: "#", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg" };
	var ad2 = { name: "advertisement 2", url: "#", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg" };
	var post_articles = [{ title: "Lorem ipsum", url: "#" }, { title: "Nulla eu risus sem", url: "#" }, { title: "article 3", url: "#" }, { title: "article 4", url: "#" }]
	var blog_articles = [{ title: "article 1", url: "#" }, { title: "article 2", url: "#" }, { title: "article 3", url: "#" }, { title: "article 4", url: "#" }]
	var latest_issue = { title: "latest issue", url: "#", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg" };
	ReactDOM.render(<Sidebar ad1={ad1} ad2={ad2} post_articles={post_articles} blog_articles={blog_articles} latest_issue={latest_issue} />, document.getElementById('sidebar'));
}

function renderIndexFeatured() {
	var hero = { imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", imgAlt: "bear", section: { name: "University News", url: "#" }, url: "#", title: "Lorem ipsum dolor", author: { name: "John Doe", url: "#" }, date: "May 10, 2010", excerpt: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer [...]" }
	var sections = [{ section: { name: "University News", url: "#" }, url: "#", title: "Lorem ipsum dolor", author: { name: "John Doe", url: "#" }, date: "May 10, 2010", excerpt: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volut pat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer [...]" }, { section: { name: "University News", url: "#" }, url: "#", title: "Lorem ipsum dolor", author: { name: "John Doe", url: "#" }, date: "May 10, 2010", excerpt: "Lorem ipsum dolor sit amet, elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volut pat. Lorem  minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer [...]" }]
	ReactDOM.render(<Index_Featured hero={hero} sections={sections} />, document.getElementById('hero'));
}

function renderIndexSections() {
	var sample_section = {
		title: "University News",
		url: "#",
		featured_articles: [
			{ title: "Lorem ipsum dolor", url: "#", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", imgAlt: "img alt", author: { name: "John Doe", url: "#" }, date: "May 10, 2010" },
			{ title: "Lorem ipsum dolor", url: "#", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", imgAlt: "img alt", author: { name: "John Doe", url: "#" }, date: "May 10, 2010" },
			{ title: "Lorem ipsum dolor", url: "#", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", imgAlt: "img alt", author: { name: "John Doe", url: "#" }, date: "May 10, 2010" },
			{ title: "Lorem ipsum dolor", url: "#", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg", imgAlt: "img alt", author: { name: "John Doe", url: "#" }, date: "May 10, 2010" }
		]
	}
	var sections_list = [sample_section, sample_section, sample_section, sample_section, sample_section, sample_section];
	ReactDOM.render(<Index_Sections sections={sections_list} />, document.getElementById('section'));
}

function renderFooter() {
	ReactDOM.render(<Footer />, document.getElementById('footerNew'));
}


function renderSingleArticle() {
	ReactDOM.render(<Single_Article topics={[{ url: "www.google.com", title: "dolor sit amet" }, { url: "www.google.com", title: "consectetuer" }, { url: "www.google.com", title: "adipiscing elit" }]} relatedArticles={[{ title: "Small title for other things", url: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg", image: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg" }, { title: "Small title for other things", url: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg", image: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg" }, { title: "Small title for other things", url: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg", image: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg" }, { title: "Small title for other things", url: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg", image: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg" }, { title: "Small title for other things", url: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg", image: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg" }, { title: "Small title for other things", url: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg", image: "https://images-na.ssl-images-amazon.com/images/I/71opSEI9vaL._SL1500_.jpg" }]} sectionHeader={{ title: "MEDIUM SECTION HEADER", url: "www.google.com" }} articleTitle={"Article title on article page"} articleSubTitle={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt uerat volutpat."} authorName={{ url: "www.google.com", name: "Author Name" }} authorPosition={"Position"} publishDate={"June 3, 2018"} articleBody={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, this is a link vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."} />, document.getElementById('hero'));
}



renderHeader();
renderSingleArticle();
// renderSidebar();
// renderIndexFeatured();
// renderIndexSections();
// renderArticle();
registerServiceWorker();
