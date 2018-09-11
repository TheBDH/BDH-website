import React, { Component } from 'react';
import Advertisement_250x250 from './Advertisement_250x250';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Advertisement_250x250 url={this.props.ad1.url} name={this.props.ad1.name} imgUrl={this.props.ad1.imgUrl}/>
        <div className="sidebar-post">
          <a href="http://post.browndailyherald.com/">
            <img src="/static/images/post.png" alt="Post--Online"/>
          </a>
          <div className="sidebar-articles">
            {this.props.post_articles.map(article => <a className="small-article-title" href={article.url}>{article.title}</a>)} 
          </div>
        </div>
        <div className="sidebar-blog">
          <a href="http://blogdailyherald.com/">
            <img src="/static/images/blog.png" alt="Blog Daily Herald"/>
          </a>
          <div className="sidebar-articles">
            {this.props.blog_articles.map(article => <a className="small-article-title" href={article.url}>{article.title}</a>)} 
          </div>
        </div>
        <div className="sidebar-latest">
          <h3 className="med-nav-title">Latest Issue</h3>
          <a href={this.props.latest_issue.url}>
            <img src={this.props.latest_issue.imgUrl} alt={this.props.latest_issue.title}/>
          </a>
        </div>
        <Advertisement_250x250 url={this.props.ad2.url} name={this.props.ad2.name} imgUrl={this.props.ad2.imgUrl}/>
      </div>
    );
  }
}

export default Sidebar;