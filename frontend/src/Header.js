import React, { Component } from 'react';

class Header extends Component {

  // function BurgerToggle(x) {
  //   x.classList.toggle("open");
  // }

  render() {
    return (
      <header>
        <div className="desktop-only">
          <div className="top-header">
            <ul className="main-container">
              <li><a href="#">about</a></li> 
              <li><a href="#">contact</a></li> 
              <li><a href="#">submit</a></li>
              <li><a href="http://www.bdhsales.com" target="_blank">advertise</a></li>
              <li><a href="http://www.heraldalumni.org/donate.html" target="_blank">donate</a></li>
              <li><a href="#">subscribe</a></li>
              <li className="header-search"><input type="search" placeholder="SEARCH"/></li>
              <li className="header-icon"><a href="https://www.facebook.com/browndailyherald/"><img src="/static/images/fb-logo.png" alt="facebook"/></a></li>
              <li className="header-icon"><a href="https://www.twitter.com/browndailyherald/"><img src="/static/images/twitter-logo.png" alt="twitter"/></a></li>
              <li className="header-icon"><a href="https://www.instagram.com/browndailyherald/"><img src="/static/images/insta-logo.png" alt="instagram"/></a></li>
            </ul>
          </div>
          <div className="header-flag">
            <a href="http://www.browndailyherald.com"><img src="/static/images/bdh_flag.png" alt="Brown Daily Herald"/></a>
          </div>
          <div className="bottom-header">
            <ul className="main-container">
              <li><a href="{% url 'index' %}">Home</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Arts and Culture</a></li>
              <li><a href="#">Science and Research</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Opinion</a></li>
              <li><a href="http://post.browndailyherald.com">POST</a></li>
              <li><a href="http://www.blogdailyherald.com">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="mobile-header-content mobile-only">
          <div className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="mobile-header-flag">
            <a href="http://www.browndailyherald.com"><img src="/static/images/bdh_flag.png" alt="Brown Daily Herald"/></a>
          </div>
          <div className="mobile-search">
            <img src="/static/images/search.png" alt="click to search"/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;