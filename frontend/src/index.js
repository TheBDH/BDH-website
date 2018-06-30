import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Article from './Article'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Article />, document.getElementById('root'));
registerServiceWorker();
