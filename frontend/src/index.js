import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import bdhRequester from './requests'
import Advertisement_728x90 from './Advertisement_728x90'
import './index.css';
import './App.css';


render(<Header />, document.getElementById('headerNew'));
render(<Sidebar />, document.getElementById('sidebar'));
render(<Footer/>, document.getElementById('footerNew'));

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('main-content'));