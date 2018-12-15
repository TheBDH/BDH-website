import React, { Component } from 'react';
import HeaderMainStatic from './HeaderMainStatic';
import HeaderMainFixed from './HeaderMainFixed';

class HeaderMain extends Component {
  render() {
    return (
      <div>
        <HeaderMainStatic />
        <HeaderMainFixed />
      </div>

    );
  }
}

export default HeaderMain;