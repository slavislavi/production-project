import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Routing', () => {
    describe('User is NOT authorized', () => {
        it('Pass to MainPage', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Pass to ProfilePage', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Pass to unknown address', () => {
            cy.visit('/zzz300303');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('User is authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Pass to ProfilePage', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Pass to ArticlesPage', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
