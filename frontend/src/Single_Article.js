import React, { Component } from 'react';
import './App.css'
import Related_Articles from "./Related_Articles"
import { getFullSectionName } from './constants'

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class Single_Article extends Component {

    render() {
        var fbShareLink = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href;
        var twShareLink = 'https://twitter.com/home?status=' + window.location.href;
        return (
            <div className='single-article' >
                <div className='single-article-header'>
                    <a href={this.props.sectionHeader.url}>{getFullSectionName(this.props.sectionHeader.title)}</a>
                </div>
                <div className="single-article-titles">
                    <h1>{this.props.articleTitle}</h1>
                    <h3>{this.props.articleSubTitle}</h3>
                </div>
                <div className='single-article-info-bars' >
                    <div className='author-info'>
                        <div><a href={this.props.authorName.url}>{this.props.authorName.name}</a>  |  {this.props.authorPosition}</div>
                        <p>First published {this.props.publishDate} | Last updated {this.props.updateDate}</p>
                    </div>
                </div>
                {this.props.gallery ? 
                    (<div> <br/> <ImageGallery items={this.props.galleryImgs} /></div>):
                    (<img className="single-article-image" src={this.props.featuredImg} />)
                }
                <div className='single-article-body' dangerouslySetInnerHTML={{__html: this.props.articleBody}}>
                    
                </div>
                <div className="single-article-topics" >
                    <p>TOPICS: {this.props.topics.join()}</p>
                </div>
                <div className='single-article-share' >
                    <p >SHARE THIS ARTICLE</p> &nbsp; &nbsp;
                    <a href= {{ fbShareLink }}><img src="/static/images/fb-logo.png" style={{ width: 28, height: 28 }} /></a> &nbsp; &nbsp;
                    <a href= {{ twShareLink }}><img src="/static/images/twitter-logo.png" style={{ width: 28, height: 28 }} /> </a>
                </div>
                <div className="single-article-related-articles" >
                    <a >RELATED ARTICLES</a>
                    <Related_Articles articles={this.props.relatedArticles} />
                </div>
                <div className="single-article-comments" >
                    <p className="single-article-comments-text" >COMMENTS</p>
                    <div id="disqus_thread"></div>
                </div>
            </div >
        );

    }
}

//Known Bug: Disqus only loads on force refresh of page.
//Add in capability for displaying multiple authors on front-end.

export default Single_Article;