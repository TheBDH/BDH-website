/* global RSSParser */

import React, { Component } from 'react';
import Advertisement_300x250 from './Advertisement_300x250';
import { DFPSlotsProvider } from 'react-dfp';
import 'rss-parser/dist/rss-parser.min.js';

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
    let parser = new RSSParser();

    //Below code gets content from the post- RSS feed and loads into state
    var postUrl = 'http://post.browndailyherald.com/feed/';

    parser.parseURL(proxyUrl + postUrl, function(err, feed) {
      let postArticles = [];
      let postLinks = [];
      feed.items.map(k => { postArticles.push(k.title); postLinks.push(k.guid); });
      this.setState( { postArticles, postLinks });
    }.bind(this));
  }

  render() {
    //Below code creates the elements for links to post- articles
    var postArticleLinks = [];
    if (this.state.postArticles && this.state.postLinks) {
      for(var i=0; i < 4; i++){
        postArticleLinks.push(<a className='small-article-title' href={this.state.postLinks[i]}>{this.state.postArticles[i]}</a>);
      }
    }

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
        <div className="sidebar-latest">
          <h3 className="med-nav-title">Latest Issue</h3>
          <div data-configid="1463144/65888671" style={issuuStyle} className="issuuembed"></div>
        </div>
        <Advertisement_300x250 adUnit='BDH_RightSidebar3_300x250' />
      </div>
      </DFPSlotsProvider>
    );
  }
}

export default Sidebar;