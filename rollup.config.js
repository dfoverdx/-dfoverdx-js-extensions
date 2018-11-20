import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const NODE_ENV = process.env.NODE_ENV || 'development',
    dev = NODE_ENV === 'development',
    outputFile = dev ? './lib/dev.js' : './lib/prod.js',
    opt = Object.keys(pkg.optionalDependencies).join('|'),
    optRE = new RegExp(`^(?:${opt})`);

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
    external: id => optRE.test(id),
};

if (!dev) {
    config.plugins.push(terser());
}

export default config;