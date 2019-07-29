import React, { Component } from 'react';
import './App.css'
import Related_Articles from "./Related_Articles"
import { getFullSectionName } from './constants'
import bdhRequester from './requests'

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class Single_Article extends Component {

    constructor(props) {
        super(props);
        //this.generateAuthorElement = this.generateAuthorElement.bind(this);
    }

    // generateAuthorElement(authors) {
    //     return authors.map(x => )

    // }

    render() {
        const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
        const twShareLink = `https://twitter.com/home?status=${window.location.href}`;
        console.log(this.props);
        const { sectionHeader, articleTitle, articleSubTitle, gallery, galleryImgs,
            authorName, authorPosition, featuredImg, publishDate, updateDate, articleBody, topics, relatedArticles } = this.props
        return (
            <div className='single-article' >
                <div className='single-article-header'>
                    <a href={sectionHeader.url}>{getFullSectionName(sectionHeader.title)}</a>
                </div>
                <div className="single-article-titles">
                    <h1>{articleTitle}</h1>
                    <h3>{articleSubTitle}</h3>
                </div>
                <div className='single-article-info-bars' >
                    <div className='author-info'>
                        <div><a href={authorName.url}>{authorName.name}</a>  |  {authorPosition}</div>
                        <p>First published {publishDate} | Last updated {updateDate}</p>
                    </div>
                </div>

                {this.props.gallery ? 
                    (<div> <br/> <ImageGallery items={this.props.galleryImgs} /></div>):
                    (<img className="single-article-image" src={this.props.featuredImg} />)
                }

                <div className='single-article-body' dangerouslySetInnerHTML={{ __html: articleBody }}>

                </div>
                <div className="single-article-topics" >
                    <p>TOPICS: {topics.map(
                        function(item, index) {
                            return (<a href={item.url}>{ ((index >= 0 && index < topics.length) ? item + ', ' : '')}</a>);
                        })}</p>
                </div>
                <div className='single-article-share' >
                    <p >SHARE THIS ARTICLE</p> &nbsp; &nbsp;
                    <a href={fbShareLink} target="_blank"><img src="/static/images/fb-logo.png" style={{ width: 28, height: 28 }} /></a> &nbsp; &nbsp;
                    <a href={twShareLink} target="_blank"><img src="/static/images/twitter-logo.png" style={{ width: 28, height: 28 }} /> </a>
                </div>
                <div className="single-article-related-articles" >
                    <a >RELATED ARTICLES</a>
                    <Related_Articles articles={relatedArticles} />
                </div>
                <div className="single-article-comments" >
                    <p className="single-article-comments-text" >COMMENTS</p>
                    <div id="disqus_thread">
                    </div>
                </div>
            </div >
        );

    }
}

//Known Bug: Disqus only loads on force refresh of page.
//Add in capability for displaying multiple authors on front-end.

export default Single_Article;