import React, { Component } from 'react';

class Advertisement_728x90 extends Component {
  render() {
    console.log("24782")
    return (
      <div className="ad_728x90 advertisement">
      	<p>ADVERTISEMENT</p>
      	<a href={this.props.url}>
      		<img src={this.props.imgUrl} alt={this.props.name} />
      	</a>
      </div>
    );
  }
}

export default Advertisement_728x90;