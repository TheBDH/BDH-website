import React, { Component } from 'react';


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
            <a href="/print-subscriptions">subscribe</a>
          </div>

          <a href="/"><img src="/static/images/bdh_flag.png" alt="Brown Daily Herald"/></a>

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
                <a href="#">fake link</a>
                <a href="#">fake link</a>
                <a href="#">fake link</a>
                <a href="#">fake link</a>
              </div>
            </a>
            <a href="/sections/arts-and-culture">arts and culture</a>
            <a href="/sections/science-research">science and research</a>
            <a href="/sections/sports">sports</a>
            <a href="/sections/opinion">opinion</a>
            <a href="http://post.browndailyherald.com">post</a>
            <a href="http://www.blogdailyherald.com">blog</a>
            <a className="has-dropdown">more▾
              <div className="nav-dropdown">
                <a href="/about">about</a>
                <a href="/contant">contact</a>
                <a href="/submit">submit</a>
                <a href="http://www.bdhsales.com" target="_blank">advertise</a>
                <a className="nav-special" href="http://www.heraldalumni.org/donate.html" target="_blank">donate</a>
                <a className="nav-special" href="/print-subscriptions">subscribe</a>
              </div>
            </a>
          </div>
        </div>
      </div>

    );
  }
}

export default HeaderMainFixed;