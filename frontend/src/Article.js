import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="article">
        <header className="article-header">
          <p className='section-header'>Section Header </p>
          <h1 className="article-title">{this.props.title}</h1>
          <h3 className='article-subtitle'>Fun subtitle</h3>
        </header>
        <div className='info-bars'>
          <div className='author-info'>
            <p>Author Name</p>
            <p>Position</p>
            <p id='year'>{this.props.year}</p>
          </div>
          <div className='share-info'>
            <p>SHARE</p>
          </div>
        </div>
        <div className='featured-image'>
          <p className='caption'></p>
        </div>
        <div className='article-body'>
          <p className="article-body">
            Lorem ipsum dolor sum. 
          </p>
        </div>
      </div>
    );
  }
}

export default Article;