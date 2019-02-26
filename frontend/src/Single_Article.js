import React, { Component } from 'react';
import './App.css'
import Related_Articles from "./Related_Articles"

class Single_Article extends Component {
    render() {
        const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
        const twShareLink = `https://twitter.com/home?status=${window.location.href}`;
        const { relatedArticles, sectionHeader, articleTitle, articleSubTitle, authorName, authorPosition, publishDate, updateDate, articleBody, topics } = this.props
        return (
            <div className='single-article' >
                <div className='single-article-header'>
                    <a href={sectionHeader.url}>{sectionHeader.title}</a>
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
                <img className="single-article-image" src="http://www.browndailyherald.com/wp-content/uploads/2018/10/goldberg-3-1024x576.jpg" />
                <div className='single-article-body' dangerouslySetInnerHTML={{ __html: articleBody }}>

                </div>
                <div className="single-article-topics" >
                    {/* <p>TOPICS: {this.props.topics.join()}</p> */}
                    <p>TOPICS: {topics.map(topic => <a href={topic.url}>{topic}</a>)}</p>
                    {/* //map through topics array
                    //create separate <a></a> for every topics
                    //assign individual topic's href programatically */}
                </div>
                <div className='single-article-share' >
                    <p >SHARE THIS ARTICLE</p> &nbsp; &nbsp;
                    <a href={fbShareLink}><img src="/static/images/fb-logo.png" style={{ width: 28, height: 28 }} /></a> &nbsp; &nbsp;
                    <a href={twShareLink}><img src="/static/images/twitter-logo.png" style={{ width: 28, height: 28 }} /> </a>
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