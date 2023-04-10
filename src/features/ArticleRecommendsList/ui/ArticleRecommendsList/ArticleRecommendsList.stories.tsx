import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleRecommendsList } from './ArticleRecommendsList';

export default {
    title: 'features/ArticleRecommendsList',
    component: ArticleRecommendsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendsList>;

const Template: ComponentStory<typeof ArticleRecommendsList> = (args) => <ArticleRecommendsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
