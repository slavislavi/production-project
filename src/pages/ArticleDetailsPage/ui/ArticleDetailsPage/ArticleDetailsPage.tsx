import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendsList } from '@/features/ArticleRecommendsList';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import cls from './ArticleDetailsPage.module.scss';
import { getFeatureFlags } from '@/shared/lib/features';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');

    if (!id) {
        return null;
    }

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page
                data-testid="ArticleDetailsPage"
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ArticleRecommendsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicReducerLoader>

    );
});
