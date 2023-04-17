import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
}

export const Popover = (props: PopoverProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.popover, {}, [className])}>
            {/* children */}
        </div>
    );
};
