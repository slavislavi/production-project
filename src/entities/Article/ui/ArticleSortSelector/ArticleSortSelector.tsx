import { ArticleSortField } from 'entities/Article';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortOrder } from 'shared/types';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию', { ns: 'articles' }),
        },
        {
            value: 'desc',
            content: t('убыванию', { ns: 'articles' }),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
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

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                label={t('Сортировать по', { ns: 'articles' })}
                options={sortFieldOptions}
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                label={t('по', { ns: 'articles' })}
                options={orderOptions}
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
            />
        </div>
    );
};
