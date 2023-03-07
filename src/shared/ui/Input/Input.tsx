import {
    ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        ...rest
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const isCaretVisible = isFocused && !readonly;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlurHandler = () => setIsFocused(false);

    const onFocusHandler = () => setIsFocused(true);

    const onSelectHandler = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        setCaretPosition(e.currentTarget.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelectHandler}
                    readOnly={readonly}
                    {...rest}
                />
                {isCaretVisible && (
                    <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />
                )}
            </div>
        </div>
    );
});
