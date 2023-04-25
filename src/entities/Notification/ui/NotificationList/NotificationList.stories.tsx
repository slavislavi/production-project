import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const notifications = [
    {
        id: '1',
        title: 'Alert Failure',
        description: 'You lose 5000 gold coins!',
    },
    {
        id: '2',
        title: 'Alert Success',
        description: 'You get the Legendary Armour of Wolf!',
    },
    {
        id: '3',
        title: 'Alert Success',
        description: 'You won 10 000 orens!',
    },
];

const parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: notifications,
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = parameters;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = parameters;

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
Orange.parameters = parameters;
