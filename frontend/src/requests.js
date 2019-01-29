import Axios from 'axios';

const bdhRequester = {

    defaultArticleParams: {
        type: 'newspaper.ArticlePage',
        fields: 'content,section,summary,authors(author(name,lastName,description,position,year,image)),featured_on_section,featured_on_main,tags',
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

    getArticleBySlug(slug) {
        return this.getArticle({slug: slug});
    },

    getNewArticles(limit) {
        return this.getArticles({order: "-first_published_at", limit: limit});
    },

    getArticlesBySection(section) {
        return this.getArticles({section: section})
    },

    getArticlesByAuthor(firstName, lastName) {
        return this.getAuthor({name: firstName, lastName: lastName})
    }
};

export default bdhRequester;