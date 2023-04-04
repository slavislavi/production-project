import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './VStack.module.scss';

interface VStackProps {
    className?: string;
}

export const VStack = (props: VStackProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.vStack, {}, [className])}>
            {/* children */}
        </div>
    );
};
