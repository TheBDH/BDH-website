export const news_sections = ['unews', 'metro'];
export const op_sections = ['col', 'edit', 'letter', 'notes', 'op'];
export const multimedia_sections = ['vid', 'gal', 'igraph', 'graph', 'ill', 'com']
export const all_sections = ['unews', 'metro', 'sr', 'ac', 'opinion', 'sports']
export const sports_section = ['sports', 'sportscol']

export const sortArticlesByDate = (articleList) => {
	return articleList.sort(function(a,b) {
		return new Date(b.meta.first_published_at) - new Date(a.meta.first_published_at);
	});
}

//add in generatePreview method

export const generateArticleLink = (article) => {
	const divider = '/';
	let date = article.meta.first_published_at;
	let publishDate = new Date(date);
	return divider + publishDate.getFullYear() + divider 
			+ (publishDate.getMonth() + 1) + divider + publishDate.getDate() + divider + article.meta.slug;
};

export const generateAuthorLink = (author) => {
	const divider = '/';
	console.log(author);
	return '/authors' + divider + author.author.name + '-' + author.author.lastName;
}

//inverse function for the below one
export const getBackendSectionName = (section) => {
	switch (section) {
		case 'science-research':
			return 'sr';
		case 'metro':
			return 'metro';
		case 'arts-culture':
			return 'ac';
		case 'university-news':
			return 'unews';
		case 'opinions':
			return 'opinion';
	}
}

export const getFrontendRole = (role) => {
	switch (role) {
		case '':
			return '';
		case 'con':
			return 'Contributing Writer';
		case 'sw':
			return 'Staff Writer';
		case 'ssw':
			return 'Senior Staff Writer';
		case 'sre':
			return 'Senior Reporter';
		case 'ned':
			return 'News Editor';
		case 'sred':
			return 'Science & Research Editor';
		case 'ace':
			return 'Arts & Culture Editor';
		case 'spe':
			return 'Sports Editor';
		case 'epb':
			return 'Editorial Page Board';
		case 'eb':
			return 'Editorial Board';
		case 'sc':
			return 'Staff Columnist';
		case 'oc':
			return 'Op-Ed Contributor';
	}
}

export const getSectionUrl = (section) => {
	switch (section) {
		case 'sr':
			return '/sections/science-research';
		case 'metro': 
			return '/sections/metro';
		case 'ac':
			return '/sections/arts-culture';
		case 'unews':
			return '/sections/university-news';
		//add in others
	}
}

export const getFullSectionName = (section) => {
	switch (section) {
		case 'news':
			return 'News';
		case 'ac':
		case 'arts-culture':
			return 'Arts & Culture';
		case 'sr':
		case 'science-research':
			return 'Science & Research';
		case 'sports':
			return 'Sports';
		case 'opinion':
			return 'Opinion';
		case 'unews':
		case 'university-news':
			return 'University News';
		case 'metro':
			return 'Metro';
		case 'col':
		case 'columns':
			return 'Columns';
		case 'edit':
		case 'editorials':
			return 'Editorials';
		case 'letter':
		case 'letters-to-the-editor':
			return 'Letters to the Editor';
		case 'notes':
		case 'editorial-notes':
			return 'Editorial Notes';
		case 'op':
		case 'op-eds':
			return 'Op-Eds';
		case 'vid':
		case 'videos':
			return 'Videos';
		case 'ill':
		case 'illustrations':
			return 'Illustrations';
		case 'multimedia':
			return 'Multimedia';
		case 'photo-galleries':
			return 'Photo Galleries';
		case 'graphics':
			return 'Graphics';
		case 'comics':
			return 'Comics';
	}
};