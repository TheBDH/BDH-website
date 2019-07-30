/* global RSSParser */

import React, { Component } from 'react';
import Advertisement_300x250 from './Advertisement_300x250';
import { DFPSlotsProvider } from 'react-dfp';
import 'rss-parser/dist/rss-parser.min.js';

import MailchimpSubscribe from "react-mailchimp-subscribe"


const issuuStyle = {
  width:'100%', 
  height:'406px',
}

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
    };
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

    var mailchimpUrl = "https://browndailyherald.us1.list-manage.com/subscribe/post?u=373505593bc39c5fd8ea5d5a8&amp;id=9a2e83adcb"

    return (
      <DFPSlotsProvider dfpNetworkId='1149905'>
      <div className="sidebar">
        <Advertisement_300x250 adUnit='BDH_RightSidebar_300x250'/>
         <div className="footer-subscribe">
         <div className="med-nav-title">get daily headlines:</div>
            <MailchimpSubscribe url = {mailchimpUrl} />
              </div>
            
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




// <!-- Begin Mailchimp Signup Form -->
// <link href=“//cdn-images.mailchimp.com/embedcode/slim-10_7.css” rel=“stylesheet” type=“text/css”>
// <style type=“text/css”>
// #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
// /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id=“mc_embed_signup”>
// <form action=“https://browndailyherald.us1.list-manage.com/subscribe/post?u=373505593bc39c5fd8ea5d5a8&amp;id=9a2e83adcb” method=“post” id=“mc-embedded-subscribe-form” name=“mc-embedded-subscribe-form” class=“validate” target=“_blank” novalidate>
// <div id=“mc_embed_signup_scroll”>
// <label for=“mce-EMAIL”>Subscribe to our email newsletter</label>
// <input type=“email” value=“” name=“EMAIL” class=“email” id=“mce-EMAIL” placeholder=“email address” required>
// <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
// <div style=“position: absolute; left: -5000px;” aria-hidden=“true”><input type=“text” name=“b_373505593bc39c5fd8ea5d5a8_9a2e83adcb” tabindex=“-1" value=“”></div>
// <div class=“clear”><input type=“submit” value=“Subscribe” name=“subscribe” id=“mc-embedded-subscribe” class=“button”></div>
// </div>
// </form>
// </div>

// <!—End mc_embed_signup--> 