import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Article from './Article'
import registerServiceWorker from './registerServiceWorker';

function renderArticle(){
	year = document.getElementById('article-component').prop('year');
	console.log(year);
	ReactDOM.render(<Article year='2020'/>, document.getElementById('article-component'));
}

renderArticle();
registerServiceWorker();
