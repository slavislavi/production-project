import { memo, SVGProps, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg } = props;

    return (
        <Svg className={classNames(cls.icon, {}, [className])} />
    );
});
