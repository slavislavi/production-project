import { mockArticle } from '@/entities/Article/testing';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentToArticle } from './addCommentToArticle';

const user = {
    authData: {
        id: '1',
        username: 'admin',
    },
};

const data = [
    {
        id: '1',
        text: 'some comment 1',
        articleId: '1',
        userId: '1',
    },
    {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        userId: '1',
    },
];

describe('addCommentToArticle API service', () => {
    test('success fetch comments', async () => {
        const thunk = new TestAsyncThunk(addCommentToArticle, {
            user,
            articleDetails: {
                data: mockArticle,
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('some comment 2');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetch comments', async () => {
        const thunk = new TestAsyncThunk(addCommentToArticle, {
            user,
            articleDetails: {
                data: mockArticle,
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('some comment 2');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
