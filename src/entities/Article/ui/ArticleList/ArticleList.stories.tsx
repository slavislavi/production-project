import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/constants/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { mockArticle } from '../../mocks/data.mock';
import { ArticleView } from '../../model/constants/articleConstants';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const ListBig = Template.bind({});
ListBig.args = {
    articles: new Array(9)
        .fill(0)
        .map((_, index) => ({
            ...mockArticle,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.BIG,
};

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    articles: new Array(9)
        .fill(0)
        .map((_, index) => ({
            ...mockArticle,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.SMALL,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
};

export const ListBigDark = Template.bind({});
ListBigDark.args = {
    articles: new Array(9)
        .fill(0)
        .map((_, index) => ({
            ...mockArticle,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.BIG,
};
ListBigDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingBigDark = Template.bind({});
LoadingBigDark.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
};
LoadingBigDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListSmallDark = Template.bind({});
ListSmallDark.args = {
    articles: new Array(9)
        .fill(0)
        .map((_, index) => ({
            ...mockArticle,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.SMALL,
};
ListSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingSmallDark = Template.bind({});
LoadingSmallDark.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
};
LoadingSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListBigOrange = Template.bind({});
ListBigOrange.args = {
    articles: new Array(9)
        .fill(0)
        .map((_, index) => ({
            ...mockArticle,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.BIG,
};
ListBigOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LoadingBigOrange = Template.bind({});
LoadingBigOrange.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.BIG,
};
LoadingBigOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const ListSmallOrange = Template.bind({});
ListSmallOrange.args = {
    articles: new Array(9)
        .fill(0)
        .map((_, index) => ({
            ...mockArticle,
            id: String(index),
        })),
    isLoading: false,
    view: ArticleView.SMALL,
};
ListSmallOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LoadingSmallOrange = Template.bind({});
LoadingSmallOrange.args = {
    articles: [],
    isLoading: true,
    view: ArticleView.SMALL,
};
LoadingSmallOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
