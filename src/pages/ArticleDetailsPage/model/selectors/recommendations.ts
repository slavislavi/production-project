import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleRecommendsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommends?.isLoading;

export const getArticleRecommendsError = (state: StateSchema) => state.articleDetailsPage?.recommends?.error;
