import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetArticleRating, useSetArticleRating } from '../../api/articleRatingApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [setArticleRatingMutation] = useSetArticleRating();

    const setArticleRatingHandler = useCallback((starsCount: number, feedback?: string) => {
        try {
            setArticleRatingMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, setArticleRatingMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        setArticleRatingHandler(starsCount, feedback);
    }, [setArticleRatingHandler]);

    const onCancel = useCallback((starsCount: number) => {
        setArticleRatingHandler(starsCount);
    }, [setArticleRatingHandler]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв о статье')}
            hasFeedback
        />
    );
});

export default ArticleRating;
