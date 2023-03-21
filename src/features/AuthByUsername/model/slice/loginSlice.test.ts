import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'Sarah Connor' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('John Connor'))).toEqual({ username: 'John Connor' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '11111' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({ password: '12345' });
    });
});
