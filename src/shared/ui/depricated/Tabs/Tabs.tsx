import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardVariant } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;

    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <Card
                        key={tab.value}
                        variant={tab.value === value ? CardVariant.NORMAL : CardVariant.OUTLINED}
                        onClick={clickHandler(tab)}
                    >
                        {tab.content}
                    </Card>
                ))
            }
        </div>
    );
});
