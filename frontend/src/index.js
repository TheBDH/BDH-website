import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Article from './Article'
import registerServiceWorker from './registerServiceWorker';

function renderArticle(){
	var article = document.getElementById('article-component');
	var year = article.getAttribute('year');
	var title = article.getAttribute('title');
	ReactDOM.render(<Article year={year} title={title}/>, document.getElementById('article-component'));
}

renderArticle();
registerServiceWorker();
