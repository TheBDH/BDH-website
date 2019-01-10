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
                <li><a href="/sections/news">news</a></li>
                <li><a href="/sections/arts-and-culture">arts & culture</a></li>
                <li><a href="/sections/science-research">science & research</a></li>
                <li><a href="/sections/sports">sports</a></li>
                <li><a href="/sections/opinion">opinion</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="med-nav-title">online</div>
              <ul>
                <li className="has-child">
                  <a href="sections/multimedia">multimedia</a>
                  <ul>
                    <li><a href="sections/multimedia/photo-galleries">photo galleries</a></li>
                    <li><a href="sections/multimedia/videos">videos</a></li>
                    <li><a href="sections/multimedia/data-science">data science</a></li>
                    <li><a href="sections/multimedia/graphics">graphics</a></li>
                    <li><a href="sections/multimedia/illustrations">illustrations</a></li>              
                  </ul>
                </li>
                <li><a href="sections/comics">comics</a></li>
                <li><a href="www.blogdailyherald.com">blog daily herald</a></li>
                <li><a href="post.browndailyherald.com">post magazine</a></li>
                <li><a href="/archives">archives</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="med-nav-title">information</div>
              <ul>
                <li><a href="/about">about</a></li>
                <li><a href="/contact">contact</a></li>
                <li><a href="/join">join</a></li>
                <li><a href="www.bdhsales.com">advertise</a></li>
                <li><a href="https://brownherald.z2systems.com/np/clients/brownherald/donation.jsp?campaign=1&">donate</a></li>
                <li><a href="www.heraldalumni.org">alumni</a></li>
                <li><a href="/privacy-policy">privacy policy</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <div className="footer-subscribe">
                <a href="http://eepurl.com/sDrDr" target="_blank" className="med-nav-title">subscribe</a>
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