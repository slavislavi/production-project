import { memo } from 'react';
import { Card, CardVariant } from '@/shared/ui/depricated/Card';
import { Text } from '@/shared/ui/depricated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            variant={CardVariant.OUTLINED}
            className={classNames(cls.notificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
