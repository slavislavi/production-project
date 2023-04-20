import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { mockArticle } from '../../mocks/data.mock';
import { ArticleView } from '../../model/constants/articleConstants';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    article: mockArticle,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
    article: mockArticle,
};

export const BigDark = Template.bind({});
BigDark.args = {
    view: ArticleView.BIG,
    article: mockArticle,
};
BigDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SmallDark = Template.bind({});
SmallDark.args = {
    view: ArticleView.SMALL,
    article: mockArticle,
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BigOrange = Template.bind({});
BigOrange.args = {
    view: ArticleView.BIG,
    article: mockArticle,
};
BigOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const SmallOrange = Template.bind({});
SmallOrange.args = {
    view: ArticleView.SMALL,
    article: mockArticle,
};
SmallOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
