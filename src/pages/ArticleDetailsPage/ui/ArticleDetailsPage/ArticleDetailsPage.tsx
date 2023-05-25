import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { ArticleRecommendsList } from '@/features/ArticleRecommendsList';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleDetails } from '@/entities/Article';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
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

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <StickyContentLayout
                        content={(
                            <Page
                                className={classNames(
                                    cls.articleDetailsPage,
                                    {},
                                    [className],
                                )}
                            >
                                <VStack gap="16" max>
                                    <DetailsContainer />
                                    <ArticleRating articleId={id} />
                                    <ArticleRecommendsList />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        )}
                        right={<AdditionalInfoContainer />}
                    />
                )}
                off={(
                    <Page
                        className={classNames(cls.articleDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack gap="16" max>
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ToggleFeatures
                                feature="isArticleRatingEnabled"
                                on={<ArticleRating articleId={id} />}
                                off={(
                                    <Card>
                                        {t('Анонс рейтинга', { ns: 'articleDetails' })}
                                    </Card>
                                )}
                            />
                            <ArticleRecommendsList />
                            <ArticleDetailsComments id={id} />
                        </VStack>
                    </Page>
                )}
            />
        </DynamicReducerLoader>
    );
});
