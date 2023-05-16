import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text, TextVariant } from '@/shared/ui/deprecated/Text';
import { AppLink, AppLinkVariant } from '@/shared/ui/deprecated/AppLink';
import { getRouteArticleCreate } from '@/shared/constants/router';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <header className={classNames(cls.navbarRedesigned, {}, [className])}>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                )}
                off={(
                    <header className={classNames(cls.navbar, {}, [className])}>
                        <Text
                            className={cls.appName}
                            title={t('SlaviDev')}
                            variant={TextVariant.INVERTED}
                        />
                        <AppLink
                            to={getRouteArticleCreate()}
                            theme={AppLinkVariant.SECONDARY}
                            className={cls.createBtn}
                        >
                            {t('Создать статью')}
                        </AppLink>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                )}
            />
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
