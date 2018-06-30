import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="article">
        <header className="article-header">
          <h1 className="article-title">My Article</h1>
          <h3 className='article-subtitle'>Fun subtitle</h3>
        </header>
        <p className="article-body">
          Lorem ipsum dolor sum. 
        </p>
      </div>
    );
  }
}

export default Article;