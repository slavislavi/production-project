import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from './comments';

describe('ArticleDetails comments selectors', () => {
    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };
        expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
