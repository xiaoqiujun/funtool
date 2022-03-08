/**
 * @version: v1.0.0
 * @author: xiaoqiujun
 * @Github: https://github.com/xiaoqiujun
 * @date: Do not edit
 * @LastEditors: xiaoqiujun
 * @LastEditTime: 2022-03-08 18:35:57
 * @FilePath: \funtool\src\int.ts
 */


import { toString } from "./init";


/**
 * @description 是否int类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *      is("12") => false
 *      is(1) => true
 *      is([]) => false
 */
export const is = (v: any): boolean => {
	return toString.call(v) === "[object String]";
}
