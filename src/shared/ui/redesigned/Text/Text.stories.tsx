import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Title Lorem ipsum',
    text: 'Description text secondary',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title Lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description text secondary',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    title: 'Title Lorem ipsum',
    text: 'Description text secondary',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title Lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description text secondary',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
