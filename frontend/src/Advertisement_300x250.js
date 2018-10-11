import React, { Component } from 'react';

class Advertisement_300x250 extends Component {
  render() {
    return (
      <div className="ad_300x250 advertisement">
      	<p>ADVERTISEMENT</p>
      	<a href={this.props.url}>
      		<img src={this.props.imgUrl} alt={this.props.name} />
      	</a>
      </div>
    );
  }
}

export default Advertisement_300x250;