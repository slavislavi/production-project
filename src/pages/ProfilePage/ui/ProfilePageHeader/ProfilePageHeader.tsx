import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getProfileReadonly } from 'entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль', { ns: 'profile' })} />
            {readonly ? (
                <Button variant={ButtonVariant.OUTLINED} className={cls.editBtn}>
                    {t('Редактировать', { ns: 'profile' })}
                </Button>
            ) : (
                <Button variant={ButtonVariant.OUTLINED} className={cls.editBtn}>
                    {t('Отменить', { ns: 'profile' })}
                </Button>
            )}
        </div>
    );
};
