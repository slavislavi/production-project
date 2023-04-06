import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: 'Content number', value: '123' },
        { content: 'Splash Adventure', value: '1232' },
        { content: 'Suite candles', value: '669' },
    ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        { content: 'Content number', value: '123' },
        { content: 'Splash Adventure', value: '1232' },
        { content: 'Suite candles', value: '669' },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: 'Content number', value: '123' },
        { content: 'Splash Adventure', value: '1232' },
        { content: 'Suite candles', value: '669' },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: 'Content number', value: '123' },
        { content: 'Splash Adventure', value: '1232' },
        { content: 'Suite candles', value: '669' },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: 'Content number', value: '123' },
        { content: 'Splash Adventure', value: '1232' },
        { content: 'Suite candles', value: '669' },
    ],
};
