import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * This component is not supported more
 * @deprecated
 */
export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div onClick={onClick} className={classNames(cls.overlay, {}, [className])} />
    );
});
