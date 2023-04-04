import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextVariant {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = TextVariant.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[variant]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames('', mods, [className])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
