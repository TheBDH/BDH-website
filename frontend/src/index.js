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
import HomePage from './HomePage'
import SectionPage from './SectionPage'
import ArticlePage from './ArticlePage'
import AuthorPage from './AuthorPage'
import JoinPage from './JoinPage'
import SubscriptionsPage from './SubscriptionsPage'
import WebPolicyPage from './WebPolicyPage'
import CommentsPolicyPage from './CommentsPolicyPage'
import FindPaperPage from './FindPaperPage'
import StaffListPage from './StaffListPage'
import ArchivesPage from './ArchivesPage'
import PreviewPage from './PreviewPage'
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import SeriesPage from "./SeriesPage"
import SubmitPage from './SubmitPage'

render(<Header />, document.getElementById('headerNew'));
render(<Sidebar />, document.getElementById('sidebar'));
render(<Footer />, document.getElementById('footerNew'));

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('main-content'));


export { HomePage, SectionPage, ArticlePage, AuthorPage, JoinPage, SubscriptionsPage, WebPolicyPage, CommentsPolicyPage, FindPaperPage, StaffListPage, ArchivesPage, AboutPage, ContactPage, SeriesPage, PreviewPage, SubmitPage } 
