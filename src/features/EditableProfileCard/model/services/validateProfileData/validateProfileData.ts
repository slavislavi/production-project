import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../constants/constants';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        firstName,
        lastName,
        username,
        age,
        city,
        country,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!firstName || !lastName || !username) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country || !city) {
        errors.push(ValidateProfileError.INCORRECT_LOCATION_DATA);
    }

    return errors;
};
