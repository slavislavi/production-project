import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль', { ns: 'profile' })} />
                <Button variant={ButtonVariant.OUTLINED} className={cls.editBtn}>
                    {t('Редактировать', { ns: 'profile' })}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstName || ''}
                    placeholder={t('Ваше имя', { ns: 'profile' })}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName || ''}
                    placeholder={t('Ваша фамилия', { ns: 'profile' })}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
