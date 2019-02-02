import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderMainFixed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.changeVisibilityOnScroll = this.changeVisibilityOnScroll.bind(this);
    this.resetVisibilityOnResize = this.resetVisibilityOnResize.bind(this);
  }

  visibilityState() {
    if (this.state.visible) {
      return "open";
    } else {
      return "closed";
    }
  }

  changeVisibilityOnScroll() {
    var staticNav = document.getElementById('header-static');

    if (staticNav.getBoundingClientRect().bottom <= 84) {
      this.setState({visible: true});
    } else  {
      this.setState({visible: false});
    }
  }

  resetVisibilityOnResize() {
    var staticNav = document.getElementById('header-static');
    
    if (staticNav.getBoundingClientRect().bottom <= 84) {
      this.setState({visible: true});
    } else  {
      this.setState({visible: false});
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeVisibilityOnScroll.bind(this));
    window.addEventListener("resize", this.resetVisibilityOnResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeVisibilityOnScroll.bind(this));
    window.removeEventListener("resize", this.resetVisibilityOnResize.bind(this));
  }

  render() {
    var visibility = this.visibilityState();

    return (
      <div id="header-fixed" className={visibility}>

        <div className="header-flag main-container">
          <div className="nav-fixed-special">
            <a href="http://www.heraldalumni.org/donate.html" target="_blank">donate</a>
            <a href="http://eepurl.com/sDrDr">subscribe</a>
          </div>

          <a href="/"><img src="/static/images/sticky_flag.jpg" alt="Brown Daily Herald"/></a>

          <div className="nav-fixed-social">
            <a className="header-icon" href="https://www.facebook.com/browndailyherald/"><img src="/static/images/fb-logo-gray.png" alt="facebook"/></a>
            <a className="header-icon" href="https://www.twitter.com/browndailyherald/"><img src="/static/images/twitter-logo-gray.png" alt="twitter"/></a>
            <a className="header-icon" href="https://www.instagram.com/browndailyherald/"><img src="/static/images/ig-logo-gray.png" alt="instagram"/></a>
          </div>
        </div>

        <div className="bottom-header nav-wrapper">
          <div className="main-container nav">
            <a href="/">home</a>
            <a className="has-dropdown" href="/sections/news">news▾
              <div className="nav-dropdown">
                <a href="/sections/university-news">University News</a>
                <a href="/sections/metro">Metro</a>
              </div>
            </a>
            <a href="/sections/arts-and-culture">arts and culture</a>
            <a href="/sections/science-research">science and research</a>
            <a href="/sections/sports">sports</a>
            <a className="has-dropdown" href="/sections/opinion">opinion▾
              <div className="nav-dropdown">
                <a href="/sections/columns">columns</a>
                <a href="/sections/op-eds">op-eds</a>
                <a href="/sections/editorials">editorials</a>
                <a href="/sections/letters-to-the-editor">letters to the editor</a>
              </div>
            </a>
            <a className= 'has-dropdown' href="/sections/multimedia">multimedia▾
              <div className="nav-dropdown">
                <a href="/sections/photo-galleries">Photo Galleries</a>
                <a href="/sections/graphics">Graphics</a>
                <a href="/sections/videos">Videos</a>
                <a href="/sections/illustrations">illustrations</a>
                <a href="/sections/comics">comics</a>
              </div>
            </a>
            <a href="http://post.browndailyherald.com">post-</a>
            <a className="has-dropdown">more▾
              <div className="nav-dropdown">
                <a href="/about">about</a>
                <a href="/contact">contact</a>
                <a href="/submit">submit</a>
                <a href="http://www.bdhsales.com" target="_blank">advertise</a>
                <a className="nav-special" href="http://www.heraldalumni.org/donate.html" target="_blank">donate</a>
                <a className="nav-special" href="http://eepurl.com/sDrDr">subscribe</a>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMainFixed;