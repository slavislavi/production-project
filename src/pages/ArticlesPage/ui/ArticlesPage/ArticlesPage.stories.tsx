import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPage } from './ArticlesPage';
import { mockArticle } from '@/entities/Article/testing';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=9&_page=1&_sort=created&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: [
                { ...mockArticle, id: '1' },
                { ...mockArticle, id: '2' },
                { ...mockArticle, id: '3' },
                { ...mockArticle, id: '4' },
                { ...mockArticle, id: '5' },
                { ...mockArticle, id: '6' },
            ],
        },
    ],
};
