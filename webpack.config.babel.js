import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default function genConfig(_, options) {
    const NODE_ENV = (options.mode || process.env.NODE_ENV || 'production').trim(),
        isProd = NODE_ENV === 'production';

    const webpackConfig = {
        entry: {
            index: './src/index.js'
        },

        output: {
            filename: isProd ? 'prod.js' : 'dev.js',
            path: path.resolve(__dirname, 'lib'),
        },

        optimization: {
            minimizer: [ new TerserPlugin() ]
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },

        externals: {
            jquery: 'jQuery'
        }
    };

    return webpackConfig;
}