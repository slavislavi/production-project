import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';

interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = (props: TabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <Card key={tab.value}>
                        {tab.content}
                    </Card>
                ))
            }
        </div>
    );
};
