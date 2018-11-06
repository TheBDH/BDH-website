import React, { Component } from 'react';

class Featured_Hero_Article_Text_Overlay extends Component {
  render() {
    return (
      <div className="featured-hero-article-text-overlay">
        <div className="hero-image">
          <div className="hero-image-container">
            <div className="gradient-overlay"></div>
            <img src={this.props.hero.imgUrl} alt={this.props.hero.imgAlt} />
          </div>
        </div>
        <div className="text-overlay">
          <a href={this.props.hero.section.url}>
            <h2 className="med-section-title">{this.props.hero.section.name}</h2>
          </a>
          <a href={this.props.hero.url}>
            <h1 className="large-article-title">{this.props.hero.title}</h1>
          </a>
          <div className="small-article-info">
            <a href={this.props.hero.author.url}>{this.props.hero.author.name}</a> | {this.props.hero.date}
          </div>
          <p>{this.props.hero.excerpt}</p>
        </div>
      </div>
    );
  }
}

export default Featured_Hero_Article_Text_Overlay;