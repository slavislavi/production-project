import { HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'primary' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    fullWidth?: boolean;
    fullHeight?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'gap_0',
    8: 'gap_8',
    16: 'gap_16',
    24: 'gap_24',
};

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = 'primary',
        fullWidth,
        fullHeight,
        padding = '8',
        border = 'normal',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.fullHeight]: fullHeight,
    };

    return (
        <div
            className={classNames(cls.card, mods, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[border],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
