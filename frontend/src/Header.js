import React, { Component } from 'react';
import HeaderMain from './HeaderMain';
import HeaderMobile from './HeaderMobile';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
      <header>
        <div className="desktop-only">
          <HeaderMain mainNav={this.props.mainNav} />
        </div>
        <div className="mobile-header-content mobile-only">
          <HeaderMobile />
        </div>
      </header>
    );
  }
}

export default Header;