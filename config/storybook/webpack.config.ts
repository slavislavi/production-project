import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

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

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
