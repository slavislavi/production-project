import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    className?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        className, items, defaultValue, value, onChange,
    } = props;

    return (
        <HListBox
            as="div"
            className={classNames(cls.listBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <HListBox.Button className={cls.trigger}>
                <Button>
                    {value ?? defaultValue}
                </Button>
            </HListBox.Button>
            <HListBox.Options className={cls.options}>
                {items?.map((item) => (
                    <HListBox.Option
                        as={Fragment}
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    },
                                    [className],
                                )}
                            >
                                {selected && '✔️'}
                                {item.content}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
}
