import React, { Component } from 'react';

class Section_Featured_Articles extends Component {
  render() {
    console.log(this.props);
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
            <p>{first_article.previewText}</p>
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
            <p>{articles[1].previewText}</p>
            </div>
            </div>
          </div>
          <div className="section-panel">
          <div className="section-panel-img">
            <img src={articles[2].imgUrl} alt={articles[2].imgAlt}/>
            </div>
            <div className="section-panel-text">
            <a className="small-article-title" href={articles[2].url}>{articles[2].title}</a>
            <div className="small-article-info">
              <a href={articles[2].author.url}>{articles[2].author.name}</a> | {articles[2].date}
            </div>
            <div>
            <p>{articles[2].previewText}</p>
            </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Section_Featured_Articles;