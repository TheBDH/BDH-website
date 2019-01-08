import React from 'react';
import Index_Featured_Article_Grid from './Index_Featured_Article_Grid';
import Advertisement_728x90 from './Advertisement_728x90';
import NonSports from './NonSports';
import Section_Features from './Section_Features';
import Author_Info from './Author_Info';
import './general-style.css';

var author = {name: "John Doe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/2010-brown-bear.jpg/200px-2010-brown-bear.jpg",
	titlePosition: "Title Position", description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit."};

const AuthorPage = (props) => {
	var section_name = props.match.params.authName;
	return (
		<div className = 'main-content'>
			<Author_Info author={author} />
			<Advertisement_728x90 adUnit="BDH_Footer_728x90" />
		</div>
	);
}

export default AuthorPage;






