export const news_sections = ['unews', 'metro'];
export const op_sections = ['col', 'edit', 'letter', 'notes', 'op'];
export const multimedia_sections = ['vid', 'gal', 'igraph', 'graph', 'ill', 'com']

export const all_sections = ['unews', 'metro', 'sr', 'ac', 'opinion', 'sports']

export const generateArticleLink = (article) => {
	const divider = '/';
	let date = article.meta.first_published_at;
	let publishDate = new Date(date);
	console.log(publishDate);
	return divider + publishDate.getFullYear() + divider 
			+ (publishDate.getMonth() + 1) + divider + publishDate.getDate() + divider + article.meta.slug;
};

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