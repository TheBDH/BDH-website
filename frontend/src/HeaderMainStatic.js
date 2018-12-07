import React, { Component } from 'react';

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

const query = gql`
    query GetArticles($searchQuery: String) {
      articles(content_Icontains: $searchQuery) {
        id
        title
        content
        summary
        tags
      }
    }`


class HeaderMainStatic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.client = new ApolloClient({
      link: new HttpLink({ uri: '/api/graphql' }),
      cache: new InMemoryCache()
    });
  }

  handleChange(event) {
    this.setState({ searchInput: event.target.value });
  }

  //add authors to query later
  keyPress(event) {
    if(event.keyCode==13){
      this.client.query({ query })
      .then(data => console.log(data))
      .catch(error => console.error(error));
    }
  }

  render() {
    return (
      <div id="header-static">
        <div className="top-header nav-wrapper">
          <div className="main-container nav">
            <a className="has-dropdown" href="/about">about▾
              <div className="nav-dropdown">
                <a href="#">fake link</a>
                <a href="#">fake link</a>
                <a href="#">fake link</a>
              </div>
            </a>
            <a className="has-dropdown" href="/contact">contact▾
              <div className="nav-dropdown">
                <a href="#">fake link</a>
                <a href="#">fake link</a>
                <a href="#">fake link</a>
                <a href="#">fake link</a>
              </div>
            </a>
            <a href="/submit">submit</a>
            <a href="http://www.bdhsales.com" target="_blank">advertise</a>
            <a className="nav-special" href="http://www.heraldalumni.org/donate.html" target="_blank">donate</a>
            <a className="nav-special" href="/print-subscriptions">subscribe</a>

            <input className="header-search" type="text" value={this.state.searchInput} onKeyDown={this.keyPress} onChange={this.handleChange} placeholder="SEARCH"/>

            <a className="header-icon" href="https://www.facebook.com/browndailyherald/"><img src="/static/images/fb-logo-gray.png" alt="facebook"/></a>
            <a className="header-icon" href="https://www.twitter.com/browndailyherald/"><img src="/static/images/twitter-logo-gray.png" alt="twitter"/></a>
            <a className="header-icon" href="https://www.instagram.com/browndailyherald/"><img src="/static/images/ig-logo-gray.png" alt="instagram"/></a>
          </div>
        </div>
        <div className="header-flag">
          <a href="/"><img src="/static/images/bdh_flag.png" alt="Brown Daily Herald"/></a>
        </div>
        <div className="bottom-header nav-wrapper">
          <div className="main-container nav">
            <a href="/">home</a>
            <a className="has-dropdown" href="/sections/news">news▾
              <div className="nav-dropdown">
                <a href="#">fake link</a>
                <a href="#">fake link</a>
                <a href="#">fake link</a>
                <a href="#">fake link</a>
              </div>
            </a>
            <a href="/sections/arts-and-culture">arts and culture</a>
            <a href="/sections/science-research">science and research</a>
            <a href="/sections/sports">sports</a>
            <a href="/sections/opinion">opinion</a>
            <a href="http://post.browndailyherald.com">post</a>
            <a href="http://www.blogdailyherald.com">blog</a>
          </div>
        </div>
      </div>

    );
  }
}

export default HeaderMainStatic;