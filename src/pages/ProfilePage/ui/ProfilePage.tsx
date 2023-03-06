import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
    fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, ProfileCard, profileReducer,
} from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

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
    const error = useSelector(getProfileError);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard
                    data={data}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicReducerLoader>
    );
};
