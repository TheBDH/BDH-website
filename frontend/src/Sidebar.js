import React, { Component } from 'react';
import Advertisement_300x250 from './Advertisement_300x250';
import { DFPSlotsProvider } from 'react-dfp';
import * as rssParser from 'react-native-rss-parser';

const issuuStyle = {
  width:'100%', 
  height:'406px',
}

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    //Below code gets content from the post- RSS feed and loads into state
    var postUrl = 'http://post.browndailyherald.com/feed/';
    fetch(proxyUrl + postUrl)
     .then((response) => response.text())
     .then((responseData) => rssParser.parse(responseData))
     .then((rss) => {
      let postArticles = [];
      let postLinks = [];
      rss.items.map(k => { postArticles.push(k.title); postLinks.push(k.id); });
      this.setState( { postArticles, postLinks });
    });

    var blogUrl = 'http://blogdailyherald.com/feed/';
    fetch(proxyUrl + blogUrl)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        let blogArticles = [];
        let blogLinks = [];
        rss.items.map(k => { blogArticles.push(k.title); blogLinks.push(k.links[0]); });
        this.setState( { blogArticles, blogLinks })
      });
  }

  render() {
    //Below code creates the elements for links to post- articles
    var postArticleLinks = [];
    if (this.state.postArticles && this.state.postLinks) {
      for(var i=0; i < 4; i++){
        postArticleLinks.push(<a className='small-article-title' href={this.state.postLinks[i]}>{this.state.postArticles[i]}</a>);
      }
    }

    var blogArticleLinks = [];
    if (this.state.blogArticles && this.state.blogLinks) {
      for(var i=0; i < 4; i++){
        blogArticleLinks.push(<a className='small-article-title' href={this.state.blogLinks[i].url}>{this.state.blogArticles[i]}</a>);
      }
    }

    console.log(this.state);

    return (
      <DFPSlotsProvider dfpNetworkId='1149905'>
      <div className="sidebar">
        <Advertisement_300x250 adUnit='BDH_RightSidebar_300x250'/>
        <div className="sidebar-post">
          <a href="http://post.browndailyherald.com/">
            <img src="/static/images/post-logo.png" alt="Post--Online" width="250"/>
          </a>
          <div className="sidebar-articles">
            {postArticleLinks} 
          </div>
        </div>
        <Advertisement_300x250 adUnit='BDH_RightSidebar2_300x250'/>
        <div className="sidebar-blog">
          <a href="http://blogdailyherald.com/">
            <img src="/static/images/blog-logo.png" alt="Blog Daily Herald" width="250"/>
          </a>
          <div className="sidebar-articles">
            {blogArticleLinks}
          </div>
        </div>
        <Advertisement_300x250 adUnit='BDH_RightSidebar3_300x250' />
        <div className="sidebar-latest">
          <h3 className="med-nav-title">Latest Issue</h3>
          <div data-configid="1463144/65888671" style={issuuStyle} className="issuuembed"></div>
        </div>
      </div>
      </DFPSlotsProvider>
    );
  }
}

export default Sidebar;