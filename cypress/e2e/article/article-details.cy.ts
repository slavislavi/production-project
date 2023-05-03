let currentArticleId = '';

describe('User goes to the Article', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('and can see the content of the Article', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
});
