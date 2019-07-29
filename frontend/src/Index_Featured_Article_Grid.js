import React, { Component } from 'react';
import Featured_Hero_Article_Text_Overlay from './Featured_Hero_Article_Text_Overlay';
import Featured_Article_Excerpt from './Featured_Article_Excerpt';


class Index_Featured_Article_Grid extends Component {
  render() {
    return (
      <div>
        <div className="index-featured">
          <Featured_Hero_Article_Text_Overlay hero={this.props.hero}/>
          <div className="divider"></div>
          <div className="featured-sub-articles">
            {this.props.sections.map(
              article => 
              <Featured_Article_Excerpt article={article}/>
            )} 
          </div>
        </div>
      </div>
    );
  }
}

export default Index_Featured_Article_Grid;