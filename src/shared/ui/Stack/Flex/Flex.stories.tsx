import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

const testChildren = (
    <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
    </>
);

export const Row = Template.bind({});
Row.args = {
    children: testChildren,
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: testChildren,
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    gap: '4',
    children: testChildren,
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    gap: '8',
    children: testChildren,
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    gap: '16',
    children: testChildren,
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    gap: '32',
    children: testChildren,
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
    direction: 'column',
    gap: '4',
    children: testChildren,
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    direction: 'column',
    gap: '8',
    children: testChildren,
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: testChildren,
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
    children: testChildren,
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: testChildren,
};
