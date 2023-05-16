import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import { Input } from '@/shared/ui/depricated/Input';
import { Loader } from '@/shared/ui/depricated/Loader';
import { Text, TextAlign, TextVariant } from '@/shared/ui/depricated/Text';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/depricated/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation();

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    variant={TextVariant.ERROR}
                    title={t('Произошла ошибка при загрузке профиля', { ns: 'errors' })}
                    text={t('Попробуйте обновить страницу', { ns: 'errors' })}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    return (
        <VStack gap="8" max className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.firstName}
                placeholder={t('Ваше имя', { ns: 'profile' })}
                onChange={onChangeFirstName}
                readonly={readonly}
                data-testid="ProfileCard.firstName"
            />
            <Input
                value={data?.lastName}
                placeholder={t('Ваша фамилия', { ns: 'profile' })}
                onChange={onChangeLastName}
                readonly={readonly}
                data-testid="ProfileCard.lastName"
            />
            <Input
                value={data?.age}
                placeholder={t('Возраст', { ns: 'profile' })}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Город', { ns: 'profile' })}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Псевдоним', { ns: 'profile' })}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="ProfileCard.username"
            />
            <Input
                value={data?.avatar}
                placeholder={t('Ссылка на аватар', { ns: 'profile' })}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
