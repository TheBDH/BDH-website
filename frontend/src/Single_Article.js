import React, { Component } from 'react';
import './App.css'
import Related_Articles from "./Related_Articles"
class Single_Article extends Component {

    render() {
        return (
            <div className='single-article' >
                <div className='single-article-header'>
                    <a href={this.props.sectionHeader.url}>{this.props.sectionHeader.title}</a>
                </div>
                <div className="single-article-titles">
                    <h1>{this.props.articleTitle}</h1>
                    <h3>{this.props.articleSubTitle}</h3>
                </div>
                <div className='single-article-info-bars' >
                    <div className='author-info'>
                        <div><a href={this.props.authorName.url}>{this.props.authorName.name}</a>  |  <a>{this.props.authorPosition}</a></div>
                        <p>{this.props.publishDate}</p>
                    </div>
                </div>
                <img className="single-article-image" src="http://www.browndailyherald.com/wp-content/uploads/2018/10/goldberg-3-1024x576.jpg" />
                <div className='single-article-body'>
                    <p>
                        {this.props.articleBody}
                    </p>
                </div>
                <div className="single-article-topics" >
                    <p>TOPICS: {this.props.topics.map((topic, index) => <a target="blank" href={topic.url}>{topic.title}{index < this.props.topics.length - 1 ? ', ' : ''}</a>)}</p>
                </div>
                <div className='single-article-share' >
                    <a >SHARE THIS ARTICLE</a>
                    <img src="/facebookIcon.png" style={{ width: 13, height: 13 }} />
                </div>
                <div className="single-article-related-articles" >
                    <a >RELATED ARTICLES</a>
                    <Related_Articles articles={this.props.relatedArticles} />
                </div>
                <div className="single-article-comments" >
                    <p className="single-article-comments-text" >COMMENTS</p>
                </div>
            </div >
        );

    }
}



export default Single_Article;