import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendsList } from '../../api/articleRecommendsApi';
import { ToggleFeatures } from '@/shared/lib/features';

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
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text size="l" title={t('Рекомендуем', { ns: 'articleDetails' })} />}
                off={(
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Рекомендуем')}
                    />
                )}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
