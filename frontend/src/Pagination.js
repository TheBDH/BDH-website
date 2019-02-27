import React, { Component, Fragment } from 'react';
import _ from 'lodash';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

class Pagination extends Component {

  constructor(props) {
    super(props);
    const { totalArticles = null } = props;

    this.articlesPerPage = 10;
    this.totalArticles = typeof totalArticles === 'number' ? totalArticles : 0;
    this.pageNeighbors = 2;

    this.totalPages = Math.ceil(this.totalArticles / this.articlesPerPage);

    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  getPageNumbers = () => {

    const totalNumbersToShow = (this.pageNeighbors * 2) + 3; 
    const totalBlocksOfNumbers = totalNumbersToShow + 2; //accounts for << and >> to navigate to next page
    var currentPage = this.state.currentPage;

    if (this.totalPages > totalBlocksOfNumbers) { //if there are hidden pages

      const startPage = Math.max(2, currentPage - this.pageNeighbors);
      const endPage = Math.min(this.totalPages - 1, currentPage + this.pageNeighbors);

      let pages = _.range(startPage, endPage+1);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (this.totalPages - endPage) > 1;
      const spillOffset = totalNumbersToShow - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = _.range(startPage - spillOffset, startPage );
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = _.range(endPage + 1, endPage + spillOffset+1);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, this.totalPages];
    }
    return _.range(1, this.totalPages+1);
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      articlesPerPage: this.articlesPerPage,
      totalArticles: this.totalArticles
    };
    this.setState({ currentPage }, () => onPageChanged(paginationData));
  }

  handleClick = page => evt => {
    evt.preventDefault();
    this.gotoPage(page);
  }

  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - (this.pageNeighbors * 2) - 1);
  }

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + (this.pageNeighbors * 2) + 1);
  }


  render() {

    if (!this.totalArticles || this.totalPages === 1) return null; // Do not render if there is 1 page.

    const { currentPage } = this.state;
    const pages = this.getPageNumbers();

    return (
      <Fragment>
        <nav aria-label="Countries Pagination">
          <ul className="pagination">
            { pages.map((page, index) => {

              if (page === LEFT_PAGE) return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Previous" onClick={this.handleMoveLeft}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              );

              if (page === RIGHT_PAGE) return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Next" onClick={this.handleMoveRight}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              );

              return (
                <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                  <a className="page-link" href="#" onClick={ this.handleClick(page) }>{ page }</a>
                </li>
              );

            }) }

          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Pagination; 

// This code heavily draws upon the tutorial linked here: https://scotch.io/tutorials/build-custom-pagination-with-react