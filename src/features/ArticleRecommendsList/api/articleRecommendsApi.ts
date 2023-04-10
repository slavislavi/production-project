import { rtkApi } from 'shared/api/rtkApi';

const recommendsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendsList: build.query({
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
