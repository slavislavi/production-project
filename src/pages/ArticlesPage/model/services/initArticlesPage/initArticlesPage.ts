import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { getArticlesPageInited } from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                dispatch(
                    articlesPageActions.setOrder(searchParams.get('order') as SortOrder ?? ''),
                );
                dispatch(
                    articlesPageActions.setSort(searchParams.get('sort') as ArticleSortField ?? ''),
                );
                dispatch(
                    articlesPageActions.setSearch(searchParams.get('search') ?? ''),
                );
                dispatch(
                    articlesPageActions.setType(searchParams.get('type') as ArticleType ?? ''),
                );

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
