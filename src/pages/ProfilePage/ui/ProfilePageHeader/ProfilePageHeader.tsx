import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль', { ns: 'profile' })} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            variant={ButtonVariant.OUTLINED}
                            onClick={onEdit}
                        >
                            {t('Редактировать', { ns: 'profile' })}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                variant={ButtonVariant.OUTLINED_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить', { ns: 'profile' })}
                            </Button>
                            <Button
                                variant={ButtonVariant.OUTLINED}
                                onClick={onSave}
                            >
                                {t('Сохранить', { ns: 'profile' })}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
