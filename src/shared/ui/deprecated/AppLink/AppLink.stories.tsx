import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { AppLink, AppLinkVariant } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkVariant.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: AppLinkVariant.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    theme: AppLinkVariant.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkVariant.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkVariant.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    theme: AppLinkVariant.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
