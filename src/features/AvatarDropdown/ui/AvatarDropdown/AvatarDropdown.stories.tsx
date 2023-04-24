import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const NormalAdmin = Template.bind({});
NormalAdmin.args = {};
NormalAdmin.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            avatar: 'https://avatarko.ru/img/kartinka/10/film_9969.jpg',
            roles: [UserRole.ADMIN],
        },
    },
})];

export const NormalUser = Template.bind({});
NormalUser.args = {};
NormalUser.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            avatar: 'https://avatarko.ru/img/kartinka/33/devushka_34478.jpg',
            roles: [UserRole.USER],
        },
    },
})];
