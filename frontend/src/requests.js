import Axios from 'axios';

export const bdhRequester = {

    getArticle(slug) {
        const params = {
            params: {
                type: 'newspaper.ArticlePage',
                slug: slug,
                fields: 'intro,body',
            }
        };

        Axios.get('/api/v2/pages/', params)
            .then(function (response) {
                return response;
            });
    },

    getArticles() {
        const params = {
            params: {
                type: 'newspaper.ArticlePage',
                fields: 'intro',
            }
        };

        Axios.get('/api/v2/pages/', params)
            .then(function (response) {
                return response;
            });
    }
};