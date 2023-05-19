import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '../../../assets/icons/carbon_user-avatar-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo(({
    className, src, size = 100, alt,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
});
