import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

const notification = {
    id: '1',
    title: 'Alert alert notification',
    description: 'text text text text',
};

export const Normal = Template.bind({});
Normal.args = {
    item: notification,
};

export const Dark = Template.bind({});
Dark.args = {
    item: notification,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    item: notification,
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
