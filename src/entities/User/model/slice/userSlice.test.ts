import { User, UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

const data: User = {
    id: '548',
    username: 'elbrus',
};

describe('userSlice', () => {
    test('test set new user', () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined,
        };
        expect(userReducer(state as UserSchema, userActions.setAuthData(data)))
            .toEqual({
                authData: data,
            });
    });

    test('test logout', () => {
        const state: DeepPartial<UserSchema> = {
            authData: data,
        };
        expect(userReducer(state as UserSchema, userActions.logout()))
            .toEqual({
                authData: undefined,
            });
    });
});
