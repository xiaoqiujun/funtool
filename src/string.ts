/**
 * @version: v1.0.0
 * @author: xiaoqiujun
 * @Github: https://github.com/xiaoqiujun
 * @date: Do not edit
 * @LastEditors: xiaoqiujun
 * @LastEditTime: 2022-03-10 16:05:59
 * @FilePath: \funtool\src\string.ts
 */

import {isString} from './lang';
import * as Int from './int';

/**
 * @description 是否string类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *      is("12") => true
 *      is(1) => false
 *      is([]) => false
 */
export const is = (v: any): boolean => {
	return isString(v);
}


/**
 * @description 判断字符串是否为空
 *
 * @param {*} v 字符串
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *      empty("12") => true
 *      empty(1) => false
 *      empty([]) => false
 */
export const empty = (v: string): boolean => {
    if(!is(v)) return false
    else return v === ''
}

/**
 * @description 转换成int类型
 *
 * @param {*} v 字符串
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *      toInt("12") => 12
 *      toInt(1) => 1
 *      toInt([]) => TypeError
 */
export const toInt = (v:string|number): number => {
    if(Int.is(v)) return v as number
    if(!is(v)) throw new TypeError("Expected a string or number")
    return Number(v)
}



/**
 * @description 对字符串左边去空格
 *
 * @param {string} str 传入一个字符串
 * @return {*}  {string} 返回一个左边没有空格的新的字符串
 * @example
 *      ltrim(" abc ") => "abc "
 */
export const ltrim = (str: string): string => {
	let reg: RegExp = /^\s*/;
	return str.replace(reg, "");
}



/**
 * @description 对字符串右边去空格
 *
 * @param {string} str 传入一个字符串
 * @return {*}  {string} 返回一个右边没有空格的新的字符串
 * @example
 *      rtrim(" bac ") => " bac"
 */
export const rtrim = (str: string): string => {
	let reg: RegExp = /\s*$/;
	return str.replace(reg, "");
}




/**
 * @description 对字符串两边去空格
 *
 * @param {string} str 需要去空格的字符串
 * @return {*}  {string} 返回没有空格的字符串
 * @example
 *      trim(" bac ") => "bac"
 */
export const trim = (str: string): string => {
	let reg: RegExp = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	return str.replace(reg, "");
}




/**
 * @description 大写转换成小写
 *
 * @param {string} str 需要被转换的字符串
 * @return {*}  {string} 一个新的字符串, 转换为小写的字符串
 * @example
 *          toLowerCase("ABC") => "abc"
 */
export const toLowerCase = (str: string): string => {
	let _arr: string[] = str.split("");
	let _ascii: number;
	let _max: number = "Z".charCodeAt(0);
	let _min: number = "A".charCodeAt(0);
	for (let i: number = 0; i < _arr.length; i++) {
		_ascii = _arr[i].charCodeAt(0);
		if (_max >= _ascii && _min <= _ascii) {
			_arr[i] = String.fromCharCode(_ascii + 32);
		}
	}
	return _arr.join("");
}




/**
 * @description 小写转换成大写
 *
 * @param {string} str 需要被转换的字符串
 * @return {*}  {string} 一个新的字符串, 转换为大写的字符串
 * @example
 *          toUpperCase("abc") => "ABC"
 */
export const toUpperCase = (str: string): string => {
	let _arr: string[] = str.split("");
	let _ascii: number;
	let _max: number = "z".charCodeAt(0);
	let _min: number = "a".charCodeAt(0);
	for (let i: number = 0; i < _arr.length; i++) {
		_ascii = _arr[i].charCodeAt(0);
		if (_max >= _ascii && _min <= _ascii) {
			_arr[i] = String.fromCharCode(_ascii - 32);
		}
	}
	return _arr.join("");
}




/**
 * @description 首字母小写
 *
 * @param {string} str 传入一个字符串
 * @return {*}  {string} 返回一个新的首字母小写的字符串
 * @example
 *          toFirstUpper("abc") => abc
 *          toFirstUpper("ABC") => aBC
 */
export const firstLower = (str: string): string => {
	str = ltrim(str); //去掉左边的空格
	return toLowerCase(str.slice(0, 1)) + str.slice(1);
}



/**
 * @description 首字母大写
 *
 * @param {string} str 传入一个字符串
 * @return {*}  {string} 返回一个新的首字母大写的字符串
 * @example 
 *          toFirstUpper("abc") => Abc toFirstUpper("ABC") => ABC
 */
export const firstUpper = (str: string): string => {
	str = ltrim(str) //去掉左边的空格
	return toUpperCase(str.slice(0, 1)) + str.slice(1)
}

/**
 *@description 将字符串进行反序输出
 *
 * @param {string} v 要返回其自身反序的操作
 * @return {string}   返回一个字符串
 * @example reverse("abcdef") => "fedcba"
 */
export const reverse = (v:string):string => {
	if(!isString(v)) return ''
	const arr:Array<string> = v.split('')
	let result:string = ''
	for (let i: number = arr.length - 1; i >= 0; i--) {
		result += arr[i]
	}
	return result
}