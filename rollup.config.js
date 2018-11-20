import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const NODE_ENV = process.env.NODE_ENV || 'development',
    dev = NODE_ENV === 'development',
    outputFile = dev ? './lib/dev.js' : './lib/prod.js';

const config = {
    input: './src/index.js',
    output: {
        file: outputFile,
        format: 'cjs',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
    ],
};

if (!dev) {
    config.plugins.push(terser());
}

export default config;