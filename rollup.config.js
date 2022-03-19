import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import babel from "rollup-plugin-babel"
import path from 'path'
import {name,version} from './package.json'
const file = type => `./${name}.${type}.js`
const banner =
  '/*\n' +
  ` * funtool v${version}\n` +
  ` * (c) 2022-${new Date().getFullYear()} xiaoqiujun\n` +
  ' * Released under the MIT License.\n' +
  ' */';

const plugins = [
	// 打包插件
	resolve(),
	commonjs(),
	typescript({
		tsconfig:path.resolve(__dirname, './tsconfig.json'),
		extensions:['.js', '.ts']
	}),
	babel({
		exclude: 'node_modules/**',
	}),
]
const modules = ['array', 'dates', 'index', 'int', 'object', 'string', 'lang'].map(key => {
	return {
		input: `./src/${key}.ts`,
		output: {
			// 打包出口
			file: `./dist/${key}.js`,
			name:name,
			format:"umd",
			banner
		},
		plugins
	}
})
export default modules
