import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: 'Text',
    fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    disabled: true,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    variant: 'clear',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    variant: 'outlined',
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'Text',
    variant: 'outlined',
    size: 'l',
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'Text',
    variant: 'outlined',
    size: 'xl',
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    variant: 'outlined',
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Filled = Template.bind({});
Filled.args = {
    children: 'Text',
    variant: 'filled',
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    variant: 'outlined',
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    variant: 'outlined',
    square: true,
    size: 'l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    variant: 'outlined',
    square: true,
    size: 'xl',
};
