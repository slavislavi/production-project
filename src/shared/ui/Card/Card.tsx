import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardVariant {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = CardVariant.NORMAL,
        ...rest
    } = props;

    return (
        <div className={classNames(cls.card, {}, [className, cls[variant]])} {...rest}>
            {children}
        </div>
    );
});
