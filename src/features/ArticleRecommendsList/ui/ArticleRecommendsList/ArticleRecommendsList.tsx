import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { useArticleRecommendsList } from '../../api/articleRecommendsApi';

interface ArticleRecommendsListProps {
    className?: string;
}

export const ArticleRecommendsList = memo((props: ArticleRecommendsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticleRecommendsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack
            data-testid="ArticleRecommendsList"
            gap="8"
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                title={t('Рекомендуем', { ns: 'articleDetails' })}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
