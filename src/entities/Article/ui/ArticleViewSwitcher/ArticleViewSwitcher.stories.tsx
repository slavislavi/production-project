import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/constants/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleView } from '../../model/constants/articleConstants';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

export default {
    title: 'entities/Article/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args) => <ArticleViewSwitcher {...args} />;

export const BigView = Template.bind({});
BigView.args = {
    view: ArticleView.BIG,
};

export const BigViewDark = Template.bind({});
BigViewDark.args = {
    view: ArticleView.BIG,
};
BigViewDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SmallView = Template.bind({});
SmallView.args = {
    view: ArticleView.SMALL,
};

export const SmallViewDark = Template.bind({});
SmallViewDark.args = {
    view: ArticleView.SMALL,
};
SmallViewDark.decorators = [ThemeDecorator(Theme.DARK)];
