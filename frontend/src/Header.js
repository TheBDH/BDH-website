import React, { Component } from 'react';

import HeaderMain from './HeaderMain';
import HeaderMobile from './HeaderMobile';

let query='';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  resetBurgerToggle() {
    if (window.innerWidth > 768) {
      this.setState({burgerToggle: false});
      document.body.classList.remove("mobile-open");
    }
  }

  componentDidMount() {
    this.resetBurgerToggle();
    window.addEventListener("resize", this.resetBurgerToggle.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resetBurgerToggle.bind(this));
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  //add authors to query later
  // keyPress(event) {
  //   if(event.keyCode==13){
  //     this.client.query({ query })
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  //   }
  // }

  render() {
    return (
      <header>
        <div className="desktop-only">
          <HeaderMain />
        </div>
        <div className="mobile-header-content mobile-only">
          <HeaderMobile />
        </div>
      </header>
    );
  }
}

export default Header;