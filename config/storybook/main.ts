import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config: Configuration) => {
        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };

        config.resolve?.modules?.push(paths.src);
        config.resolve?.extensions?.push('.ts', '.tsx');
        config!.resolve!.alias = { '@': path.resolve(paths.src) };

        const rules = config.module?.rules;
        const svgLoaderRule = rules?.find((rule) => rule !== '...' && /svg/.test(rule.test as string));
        (svgLoaderRule as RuleSetRule).exclude = /\.svg$/i;

        rules?.push(
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        );
        rules?.push(buildCssLoader(true));

        config!.plugins!.push(new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }));

        return config;
    },
};
