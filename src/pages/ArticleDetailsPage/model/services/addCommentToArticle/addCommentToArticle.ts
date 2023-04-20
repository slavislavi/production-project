import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentToArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetailsPage/addCommentToArticle',
    async (text, thunkApi) => {
        const {
            extra, dispatch, rejectWithValue, getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error('Empty data received');
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
