import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TEST ARTICLE',
    subtitle: 'Crypto market of the future',
    img: 'https://i0.wp.com/blogs.cfainstitute.org/investor/files/2022/04/'
    + 'Crypto-Tokens-and-Crypto-Coins-What-Drives-Performance.png?resize=940%2C575&ssl=1',
    views: 1024,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'SCIENCE',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'qwerty' },
    body: article ?? defaultArticle,
}).then((response) => response.body);

export const removeArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'qwerty' },
});

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
