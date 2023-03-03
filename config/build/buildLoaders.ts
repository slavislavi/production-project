import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json',
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: false,
                            saveMissing: true,
                        },
                    ],
                ],
            },
        },
    };

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node_modules/,
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
