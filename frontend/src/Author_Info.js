import React, { Component } from 'react';

class Author_Info extends Component {

  render() {
    const { image, name, titlePosition, description } = this.props

    return (
        <div class='authorInfo'>
          <div class='profile'>
            <div class='image'>
              <img src={this.props.image} alt='Avatar' />
            </div>
            <div class='name'>{this.props.name}</div>
            <div class='titlePosition'>{this.props.titlePosition}</div>
          </div>
          <div class='profile-description'>
            <div dangerouslySetInnerHTML={{__html: this.props.description}} />
          </div>
        </div>
    )
  }
}


export default Author_Info;
