import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import {
    getUserAuthData, isAdminSelector, isManagerSelector, userActions,
} from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isAdminSelector);
    const isManager = useSelector(isManagerSelector);
    const dispatch = useAppDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Slavio App')}
                    variant={TextVariant.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkVariant.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <Button variant={ButtonVariant.CLEAR}>
                        <Icon Svg={NotificationIcon} inverted />
                    </Button>
                    <Dropdown
                        direction="bottom left"
                        className={cls.dropdown}
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('Админка'),
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: t('Профиль'),
                                href: RoutePath.profile + authData.id,
                            },
                            {
                                content: t('Выйти'),
                                onClick: onLogout,
                            },
                        ]}
                        trigger={<Avatar size={30} src={authData.avatar} />}
                    />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.links}
                variant={ButtonVariant.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />)}
        </header>
    );
});
