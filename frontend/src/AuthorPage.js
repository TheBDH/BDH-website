import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import NonSports from './NonSports';
import Section_Features from './Section_Features';
import Author_Info from './Author_Info';
import './general-style.css';

import bdhRequester from './requests.js'

class AuthorPage extends React.Component {

	constructor(props) {
		super(props);
	}

	state = { fetchedApiData: null };

	componentDidMount() {
		this._asyncRequest = bdhRequester.getAuthors({ }).then(
			fetchedApiData => {
				this._asyncRequest = null;
				if (fetchedApiData.data.items.length > 0) {
					this.setState({fetchedApiData});
					console.log("API Data Fetched for Author");
				} else {
                	window.location = "/404.html";
				}
			}
		);
	}

	render() {
		if (this.state.fetchedApiData === null) { 
			return null;
		} else {
			var authorData = this.state.fetchedApiData.data.items[0];
			return (
				<div className = 'main-content'>
					<Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
					<Author_Info 
						name={authorData.name}
						titlePosition = {authorData.position}
						description = {authorData.description} />
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>
					<NonSports sectionHeader={"University News"} title={"Medium title for home"} author={"Author Name"} date={"Oct 3 2018"}
						authorLink={"#"} articleLink={'#'} imageLink={'#'} 
						description={"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi\
						lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae\
						massa. Fusce luctus vestibulum augue ut aliquet."}
						image={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg"}/>


					<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
				</div>
			);
		}
	}
}

export default AuthorPage;






