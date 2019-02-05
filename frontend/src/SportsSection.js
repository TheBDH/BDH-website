import React, { Component } from 'react';

class SportsSection extends Component {
  render() {
    return (
      <div className="sport-section">
        <ul>
        {
          this.props.sports.map((sports)=>
            <li><a href={sports.link}>{sports.name}</a></li>
          )}
        </ul>
      </div>
    );
  }
}

export default SportsSection;