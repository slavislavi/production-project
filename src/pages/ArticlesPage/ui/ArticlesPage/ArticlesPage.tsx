import { ArticleList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

export const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames(cls.articlesPage, {}, [className])}>
                <ArticleList
                    isLoading={false}
                    view={ArticleView.BIG}
                    articles={[]}
                />
            </div>
        </DynamicReducerLoader>
    );
});
