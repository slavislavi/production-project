import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from '../../model/types/article';
import { ArticleList } from './ArticleList';

export default {
    title: 'shared/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'What is new in FS in 2022?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'notorious',
        avatar: 'https://avatarko.ru/img/kartinka/10/film_9969.jpg',
    },
    type: [ArticleType.IT, ArticleType.MEDICINE, ArticleType.FINANCES],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'The title of the block',
            paragraphs: [
                'Hello everyone! Hope that sunny summer weather does not cool off your interest in the latest developments in the JavaScript world. Expecially since many noteworthy updates have been released in June and I’m excited to share them with you. Today you will learn about the main results from the 2022 Developer Survey, key features in Angular 14, recent releases from DHTMLX, why GitHub discontinues the Atom editor, reasons behind the Vue.js backporting, and current activities of the React team. In the second part, you’ll find a pack of useful articles that cover some tricky aspects of JavaScript.',
                'JavaScript is still the most widely used and moderately dreaded programming language among the respondents to which we have become accustomed. React and Node.js were named the most common chosen web tools. But you’ll probably be surprised to know the place of Svelte as the most loved web framework is taken by Phoenix - a top tool in the Elixir ecosystem. The numbers provided in the survey also say that Docker has become as important for professional developers as Git.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'The title of the block',
            paragraphs: [
                'Hello everyone! Hope that sunny summer weather does not cool off your interest in the latest developments in the JavaScript world. Expecially since many noteworthy updates have been released in June and I’m excited to share them with you. Today you will learn about the main results from the 2022 Developer Survey, key features in Angular 14, recent releases from DHTMLX, why GitHub discontinues the Atom editor, reasons behind the Vue.js backporting, and current activities of the React team. In the second part, you’ll find a pack of useful articles that cover some tricky aspects of JavaScript.',
                'JavaScript is still the most widely used and moderately dreaded programming language among the respondents to which we have become accustomed. React and Node.js were named the most common chosen web tools. But you’ll probably be surprised to know the place of Svelte as the most loved web framework is taken by Phoenix - a top tool in the Elixir ecosystem. The numbers provided in the survey also say that Docker has become as important for professional developers as Git.',
            ],
        },
    ],
};

export const ListBig = Template.bind({});
ListBig.args = {
    articles: new Array(9)
        .fill(0)
        .map((_, index) => ({
            ...article,
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
            ...article,
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
            ...article,
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
            ...article,
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
            ...article,
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
            ...article,
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
