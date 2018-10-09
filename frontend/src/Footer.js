import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="main-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="med-nav-title">sections</div>
              <ul>
                <li><a href="#">news</a></li>
                <li><a href="#">arts & culture</a></li>
                <li><a href="#">science & research</a></li>
                <li><a href="#">sports</a></li>
                <li><a href="#">opinion</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="med-nav-title">online</div>
              <ul>
                <li className="has-child">
                  <a href="#">multimedia</a>
                  <ul>
                    <li><a href="#">photo galleries</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">data science</a></li>
                    <li><a href="#">graphics</a></li>
                    <li><a href="#">illustrations</a></li>              
                  </ul>
                </li>
                <li><a href="#">comics</a></li>
                <li><a href="#">blog daily herald</a></li>
                <li><a href="#">post magazine</a></li>
                <li><a href="#">archives</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="med-nav-title">information</div>
              <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">join</a></li>
                <li><a href="#">advertise</a></li>
                <li><a href="#">donate</a></li>
                <li><a href="#">alumni</a></li>
                <li><a href="#">privacy policy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="footer-subscribe">
                <div className="med-nav-title">subscribe</div>
                <form>
                  <input type="email" placeholder="EMAIL ADDRESS" />
                </form>
              </div>
              <div className="footer-break"></div>
              <div className="footer-follow">
                <div className="med-nav-title">follow us</div>
                <div className="logo-strip">
                  <a href="https://www.facebook.com/browndailyherald/"><img src="/static/images/fb-logo-gray.png" /></a>
                  <a href="https://www.twitter.com/browndailyherald/"><img src="/static/images/twitter-logo-gray.png" /></a>
                  <a href="https://www.instagram.com/browndailyherald/"><img src="/static/images/ig-logo-gray.png" /></a>
                </div>
              </div>
              <div className="footer-break"></div>
              <div className="footer-donate">
                <div className="med-nav-title">donate</div>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-copyright main-container">Copyright © 2018 Brown Daily Herald. All Rights Reserved.</p>
      </footer>
    );
  }
}

export default Footer;