import {
    ChangeEvent, InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { Text } from '../Text';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    label?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    size?: InputSize;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlurHandler = () => setIsFocused(false);

    const onFocusHandler = () => setIsFocused(true);

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autofocus]);

    const input = (
        <div
            className={classNames(cls.inputWrapper, mods, [
                className,
                cls[size],
            ])}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                ref={inputRef}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    );

    if (label) {
        return (
            <HStack max gap="8">
                <Text text={label} />
                {input}
            </HStack>
        );
    }

    return input;
});
