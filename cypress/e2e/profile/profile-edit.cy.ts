let profileId = '';

describe('User goes to the ProfilePage', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('and Profile is successfully loaded', () => {
        cy.getByTestId('ProfileCard.firstName').should('have.value', 'Иван');
    });
    it('and does edit the Profile', () => {
        const newFirst = 'NewFirstName';
        const newLast = 'NewLastName';
        cy.updateProfile(newFirst, newLast);
        cy.getByTestId('ProfileCard.firstName').should('have.value', newFirst);
        cy.getByTestId('ProfileCard.lastName').should('have.value', newLast);
    });
});
