import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
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

    test('set new name, but on click cancel, previous form must be reset', async () => {
        componentRender(<EditableProfileCard id="1" />, testOptions);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'Eddard');
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'Stark');

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('Eddard');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('Stark');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('John');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('Snow');
    });

    test('must throw error when set empty input', async () => {
        componentRender(<EditableProfileCard id="1" />, testOptions);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('must throw error when set empty input', async () => {
        const mockPUTrequest = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, testOptions);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'Stark');
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPUTrequest).toHaveBeenCalled();
    });
});
