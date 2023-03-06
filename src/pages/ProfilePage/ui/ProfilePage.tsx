import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstName: value }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastName: value }));
    }, [dispatch]);

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                />
            </div>
        </DynamicReducerLoader>
    );
};
