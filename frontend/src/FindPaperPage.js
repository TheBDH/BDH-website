import React from 'react';
import Advertisement_728x90 from './Advertisement_728x90'

const FindPaperPage = () => (
	<div class='main-content'>
    <Advertisement_728x90 adUnit="BDH_ATF_Article_728x90" />
	<h1>Find a copy of the Brown Daily Herald</h1>
You can pick up a copy of The Herald for free at any of the locations on this map.
Locations in red are "hot spots" which have at least 100 papers delivered each day.<br/><br/>
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1IY05x3zcOXPKZDTcg-SNCUxuutxw1FEF&msa=0&ie=UTF8&t=m&vpsrc=6&ll=41.824229%2C-71.39834400000001&spn=0.025584%2C0.025749&z=15&source=embed" width="700" height="600" id="paperMap"/>
</div>
);

export default FindPaperPage;