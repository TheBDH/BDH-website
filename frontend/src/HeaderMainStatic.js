import React, { Component } from 'react';

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

import { Link } from 'react-router-dom'

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
                <a href="/staff-list">Staff List</a>
                <a href="/join">Join</a>
                <a href="/comments-policy">Comments Policy</a>
                <a href="/web-policy">Web Policy</a>
                <a href="/find-paper">Find a Paper</a>
                <a href="http://www.issuu.com/browndailyherald/docs" target="_blank">Read the Print Edition</a>
              </div>
            </a>
            <a className="has-dropdown" href="/contact">contact▾
              <div className="nav-dropdown">
                <a href="#">Tips</a>
                <a href="#">Questions</a>
                <a href="/static/Reprint_Permissions_Request_Contract.pdf" target="_blank">Reprint and Permissions Requests</a>
              </div>
            </a>
            <a href="/submit">submissions</a>
            <a href="http://www.bdhsales.com" target="_blank">advertise</a>
            <a className="nav-special" href="http://www.heraldalumni.org/donate.html" target="_blank">donate</a>
            <a className="nav-special has-dropdown" href="/print-subscriptions">subscribe▾
              <div className="nav-dropdown">
                <a href="/print-subscriptions">Print Subscriptions</a>
                <a href="http://eepurl.com/sDrDr">Newsletter</a>
              </div>
            </a>

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
                <a href="/sections/university-news">University News</a>
                <a href="/sections/metro">Metro</a>
              </div>
            </a>
            <a href="/sections/arts-culture">arts and culture</a>
            <a href="/sections/science-research">science and research</a>
            <a href="/sections/sports">sports</a>
            <a className="has-dropdown" href="/sections/opinion">opinion▾
              <div className="nav-dropdown">
                <a href="/sections/columns">columns</a>
                <a href="/sections/op-eds">op-eds</a>
                <a href="/sections/editorials">editorials</a>
                <a href="/sections/letters-to-the-editor">letters to the editor</a>
              </div>
            </a>
            <a className= 'has-dropdown' href="/sections/multimedia">multimedia▾
              <div className="nav-dropdown">
                <a href="/sections/photo-galleries">Photo Galleries</a>
                <a href="/sections/graphics">Graphics</a>
                <a href="/sections/videos">Videos</a>
                <a href="/sections/illustrations">illustrations</a>
                <a href="/sections/comics">comics</a>
              </div>
            </a>
            <a href="http://post.browndailyherald.com">post-</a>
          </div>
        </div>
      </div>

    );
  }
}

export default HeaderMainStatic;