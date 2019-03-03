import Axios from 'axios';
import { op_sections, news_sections, multimedia_sections } from './constants';


const bdhRequester = {

    defaultArticleParams: {
        type: 'newspaper.ArticlePage',
        fields: 'content,section,sum_deck,draft,authors(author(name,lastName,description,position,year,image)),position_on_main,featured_on_main,featured_image,gallery_images,tags',
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

        let res;
        try {
            res = await Axios.get('/api/v2/pages/', {params: mergedParams});
            return await res
        } catch (error) {
            window.location = "/404.html";
            return await res;
        }
    },

    /**
     * Same functionality as getArticle without limit=1
     *
     * @param customParams
     */
    async getArticles(customParams) {
        const params = {};

        const mergedParams = {...this.defaultArticleParams, ...customParams, ...params};

        let res;
        try {
            res = await Axios.get('/api/v2/pages/', {params: mergedParams});
            return await res;
        } catch (error) {
            window.location = "/401.html"
            return await res;
        }
    },

    async getAuthor(customParams) {
        const params = {
            limit: 1,
        };
        const mergedParams = {...this.defaultAuthorParams, ...customParams, ...params};

        let res;
        try {
            res = await Axios.get('/api/v2/pages/', {params: mergedParams});
            return await res;
        } catch (error) {
            window.location = "/401.html"
            return await res;
        }
    },

    async getAuthors(customParams) {
        const params = {};
        const mergedParams = {...this.defaultAuthorParams, ...customParams, ...params};

        let res;
        try {
            res = await Axios.get('/api/v2/pages/', {params: mergedParams});
            return await res;
        } catch (error) {
            window.location = "/401.html"
            return await res;
        }
    },

    ////////////////////////
    // Example Requests
    ///////////////////////

    getArticleById(id) {
        return this.getArticle({id: id}) //for the draft, we can just add a flag that marks it as a DRAFT in the CMS and then have them disable and re-publish.
    },

    getArticlesByTag(tag) {
        return this.getArticles({tag__name: tag, draft: "n"});
    },

    getArticleBySlug(slug) {
        return this.getArticle({slug: slug, draft: "n"});
    },

    getNewArticles(limit) {
        return this.getArticles({order: "-first_published_at", limit: limit, draft: "n"});
    },

    getArticlesBySection(section) {
        return this.getArticles({section: section, draft: "n"})
    },

    getArticlesForWholeSection(sections) {
        return sections.map(x => this.getArticles(x));
    }, // To handle getting op-eds, etc. for all opinions articles - will be stored in constants.js

    //The above method should merge the article arrays of the json data, everything else is irrelevant

    getArticlesByAuthor(firstName, lastName) {
        return this.getAuthor({name: firstName, lastName: lastName, draft: "n"})
    },

    getLatestArticlesBySection(section) {
        return this.getArticles({section: section, order: "-first_published_at", limit: 5, draft: "n"});
    },

    getFeaturedArticlesOnSection(section) {
        return this.getArticles({section: section, featured_on_section: "y", limit: 5, draft: "n"})
    },

    getFeaturedArticlesOnHomePage() {
        return this.getArticles({featured_on_main: "y", order: "-first_published_at", limit: 5, draft: "n"}) // can change this limit to 3 but it's good to have some buffer
    }
};

export default bdhRequester;