import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticleRecommends } from '../services/fetchArticleRecommends/fetchArticleRecommends';
import { ArticleDetailsRecommendSchema } from '../types/ArticleDetailsRecommendSchema';

const recommendsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommends = recommendsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommends || recommendsAdapter.getInitialState(),
);

export const articleDetailsPageRecommendSlice = createSlice({
    name: 'articleDetailsPageRecommend',
    initialState: recommendsAdapter.getInitialState<ArticleDetailsRecommendSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommends.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommends.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommends.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsPageRecommendActions } = articleDetailsPageRecommendSlice;
export const { reducer: articleDetailsPageRecommendReducer } = articleDetailsPageRecommendSlice;
