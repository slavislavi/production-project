import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    variant={TextVariant.ERROR}
                    title={t('Произошла ощибка при загрузке профиля', { ns: 'error' })}
                    text={t('Попробуйте обновить страницу', { ns: 'error' })}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

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
