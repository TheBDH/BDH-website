import React, { Component } from 'react';

class Section_Featured_Articles extends Component {
  render() {
    var first_article = this.props.section.featured_articles[0];
    var articles = this.props.section.featured_articles;
    return (
      <div>
      <a href={this.props.section.url}><h2 className="med-nav-title">{this.props.section.title}</h2></a>
      <div className="wrapper">
          <div className="section-tall-panel">

            <div className="fill">
            <img src={first_article.imgUrl} alt={first_article.imgAlt}/>
            <div className="text-block">
            <a className="large-article-title" href={first_article.url}>{first_article.title}</a>
            <div className="small-article-info">
              <a href={first_article.author.url}>{first_article.author.name}</a> | {first_article.date}
            </div>
            <div>
            <p>Put article text in here.</p>
            </div>
            </div>
            </div>
          </div>
          <div className="section-panel">
          <div className="section-panel-img">
            <img src={articles[1].imgUrl} alt={articles[1].imgAlt}/>
            </div>
            <div className="section-panel-text">
            <a className="small-article-title" href={articles[1].url}>{articles[1].title}</a>
            <div className="small-article-info">
              <a href={articles[1].author.url}>{articles[1].author.name}</a> | {articles[1].date}
            </div>
            <div>
            <p>Put article text in here.</p>
            </div>
            </div>
          </div>
          <div className="section-panel">
          <div className="section-panel-img">
            <img src={articles[1].imgUrl} alt={articles[1].imgAlt}/>
            </div>
            <div className="section-panel-text">
            <a className="small-article-title" href={articles[1].url}>{articles[1].title}</a>
            <div className="small-article-info">
              <a href={articles[1].author.url}>{articles[1].author.name}</a> | {articles[1].date}
            </div>
            <div>
            <p>Put article text in here.</p>
            </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Section_Featured_Articles;