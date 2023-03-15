import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.skeleton, {}, [className])}>
            {/* children */}
        </div>
    );
};
