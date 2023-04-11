import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const testProfile: Profile = {
    id: '1',
    firstName: 'John',
    lastName: 'Snow',
    username: 'dunno',
    age: 36,
    currency: Currency.CAD,
    country: Country.CA,
    city: 'Winterfell',
};

const testOptions = {
    initialState: {
        profile: {
            readonly: true,
            data: testProfile,
            form: testProfile,
        },
        user: {
            authData: { id: '1', username: 'dunno' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('on click edit must appear cancelButton', async () => {
        componentRender(<EditableProfileCard id="1" />, testOptions);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();
    });
});
