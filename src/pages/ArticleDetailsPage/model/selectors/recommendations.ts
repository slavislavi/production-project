import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendsIsLoading = (state: StateSchema) => state.articleDetailsRecommends?.isLoading;

export const getArticleRecommendsError = (state: StateSchema) => state.articleDetailsRecommends?.error;
