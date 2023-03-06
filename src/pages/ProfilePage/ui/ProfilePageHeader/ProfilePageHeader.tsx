import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль', { ns: 'profile' })} />
            <Button variant={ButtonVariant.OUTLINED} className={cls.editBtn}>
                {t('Редактировать', { ns: 'profile' })}
            </Button>
        </div>
    );
};
