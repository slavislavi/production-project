import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    i18ns?: string;
    authOnly?: boolean;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная страница',
        i18ns: 'main',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        i18ns: 'about',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Страница профиля',
        i18ns: 'profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        i18ns: 'articles',
        Icon: ArticleIcon,
        authOnly: true,
    },
];
