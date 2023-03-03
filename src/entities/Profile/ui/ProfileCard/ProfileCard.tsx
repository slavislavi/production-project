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
                <Text title="ddd" />
                <Button variant={ButtonVariant.OUTLINED} className={cls.editBtn}>
                    {}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstName}
                    placeholder="ddd"
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder="ddd"
                    className={cls.input}
                />
            </div>
        </div>
    );
};
