import React from 'react';
import './general-style.css';
import './fixed-style.css';
import { getFullSectionName } from './constants.js';
import bdhRequester from './requests.js'

class TopicPage extends React.Component {

	constructor(props) {
		super(props);
	}

	state= {fetchedApiData : null}

	componentDidMount() {
		this._asyncRequest = bdhRequester.getArticlesByTag('dog').then(
			fetchedApiData => {
				this._asyncRequest = null;
				this.setState({fetchedApiData});
				console.log(fetchedApiData);
			}
		); // Add something in constants.js for special cases like News, Opinions
	}

	render(props) {
		var section_name = this.props.match.params.section;
		return (
			<div className = 'main-content'>
				Topic page
			</div>
		);
	}
}

export default TopicPage;