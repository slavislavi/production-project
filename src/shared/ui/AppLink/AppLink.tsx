import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkVariant;
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        theme = AppLinkVariant.PRIMARY,
        children,
        ...rest
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </Link>
    );
});
