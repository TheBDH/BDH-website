import React, { Component } from 'react';
import './App.css'

class Related_Articles extends Component {

    render() {
        return (
            <div class="related-articles">
                {
                    this.props.articles.map(article =>
                        <div className="individual-related-article">
                            <a className="related-article-image-container" href={article.url} target="blank"><img className="related-article-image" src={article.image} /></a>
                            <a className="related-article-title" target="blank" href={article.url}>{article.title}</a>
                        </div>
                    )
                }
            </div>
        );
    }
}



export default Related_Articles;