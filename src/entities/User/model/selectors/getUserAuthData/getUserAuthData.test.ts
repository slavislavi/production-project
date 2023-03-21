import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData selector', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    username: 'tester',
                },
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({ username: 'tester' });
    });

    test('should return id', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '42',
                },
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({ id: '42' });
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { user: {} };
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
