import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../constants/constants';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    firstName: 'John',
    lastName: 'Connor',
    age: 24,
    country: Country.US,
    city: 'Chicago',
    currency: Currency.USD,
};

describe('validateProfileData API service', () => {
    test('success validate', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without firstName and lastName', async () => {
        const result = validateProfileData({ ...data, firstName: '', lastName: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_LOCATION_DATA,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_LOCATION_DATA,
        ]);
    });
});
