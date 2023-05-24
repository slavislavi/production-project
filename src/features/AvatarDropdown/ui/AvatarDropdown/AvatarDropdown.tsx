import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    getUserAuthData, isAdminSelector, isManagerSelector, userActions,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile, getRouteSettings } from '@/shared/constants/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isAdminSelector);
    const isManager = useSelector(isManagerSelector);
    const authData = useSelector(getUserAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const ITEMS = [
        ...(isAdminPanelAvailable ? [{
            content: t('Админка'),
            href: getRouteAdminPanel(),
        }] : []),
        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },
        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Dropdown
                    direction="bottom left"
                    className={classNames('', {}, [className])}
                    items={ITEMS}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                />
            )}
            off={(
                <DropdownDeprecated
                    direction="bottom left"
                    className={classNames('', {}, [className])}
                    items={ITEMS}
                    trigger={<AvatarDeprecated fallbackInverted size={30} src={authData.avatar} />}
                />
            )}
        />
    );
});
