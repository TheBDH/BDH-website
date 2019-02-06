import React, { Component } from 'react';

class Featured_Article_Excerpt extends Component {
  render() {
    return (
      <div className="featured-article-excerpt">
        <a href={this.props.article.section.url}>
          <h2 className="med-section-title">{this.props.article.section.name}</h2>
        </a>
        <a href={this.props.article.url}>
          <h1 className="med-article-title">{this.props.article.title}</h1>
        </a>
        <div className="small-article-info">
          <a href={this.props.article.author.url}>{this.props.article.author.name}</a> | {this.props.article.date}
        </div>
        <p>{this.props.article.excerpt}</p>
      </div>
    );
  }
}

export default Featured_Article_Excerpt;