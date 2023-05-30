import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button as ButtonDeprecated, ButtonVariant } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card padding="24" fullWidth border="partial">
                    <HStack
                        max
                        justify="between"
                        className={classNames('', {}, [className])}
                    >
                        <Text title={t('Профиль', { ns: 'profile' })} />
                        {canEdit && (
                            <div>
                                {readonly ? (
                                    <Button
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Редактировать', { ns: 'profile' })}
                                    </Button>
                                ) : (
                                    <HStack gap="8">
                                        <Button
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                            color="error"
                                        >
                                            {t('Отменить', { ns: 'profile' })}
                                        </Button>
                                        <Button
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                            color="success"
                                        >
                                            {t('Сохранить', { ns: 'profile' })}
                                        </Button>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                </Card>
            )}
            off={(
                <HStack
                    max
                    justify="between"
                    className={classNames('', {}, [className])}
                >
                    <TextDeprecated title={t('Профиль', { ns: 'profile' })} />
                    {canEdit && (
                        <div>
                            {readonly ? (
                                <ButtonDeprecated
                                    variant={ButtonVariant.OUTLINED}
                                    onClick={onEdit}
                                    data-testid="EditableProfileCardHeader.EditButton"
                                >
                                    {t('Редактировать', { ns: 'profile' })}
                                </ButtonDeprecated>
                            ) : (
                                <HStack gap="8">
                                    <ButtonDeprecated
                                        variant={ButtonVariant.OUTLINED_RED}
                                        onClick={onCancelEdit}
                                        data-testid="EditableProfileCardHeader.CancelButton"
                                    >
                                        {t('Отменить', { ns: 'profile' })}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        variant={ButtonVariant.OUTLINED}
                                        onClick={onSave}
                                        data-testid="EditableProfileCardHeader.SaveButton"
                                    >
                                        {t('Сохранить', { ns: 'profile' })}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        </div>
                    )}
                </HStack>
            )}
        />
    );
});
