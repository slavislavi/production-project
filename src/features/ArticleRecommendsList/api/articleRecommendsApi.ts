import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

const recommendsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useArticleRecommendsList = recommendsApi.useGetArticleRecommendsListQuery;
