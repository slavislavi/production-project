import { memo, SVGProps, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted } = props;

    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} />
    );
});
