import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/constants/router';
import AboutIcon from '@/shared/assets/icons/about-page.svg';
import MainIcon from '@/shared/assets/icons/main-page.svg';
import ProfileIcon from '@/shared/assets/icons/profile-page.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная страница',
                i18ns: 'main',
                Icon: MainIcon,
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                i18ns: 'about',
                Icon: AboutIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Страница профиля',
                    i18ns: 'profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    i18ns: 'articles',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
