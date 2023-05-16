import { memo, SVGProps, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

/**
 * This component is not supported more
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
    const {
        className, Svg, inverted, ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}
            {...otherProps}
        />
    );
});
