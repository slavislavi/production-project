import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'shared/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

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

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    article,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
    article,
};

export const BigDark = Template.bind({});
BigDark.args = {
    view: ArticleView.BIG,
    article,
};
BigDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SmallDark = Template.bind({});
SmallDark.args = {
    view: ArticleView.SMALL,
    article,
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BigOrange = Template.bind({});
BigOrange.args = {
    view: ArticleView.BIG,
    article,
};
BigOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const SmallOrange = Template.bind({});
SmallOrange.args = {
    view: ArticleView.SMALL,
    article,
};
SmallOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
