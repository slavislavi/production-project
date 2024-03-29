import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfilePage } from './ProfilePage';

export default {
    title: 'pages/ProfilePage/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            id: '1',
            username: 'admin',
            firstName: 'John',
            lastName: 'Connor',
            age: 24,
            country: Country.US,
            city: 'Chicago',
            currency: Currency.USD,
            avatar: 'https://avatarko.ru/img/kartinka/10/film_9969.jpg',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            id: '1',
            username: 'admin',
            firstName: 'John',
            lastName: 'Connor',
            age: 24,
            country: Country.US,
            city: 'Chicago',
            currency: Currency.USD,
            avatar: 'https://avatarko.ru/img/kartinka/10/film_9969.jpg',
        },
    },
})];
