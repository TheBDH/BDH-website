import React, { Component } from 'react';

class NonSports extends Component {
  constructor(props){
    super(props);
    var isSportsOrAuthor = false;

    //gets the location of the page, if it is a sports or an author page,
    //the red header will appear
    if (window.location.href.indexOf("sports") != -1 || window.location.href.indexOf("author") != -1){
      isSportsOrAuthor = true;
    }

    this.state = {
      displaySectionHeader: isSportsOrAuthor
    }
  }

  renderSectionHeader(displaySectionHeader){
    if(displaySectionHeader){
      return <div class='section-header'>{this.props.sectionHeader}</div>;
    }

    else{
      return <div class= 'blank-section-header'></div>;
    }
  }

  render() {
    const { sectionHeader, title, author, date, description, image, authorLink, articleLink, imageLink} = this.props

    return (
        <div class='nonsports-column'>

          <div class='image'>
            <a href={this.props.imageLink}>
              <img src={this.props.image} />
            </a>
          </div>

          <div class='content'>
            {this.renderSectionHeader(this.state.displaySectionHeader)}
            <a href={this.props.articleLink}>
              <div class='title'>{this.props.title}</div>
            </a>
            <div class='meta'>
              <a href={this.props.authorLink}>
                <span class='author'>{this.props.author}</span>
              </a>
              <span class='date'> | {this.props.date}</span>
            </div>
            <div class='description'>
              <span>{this.props.description}</span>
            </div>
          </div>

        </div>
    )
  }
}


export default NonSports;
