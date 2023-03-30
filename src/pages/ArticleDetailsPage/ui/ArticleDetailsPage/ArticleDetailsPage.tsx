import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { getArticleRecommendsIsLoading } from '../../model/selectors/recommendations';
import { getArticleRecommends } from '../../model/slice/articleDetailsPageRecommendSlice';
import { addCommentToArticle } from '../../model/services/addCommentToArticle/addCommentToArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchArticleRecommends } from '../../model/services/fetchArticleRecommends/fetchArticleRecommends';
import { articleDetailsPageReducer } from '../../model/slice';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

export const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoadingComments = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommends.selectAll);
    const isLoadingRecommends = useSelector(getArticleRecommendsIsLoading);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentToArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommends());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Статья не найдена', { ns: 'errors' })}
            </Page>
        );
    }

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <Button variant={ButtonVariant.OUTLINED} onClick={onBackToList}>
                    {t('Назад к списку', { ns: 'articleDetails' })}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    className={cls.commentTitle}
                    size={TextSize.L}
                    title={t('Рекомендуем', { ns: 'articleDetails' })}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={isLoadingRecommends}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text
                    className={cls.commentTitle}
                    size={TextSize.L}
                    title={t('Комментарии', { ns: 'articleDetails' })}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoadingComments}
                    comments={comments}
                />
            </Page>
        </DynamicReducerLoader>

    );
});
