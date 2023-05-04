describe('User goes to the ArticlesPage ', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    it('and articles are successfully loaded', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('Check on stubs (fixtures)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArtilceList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it.skip('Example of skipped test (deliberately falsy)', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('NonExistentComponent').should('exist', 3);
    });
});
