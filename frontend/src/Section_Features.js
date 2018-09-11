import React, { Component } from 'react';

class Section_Features extends Component {
  render() {
    return (
      <div className="section-features">
        <a href={this.props.section.url}>
          <h2 className="med-nav-title">{this.props.section.title}</h2>
        </a>
        <div className="section-featured-articles">
          <img src={this.props.section.featured_articles[0].imgUrl} alt={this.props.section.featured_articles[0].imgAlt}/>
          {this.props.section.featured_articles.map(
            article => 
            <div>
              <a className="small-article-title" href={article.url}>{article.title}</a>
              <div className="small-article-info">
                <a href={article.author.url}>{article.author.name}</a> | {article.date}
              </div>
            </div>
          )} 
        </div>
      </div>
    );
  }
}

export default Section_Features;