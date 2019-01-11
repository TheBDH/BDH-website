import React from 'react';
import Advertisement_728x90 from './Advertisement_728x90'

//pseudocode - if props.match.params is empty, then render the current staff list. else, match it with the appropriate json object (based on the template)
const generateStaffListLinks = (semester, year) => {
	var link = '/staff-list/' + year + '/' + semester;
	var text = semester + " " + year;
	return (<a href={link}> {text} </a>);
}

const StaffListPage = (props) => {
	console.log(props);
	return (
	<div class='main-content'>
    <Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
    	<h1>Staff List, Fall 2018</h1>
		<div class="corporate-staff-block">
		<h3>CORPORATE</h3>
		<p class="bold-name">Elena Renken</p>
		<p>President, The Brown Daily Herald, Inc.</p>
		<p>Editor-in-Chief, The Herald</p>

		<p class="bold-name">Kasturi Pananjady</p>
		<p>Vice President, The Brown Daily Herald, Inc.</p>
		<p>Editor-in-Chief, the Herald</p>

		<p class="bold-name">Michael Borrello</p>
		<p>Treasurer, The Brown Daily Herald, Inc.</p>
		<p>General Manager, The Herald</p>

		<p class="bold-name">Matilda Lynton</p>
		<p>Secretary, The Brown Daily Herald, Inc.</p>
		<p>General Manager, The Herald</p>

		</div>

		<div class="staff-block-row">
		    <div class="editorial-staff-block">
		        <h3>EDITORIAL</h3>
		        <p>Editor-in-Chief: Elena Renken</p>
		        <p>Editor-in-Chief: Kasturi Pananjady</p>
		        <p>Managing Editor: Alex Skidmore</p>
		        <p>Senior Editor: Madison Rivlin</p>
		        <p>Senior Editor: Ben Shumate</p>
		        <p>Senior Editor: Hattie Xu</p>
		        <br/>
		        <h4>Section Editors</h4>
		        <p>Post-: Jennifer Osborne</p>
		        <p>University News: Eduard Muñoz-Suñé, Priyanka Podugu, Sarah Wang</p>
		        <p>Metro: Emily Davies, Isabel Gensler</p>
		        <p>Science and Research: Jonathan Douglas, Jackson Wells</p>
		        <p>Arts & Culture: Ethel Renia</p>
		        <p>Sports: Alexandra Russell, James Schapiro</p>
		        <br/>
		        <h4>Commentary</h4>
		        <p>Opinions Editors: Connor Cardoso, Anuj Krishnamurthy, Emily Miller, Clare Steinman</p>
		        <br/>
		        <h4>Multimedia and Production</h4>
		        <p>Design Editors: Kyle Cui, Eduard Muñoz-Suñé</p>
		        <p>Assistant Design Editors: Julie Wang, Kelvin Yang</p>
		        <p>Graphics Editors: Marlis Flinn, Sarah Martinez</p>
		        <p>Head Photo Editor: Sam Berube, Anita Sheih</p>
		        <p>Illustrations Editor: Daphne Zhao</p>
		        <p>Copy Desk Chief: Kelley Tackett</p>
		        <p>Director of Web Development: Rahul Jayaraman</p>
		    </div>
		    <div class="business-staff-block">
		        <h3>BUSINESS</h3>
		        <p>General Managers: Michael Borrello, Matilda Lynton</p>
		        <p>Office Manager: Diane Silvia</p>
		        <br/>
		        <h4>Directors</h4>
		        <p>Sales: Shreya Raghunandan</p>
		        <p>Finance: Ravi Betzig</p>
		        <p>Strategy: Edwin Farley, Caroline Ziegler</p>
		    </div>
		</div>
		<div class="previous-staff-lists-block">
		    <hr/>
		    <b>Other Staff Lists</b>: 
		    	{generateStaffListLinks('Fall', '2018')}, {generateStaffListLinks('Spring', '2018')},
		    	{generateStaffListLinks('Fall', '2017')}, {generateStaffListLinks('Spring', '2017')}, 
		    	{generateStaffListLinks('Fall', '2016')}, {generateStaffListLinks('Spring', '2016')},
		    	{generateStaffListLinks('Fall', '2015')}, {generateStaffListLinks('Spring', '2015')},
		    	{generateStaffListLinks('Fall', '2014')}, {generateStaffListLinks('Spring', '2014')},
		    	{generateStaffListLinks('Fall', '2013')}
		</div>
    </div>
); }

export default StaffListPage;