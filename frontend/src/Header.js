import React, { Component } from 'react';
import HeaderLink from './HeaderLink';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerToggle: false
    }
    this.burgerToggle = this.burgerToggle.bind(this);
    this.resetBurgerToggle = this.resetBurgerToggle.bind(this);
  }

  burgerToggle() {
    this.setState({burgerToggle: !this.state.burgerToggle});
    if (this.state.burgerToggle) {
      document.body.classList.remove("mobile-open");
    } else {
      document.body.classList.add("mobile-open");
    }
  }

  burgerState() {
    if (this.state.burgerToggle) {
      return "open";
    } else {
      return "closed";
    }
  }

  resetBurgerToggle() {
    if (window.innerWidth > 768) {
      this.setState({burgerToggle: false});
      document.body.classList.remove("mobile-open");
    }
  }

  componentDidMount() {
    this.resetBurgerToggle();
    window.addEventListener("resize", this.resetBurgerToggle.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resetBurgerToggle.bind(this));
  }



  render() {
    var burgerState = this.burgerState();

    return (
      <header>
        <div className="desktop-only">
          <div className="top-header">
            <ul className="main-container">
              <li><a href="#">about</a></li> 
              <li><a href="#">submit</a></li>
              <li><a href="http://www.bdhsales.com" target="_blank">advertise</a></li>
              <li><a href="http://www.heraldalumni.org/donate.html" target="_blank">donate</a></li>
              <li><a href="#">subscribe</a></li>
              <li className="header-search"><input type="search" placeholder="SEARCH"/></li>
              <li className="header-icon"><a href="https://www.facebook.com/browndailyherald/"><img src="/static/images/fb-logo-gray.png" alt="facebook"/></a></li>
              <li className="header-icon"><a href="https://www.twitter.com/browndailyherald/"><img src="/static/images/twitter-logo-gray.png" alt="twitter"/></a></li>
              <li className="header-icon"><a href="https://www.instagram.com/browndailyherald/"><img src="/static/images/ig-logo-gray.png" alt="instagram"/></a></li>
            </ul>
          </div>
          <div className="header-flag">
            <a href="http://www.browndailyherald.com"><img src="/static/images/bdh_flag.png" alt="Brown Daily Herald"/></a>
          </div>
          <div className="bottom-header">
            <ul className="main-container">
              {
                  this.props.mainNav.map((link)=>
                    <HeaderLink link={link.link} title={link.title} dropList={link.dropList}/>
                  )
              }
            </ul>
          </div>
        </div>
        <div className="mobile-header-content mobile-only">
          <div className="burger" onClick={this.burgerToggle}>
            <div className={ burgerState }>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
          <div className="mobile-nav">
            <div className = {burgerState}>
              <div className="med-nav-title">sections</div>
              <ul className="mobile-main-nav">
                <li><a href="#">news</a></li>
                <li><a href="#">arts & culture</a></li>
                <li><a href="#">science & research</a></li>
                <li><a href="#">sports</a></li>
                <li><a href="#">opinion</a></li>
              </ul>
              <div className="med-nav-title">more</div>
              <ul className="mobile-other-nav">
                <li><a href="#">about</a></li> 
                <li><a href="#">submit</a></li>
                <li><a href="http://www.bdhsales.com" target="_blank">advertise</a></li>
                <li><a href="http://www.heraldalumni.org/donate.html" target="_blank">donate</a></li>
                <li><a href="#">subscribe</a></li>
              </ul>
              <ul className="mobile-social">
                <li className="header-icon"><a href="https://www.facebook.com/browndailyherald/"><img src="/static/images/fb-logo-gray.png" alt="facebook"/></a></li>
                <li className="header-icon"><a href="https://www.twitter.com/browndailyherald/"><img src="/static/images/twitter-logo-gray.png" alt="twitter"/></a></li>
                <li className="header-icon"><a href="https://www.instagram.com/browndailyherald/"><img src="/static/images/ig-logo-gray.png" alt="instagram"/></a></li>
              </ul>
            </div>
          </div>
          <div className="mobile-header-flag">
            <a href="http://www.browndailyherald.com"><img src="/static/images/bdh_flag.png" alt="Brown Daily Herald"/></a>
          </div>
          <div className="mobile-search">
            <img src="/static/images/search-icon-black.png" alt="click to search"/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;