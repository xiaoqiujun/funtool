import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import {name} from './package.json'
const file = type => `./${name}.${type}.js`
export default {
	input: "./src/index.ts",
	output: {
		// 打包出口
		file: file('esm'),
		format: "es",
        name:name,
	},
	plugins: [
		// 打包插件
		resolve(),
		commonjs(),
		typescript(),
	],
};
