import React, { Component } from 'react';

class HeaderLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkOpen: false
    }
    this.linkToggle = this.linkToggle.bind(this);
  }

  linkToggle() {
    this.setState({linkOpen: !this.state.linkOpen});
  }

  linkState() {
    if (this.state.linkOpen) {
      return "open";
    } else {
      return "closed";
    }
  }

  createLink() {

    // if (this.props.dropList) {
    //   const dropList = this.props.dropList.map( (link) =>
    //     <li><a href={link.link}>{link.title}</a></li>
    //   );

    //   return (
    //     <div className="hasDropdown">
    //       <a href={this.props.link}>{this.props.title}</a>
    //       <ul>
    //         {dropList}
    //       </ul>
    //     </div>
    //   )

    // } else {
      return (
        <a href={this.props.link}>{this.props.title}</a>
      )
    // }
  }

  render() {
    const link = this.createLink();
    console.log("link", link);
    return (
      <li>{link}</li>
    );
  }
}

export default HeaderLink;