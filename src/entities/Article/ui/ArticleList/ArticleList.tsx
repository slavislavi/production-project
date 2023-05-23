import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/constants/articleConstants';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;
    const { t } = useTranslation();

    const renderArticles = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены', { ns: 'articles' })} />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <HStack
                    wrap="wrap"
                    gap="16"
                    className={classNames(cls.articleListRedesigned, {}, [])}
                    data-testid="ArticleList"
                >
                    {articles.map(renderArticles)}
                    {isLoading && getSkeletons(view)}
                </HStack>
            )}
            off={(
                <div
                    className={classNames(cls.articleList, {}, [
                        className,
                        cls[view],
                    ])}
                    data-testid="ArticleList"
                >
                    {articles.map(renderArticles)}
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        />
    );
});
