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
                <li><a href="www.blogdailyherald.com">blog daily herald</a></li>
                <li><a href="post.browndailyherald.com">post magazine</a></li>
                <li><a href="#">archives</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="med-nav-title">information</div>
              <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">join</a></li>
                <li><a href="www.bdhsales.com">advertise</a></li>
                <li><a href="#">donate</a></li>
                <li><a href="www.heraldalumni.org">alumni</a></li>
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
                  <a href="https://www.facebook.com/browndailyherald/"><img src="/static/images/fb-logo.png" /></a>
                  <a href="https://www.twitter.com/browndailyherald/"><img src="/static/images/twitter-logo.png" /></a>
                  <a href="https://www.instagram.com/browndailyherald/"><img src="/static/images/insta-logo.png" /></a>
                </div>
              </div>
              <div className="footer-break"></div>
              <div className="footer-donate">
                <a href="https://brownherald.z2systems.com/np/clients/brownherald/donation.jsp?campaign=1&" className = "med-nav-title">donate</a>
                {/* This is the direct link to the donation website; the other donate link previously goes to the BDH donate page */}
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