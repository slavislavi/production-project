import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppLogoSvg from '@/shared/assets/icons/logo-96.svg';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppLogoSvg className={cls.appLogo} />
        </HStack>
    );
});