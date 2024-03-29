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
    /**
     * Дополнительный класс, который можно передать на компонент
     */
    className?: string;
    /**
     * Тема (вариант) кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    variant?: ButtonVariant;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Флаг, отвечающий за доступность кнопки
     */
    disabled?: boolean;
    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
}

/**
 * This component is not supported more
 * @deprecated
 */
export const Button = memo(({
    className,
    children,
    variant = ButtonVariant.OUTLINED,
    square,
    size = ButtonSize.M,
    disabled,
    fullWidth,
    ...rest
}: ButtonProps) => {
    const mods: Mods = {
        [cls[variant]]: true,
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls[size]]: true,
        [cls.fullWidth]: fullWidth,
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
