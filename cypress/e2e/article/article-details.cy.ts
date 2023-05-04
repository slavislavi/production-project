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
    it('and can see the list of recommendations', () => {
        cy.getByTestId('ArticleRecommendsList').should('exist');
    });
    it('and can leave the comment', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('Do not worry. Just a e2e test here');
        cy.addComment('We all live in the yellow submarine');
        cy.getByTestId('CommentCard.Content').should('have.length', 2);
    });
    it('and can rate the article', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'Good enough!');
        cy.get('[data-selected=true]').should('have.length', 4);
    });

    it('and can rate the article (example with stubs, on fixtures)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'Good enough!');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
