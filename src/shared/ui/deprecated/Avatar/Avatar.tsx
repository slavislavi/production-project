import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
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
    fallbackInverted?: boolean;
}

/**
 * This component is not supported more
 * @deprecated
 */
export const Avatar = memo(({
    className, src, size = 100, alt, fallbackInverted,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} Svg={UserIcon} width={size} height={size} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
});
