import React from 'react';
import withMock from 'storybook-addon-mock';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { mockArticle } from 'entities/Article/mocks/data.mock';
import { ArticleRecommendsList } from './ArticleRecommendsList';

export default {
    title: 'features/ArticleRecommendsList',
    component: ArticleRecommendsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendsList>;

const Template: ComponentStory<typeof ArticleRecommendsList> = (args) => <ArticleRecommendsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...mockArticle, id: '1' },
                { ...mockArticle, id: '2' },
                { ...mockArticle, id: '3' },
            ],
        },
    ],
};
