import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/constants/router';
import MainIconDeprecated from '@/shared/assets/icons/main-page.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about-page.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-page.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-20.svg';

import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

import { toggleFeatures } from '@/shared/lib/features';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная страница',
                i18ns: 'main',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => MainIconDeprecated,
                    on: () => MainIcon,
                }),
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                i18ns: 'about',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => AboutIconDeprecated,
                    on: () => AboutIcon,
                }),
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Страница профиля',
                    i18ns: 'profile',
                    authOnly: true,
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        off: () => ProfileIconDeprecated,
                        on: () => ProfileIcon,
                    }),
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    i18ns: 'articles',
                    authOnly: true,
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        off: () => ArticleIconDeprecated,
                        on: () => ArticleIcon,
                    }),
                },
            );
        }

        return sidebarItemsList;
    },
);
