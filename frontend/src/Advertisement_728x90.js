import React, { Component } from 'react';
import { AdSlot, DFPSlotsProvider } from 'react-dfp';

class Advertisement_728x90 extends Component {
  render() {
    return (
      <DFPSlotsProvider dfpNetworkId='1149905'>
      <div className="ad_728x90 advertisement">
      	<p>ADVERTISEMENT</p>
        <div className="ad_728x90_wrapper">
      	  <AdSlot sizes={[[728, 90]]} adUnit={this.props.adUnit}/>
        </div>
      </div>
      </DFPSlotsProvider>
    );
  }
}

export default Advertisement_728x90;