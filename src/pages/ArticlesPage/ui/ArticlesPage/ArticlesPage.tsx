import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesPageGreeting } from '@/features/ArticlesPageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Page
                    data-testid="ArticlesPage"
                    className={classNames(cls.articlesPage, {}, [className])}
                    onScrollEnd={onLoadNextPart}
                >
                    <ArticlesInfiniteList className={cls.list} />
                    <ArticlesPageGreeting />
                </Page>
            )}
            off={(
                <Page
                    data-testid="ArticlesPage"
                    className={classNames(cls.articlesPage, {}, [className])}
                    onScrollEnd={onLoadNextPart}
                >
                    <ArticlesPageFilters />
                    <ArticlesInfiniteList className={cls.list} />
                    <ArticlesPageGreeting />
                </Page>
            )}
        />
    );

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicReducerLoader>
    );
});
