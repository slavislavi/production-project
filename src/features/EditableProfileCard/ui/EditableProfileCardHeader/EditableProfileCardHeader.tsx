import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { Button, ButtonVariant } from '@/shared/ui/deprecated/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props;
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
                    {readonly
                        ? (
                            <Button
                                variant={ButtonVariant.OUTLINED}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать', { ns: 'profile' })}
                            </Button>
                        )
                        : (
                            <HStack gap="8">
                                <Button
                                    variant={ButtonVariant.OUTLINED_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить', { ns: 'profile' })}
                                </Button>
                                <Button
                                    variant={ButtonVariant.OUTLINED}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить', { ns: 'profile' })}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
});
