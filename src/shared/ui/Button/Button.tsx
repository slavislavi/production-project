import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINED = 'outlined',
  OUTLINED_RED = 'outlined_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo(({
    className,
    children,
    variant = ButtonVariant.OUTLINED,
    square,
    size = ButtonSize.M,
    disabled,
    ...rest
}: ButtonProps) => {
    const mods: Mods = {
        [cls[variant]]: true,
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
});
