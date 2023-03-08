import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectProps {
    className?: string;
    label?: string;
}

export const Select = ({ className, label }: SelectProps) => {
    const mods: Mods = {

    };

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <select name="" id="">
                <option value="">2222</option>
                <option value="">4444</option>
                <option value="">8888</option>
            </select>
        </div>
    );
};
