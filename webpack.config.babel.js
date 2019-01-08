import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default function genConfig(_, options) {
    const NODE_ENV = (options.mode || process.env.NODE_ENV || 'production').trim(),
        isProd = NODE_ENV === 'production';

    const webpackConfig = {
        entry: {
            index: ['./src/index.ts']
            // index: ['@babel/polyfill', './src/index.ts']
        },

        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, isProd ? 'lib' : 'dev-lib'),
        },

        optimization: {
            minimizer: [ new TerserPlugin() ]
        },

        resolve: {
            extensions: [ '.js', '.ts' ],
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                }
            ]
        },

        externals: {
            jquery: 'jQuery'
        }
    };

    return webpackConfig;
}