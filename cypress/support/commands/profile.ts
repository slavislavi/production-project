declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}

export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstName').clear().type(firstName);
    cy.getByTestId('ProfileCard.lastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'qwerty' },
        body: {
            id: '2',
            firstName: 'Иван',
            lastName: 'Канарейкин',
            age: 24,
            currency: 'USD',
            country: 'Russia',
            city: 'Астана',
            username: 'user',
            avatar: 'https://avatarko.ru/img/kartinka/8/sobaka_prikol_7066.jpg',
        },
    });
};
