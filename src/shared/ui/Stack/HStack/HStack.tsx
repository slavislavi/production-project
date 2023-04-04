import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HStack.module.scss';

interface HStackProps {
    className?: string;
}

export const HStack = (props: HStackProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.hStack, {}, [className])}>
            {/* children */}
        </div>
    );
};
