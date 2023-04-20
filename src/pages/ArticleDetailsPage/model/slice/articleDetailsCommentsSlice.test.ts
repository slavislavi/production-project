import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const data: Comment = {
    id: '15',
    text: 'easy peasy',
    user: {
        id: '4',
        username: 'fred',
    },
};

describe('articleDetailsComments slice', () => {
    test('test articleDetailsComments service pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: 'error',
        };
        expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, fetchCommentsByArticleId.pending))
            .toEqual({
                isLoading: true,
                error: undefined,
            });
    });

    test('test articleDetailsComments service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
            ids: [],
            entities: {},
        };
        expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, fetchCommentsByArticleId.fulfilled([data], '', '')))
            .toEqual({
                isLoading: false,
                error: undefined,
                ids: [data.id],
                entities: {
                    [data.id]: data,
                },
            });
    });
});
