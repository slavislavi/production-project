import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../constants/constants';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors selector', () => {
    test('should return when readonly state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
