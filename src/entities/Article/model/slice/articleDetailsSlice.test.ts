import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleType, ArticleBlockType, Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data: Article = {
    id: '1',
    title: 'New title',
    subtitle: 'Test subtitle',
    img: 'url',
    views: 36,
    createdAt: '21.03.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            paragraphs: ['lorem ipsum dolores'],
        },
    ],
    user: {
        id: '1',
        username: 'notorious',
        avatar: 'https://avatarko.ru/img/kartinka/10/film_9969.jpg',
    },
};

describe('articleDetailsSlice', () => {
    test('test update articleDetails service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error',
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending))
            .toEqual({
                isLoading: true,
                error: undefined,
            });
    });

    test('test update articleDetails service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(data, '', '')))
            .toEqual({
                isLoading: false,
                error: undefined,
                data,
            });
    });
});
