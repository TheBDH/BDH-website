import React, { Component } from 'react';

class Section_Features extends Component {
  render() {
    var first_article = this.props.section.featured_articles[0];
    var articles = this.props.section.featured_articles;
    return (
      <div className="section-features">
        <a href={this.props.section.url}><h2 className="med-nav-title">{this.props.section.title}</h2></a>
        <div className="section-featured-articles">
          <div className="section-article-excerpt-img">
            <div className="section-article-excerpt-img-wrapper">
              <img src={first_article.imgUrl} alt={first_article.imgAlt}/>
            </div>
          </div>
          <div className="section-article-excerpt">
            <a className="small-article-title" href={first_article.url}>{first_article.title}</a>
            <div className="small-article-info">
              <a href={first_article.author.url}>{first_article.author.name}</a> | {first_article.date}
            </div>
          </div>
          {articles.slice(1, articles.length).map(
            article => 
            <div className="section-article-excerpt">
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