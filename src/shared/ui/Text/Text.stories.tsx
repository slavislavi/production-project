import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextVariant } from './Text';

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

export const Error = Template.bind({});
Error.args = {
    title: 'Title Lorem ipsum',
    text: 'Description text secondary',
    variant: TextVariant.ERROR,
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

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title Lorem ipsum',
    text: 'Description text secondary',
    size: TextSize.S,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title Lorem ipsum',
    text: 'Description text secondary',
    size: TextSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    title: 'Title Lorem ipsum',
    text: 'Description text secondary',
    size: TextSize.XL,
};
