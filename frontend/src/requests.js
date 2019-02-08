import Axios from 'axios';

const bdhRequester = {

    defaultArticleParams: {
        type: 'newspaper.ArticlePage',
        fields: 'content,section,summary,authors(author(name,lastName,description,position,year,image)),featured_on_section,featured_on_main,featured_image,tags',
    },

    defaultAuthorParams: {
        type: 'newspaper.AuthorsPage',
        fields: 'name,lastName,description,position,year,articles,image',
    },

    /**
     * Builds a request for an individual article from wagtail API
     * Uses the spread operator giving priority to...
     * 1. params defined in function
     * 2. params passed as argument to function
     * 3. params property of bdhRequester
     *
     * @param customParams
     */
    async getArticle(customParams) {
        const params = {
            limit: 1,
        };

        const mergedParams = {...this.defaultArticleParams, ...customParams, ...params};

        const res = await Axios.get('/api/v2/pages/', {params: mergedParams});
        return await res;
    },

    /**
     * Same functionality as getArticle without limit=1
     *
     * @param customParams
     */
    async getArticles(customParams) {
        const params = {};

        const mergedParams = {...this.defaultArticleParams, ...customParams, ...params};

        const res = await Axios.get('/api/v2/pages/', {params: mergedParams});
        return await res;
    },

    async getAuthor(customParams) {
        const params = {
            limit: 1,
        };

        const mergedParams = {...this.defaultAuthorParams, ...customParams, ...params};

        const res = await Axios.get('/api/v2/pages/', {params: mergedParams});
        return await res;
    },

    async getAuthors(customParams) {
        const params = {};

        const mergedParams = {...this.defaultAuthorParams, ...customParams, ...params};

        const res = await Axios.get('/api/v2/pages/', {params: mergedParams})
        return await res;
    },

    ////////////////////////
    // Example Requests
    ///////////////////////

    getArticlesByTag(tag) {
        return this.getArticles({tag__name: tag});
    },

    getArticleBySlug(slug) {
        return this.getArticle({slug: slug});
    },

    getNewArticles(limit) {
        return this.getArticles({order: "-first_published_at", limit: limit});
    },

    getArticlesBySection(section) {
        return this.getArticles({section: section})
    },

    getArticlesForWholeSection(sections) {
        return sections.map(x => this.getArticles(x));
    }, // To handle getting op-eds, etc. for all opinions articles - will be stored in constants.js

    getArticlesByAuthor(firstName, lastName) {
        return this.getAuthor({name: firstName, lastName: lastName})
    },

    getLatestArticlesBySection(section) {
        return this.getArticles({section: section, order: "-first_published_at", limit: 5});
    },

    getFeaturedArticlesOnSection(section) {
        return this.getArticles({section: section, featured_on_section: "y", limit: 5})
    },

    getFeaturedArticlesOnHomePage() {
        return this.getArticles({featured_on_main: "y", limit: 5}) // can change this limit to 3 but it's good to have some buffer
    }
};

export default bdhRequester;