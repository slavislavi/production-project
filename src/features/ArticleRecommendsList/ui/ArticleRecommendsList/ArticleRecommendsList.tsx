import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';

interface ArticleRecommendsListProps {
    className?: string;
}

export const ArticleRecommendsList = memo((props: ArticleRecommendsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем', { ns: 'articleDetails' })}
            />
            <ArticleList
                articles={[]}
                target="_blank"
            />
        </VStack>
    );
});
