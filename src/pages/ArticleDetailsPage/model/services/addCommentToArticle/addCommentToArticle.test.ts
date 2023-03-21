import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentToArticle } from './addCommentToArticle';

const article: Article = {
    id: '1',
    title: 'Redux-toolkit types',
    subtitle: 'Some issues that we can faced with',
    img: 'url',
    views: 333,
    createdAt: '24.02.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Some title',
            paragraphs: [
                'Lorem ipsum',
                'Tutorial infinity',
            ],
        },
    ],
};

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
                data: article,
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
                data: article,
            },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('some comment 2');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
