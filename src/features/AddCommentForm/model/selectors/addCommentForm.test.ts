import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from './addCommentForm';

describe('addCommentForm selectors', () => {
    test('should return comment text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'forensic',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('forensic');
    });

    test('should work with empty comment in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
