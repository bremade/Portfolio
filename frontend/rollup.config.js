import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import json from 'rollup-plugin-json';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import path from 'path';
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'
import postcssPresetEnv from 'postcss-preset-env'
import progress from 'rollup-plugin-progress';
import reactSvg from 'rollup-plugin-react-svg'
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import visualizer from 'rollup-plugin-visualizer';

const PUB_DIR = path.join(__dirname, 'public');
const SRC_DIR = path.join(__dirname, 'src');

const production = !process.env.ROLLUP_WATCH;

export default {
	input: SRC_DIR + '/index.js',
	output: [{
		file: PUB_DIR + '/build/bundle.js',
		format: 'umd',
		sourcemap: !production,
	}],
  	experimentalCodeSplitting: true,
	plugins: [
		progress(),
		resolve({
			browser: true,
		}),
		json(),
		reactSvg(),
		commonjs({
			include: ['node_modules/**'],
			exclude: ['node_modules/process-es6/**'],
			namedExports: {
			  'node_modules/react/index.js': [
				'Children',
				'Component',
				'PropTypes',
				'createElement',
			  ],
			  'node_modules/react-dom/index.js': ['render'],
			},
		}),
		postcss({
			modules: true,
			plugins: [
			  postcssModules({
				generateScopedName: '[local]',
			  }),
			  postcssPresetEnv({
				stage: 0,
			  }),
			],
		}),
		babel({
			exclude: 'node_modules/**',
		}),
		filesize(),
		replace({
			'process.env.NODE_ENV': production
			  ? JSON.stringify('production')
			  : JSON.stringify('development'),
		}),
		!production && visualizer(),
		!production && serve({
			open: true,
			contentBase: PUB_DIR,
			host: 'localhost',
			port: '8000',
		}),
		!production && livereload(PUB_DIR)
	]
};
