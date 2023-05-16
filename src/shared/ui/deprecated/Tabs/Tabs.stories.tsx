import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Tabs } from './Tabs';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const testTabs = [
    {
        value: 'tab 1',
        content: 'tab 1',
    },
    {
        value: 'tab 2',
        content: 'tab 2',
    },
    {
        value: 'tab 3',
        content: 'tab 3',
    },
];

export const Normal = Template.bind({});
Normal.args = {
    tabs: testTabs,
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};

export const Dark = Template.bind({});
Dark.args = {
    tabs: testTabs,
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
    tabs: testTabs,
    value: 'tab 2',
    onTabClick: action('onTabClick'),
};
Dark.decorators = [ThemeDecorator(Theme.ORANGE)];
