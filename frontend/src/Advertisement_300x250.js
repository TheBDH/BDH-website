import React, { Component } from 'react';
import { AdSlot } from 'react-dfp';

class Advertisement_300x250 extends Component {
  render() {
  	var visibility = "ad-open";
    return (
    	<div className={visibility}>
    		<div className="ad_300x250 advertisement">
    			<p>ADVERTISEMENT</p>
        		<AdSlot sizes={[[300, 250]]} adUnit={this.props.adUnit}/>
      		</div>
      </div>
    );
  }
}

export default Advertisement_300x250;