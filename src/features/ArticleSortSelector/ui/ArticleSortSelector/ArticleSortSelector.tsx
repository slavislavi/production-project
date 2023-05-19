import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию', { ns: 'articles' }),
        },
        {
            value: 'desc',
            content: t('убыванию', { ns: 'articles' }),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания', { ns: 'articles' }),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию', { ns: 'articles' }),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам', { ns: 'articles' }),
        },
    ], [t]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <div
                    className={classNames(
                        cls.articleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <VStack gap="8">
                        <Text text={t('Сортировать по:', { ns: 'articles' })} />
                        <ListBox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            )}
            off={(
                <div
                    className={classNames(cls.articleSortSelector, {}, [
                        className,
                    ])}
                >
                    <Select<ArticleSortField>
                        options={sortFieldOptions}
                        label={t('Сортировать по', { ns: 'articles' })}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select
                        options={orderOptions}
                        label={t('по', { ns: 'articles' })}
                        value={order}
                        onChange={onChangeOrder}
                        className={cls.order}
                    />
                </div>
            )}
        />
    );
});
