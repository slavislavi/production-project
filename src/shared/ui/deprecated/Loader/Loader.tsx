import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * This component is not supported more
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => (
    <span className={classNames('loader', {}, [className])} />
);
