import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { ArticleRecommendsList } from '@/features/ArticleRecommendsList';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleDetails } from '@/entities/Article';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { VStack } from '@/shared/ui/Stack';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return null;
    }

    const articleRatingCard = toggleFeatures({
        name: 'isArticleRatingEnabled',
        // eslint-disable-next-line react/no-unstable-nested-components
        on: () => <ArticleRating articleId={id} />,
        // eslint-disable-next-line react/no-unstable-nested-components
        off: () => <Card>{t('Анонс рейтинга', { ns: 'articleDetails' })}</Card>,
    });

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page
                data-testid="ArticleDetailsPage"
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {articleRatingCard}
                    <ArticleRecommendsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicReducerLoader>

    );
});
