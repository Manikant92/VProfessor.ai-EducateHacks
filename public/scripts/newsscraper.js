const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('Newsapi key');


module.exports = {
    getArticles,
    getNews
};

/**
 * Retrieves trending headlines for the given topic
 * @param {} keyTerm The term to be searched for
 */
function getNews(keyTerm) {
    return new Promise((resolve, reject) => {
        // To query /v2/everything
        // You must include at least one q, source, or domain
        newsapi.v2.everything({
            q: keyTerm,
            language: 'en'
        }).then(response => {
            return resolve(response);
        }).catch(error => {
            return reject(error);
        });
    });
}


/**
 * Finds relevant articles relating to the keyTerm
 * @param {} keyTerm
 * @param {*} numArticles
 * @returns
 */
async function getArticles(keyTerm, numArticles) {
    var response = await getNews(keyTerm);
    // console.log(response.articles[(Math.random() * response.articles.length)]);
    // console.log(response.articles[0]);
    var results = [];
    for (let i = 0; i < numArticles; i++) {
        let index = parseInt(Math.random() * response.articles.length);
        results.push(response.articles[index]);
        response.articles.splice(index, index + 1);
    }
    // console.log(results);
    return results;
}

