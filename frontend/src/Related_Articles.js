import React, { Component } from 'react';
import './App.css'

import { generateArticleLink } from './constants';

class Related_Articles extends Component {

    render() {
        return (
            <div class="related-articles">
                {
                    this.props.articles.map(article =>
                        <div className="individual-related-article">
                            <a className="related-article-image-container" href={generateArticleLink(article)} target="blank"><img className="related-article-image" src={article.featured_image.meta.download_url} /></a>
                            <a className="related-article-title" target="blank" href={generateArticleLink(article)}>{article.title}</a>
                        </div>
                    )
                }
            </div>
        );
    }
}



export default Related_Articles;