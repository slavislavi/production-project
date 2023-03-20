import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        { id: '1', text: 'Nice work', user: { id: '1', username: 'Jake' } },
        { id: '2', text: 'You make me feel inspiration', user: { id: '2', username: 'Denzel' } },
        { id: '3', text: 'I have the same...', user: { id: '1', username: 'Jake' } },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
