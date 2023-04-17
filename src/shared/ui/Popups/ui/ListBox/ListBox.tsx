import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/constants';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';

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
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        defaultValue,
        value,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && (
                <span className={classNames(cls.label, { [popupCls.disabled]: readonly })}>
                    {`${label}>`}
                </span>
            )}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.listBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button disabled={readonly} className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
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
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && <span className={cls.selected} />}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
