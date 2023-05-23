import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardVariant {
    PRIMARY = 'primary',
    OUTLINED = 'outlined'
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    fullWidth?: boolean;
}

/**
 * This component is not supported more
 * @deprecated
 */
export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = CardVariant.PRIMARY,
        fullWidth,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(
                cls.card,
                { [cls.fullWidth]: fullWidth },
                [className, cls[variant]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};
