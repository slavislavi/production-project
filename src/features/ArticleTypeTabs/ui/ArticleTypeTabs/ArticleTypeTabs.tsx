import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo(() => Object.values(ArticleType).reduce((acc: TabItem[], cur) => ([
        ...acc,
        /* i18next-extract-disable-next-line */
        { value: cur, content: t(cur, { ns: 'articles' }) },
    ]), []), [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Tabs
                    direction="column"
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            )}
            off={(
                <TabsDeprecated
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames(cls.articleTypeTabs, {}, [className])}
                />
            )}
        />
    );
});
