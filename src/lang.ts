/**
 * @version: v1.0.0
 * @author: xiaoqiujun
 * @Github: https://github.com/xiaoqiujun
 * @date: Do not edit
 * @LastEditors: xiaoqiujun
 * @LastEditTime: 2022-03-10 12:00:07
 * @FilePath: \funtool\src\lang.ts
 */

const NUMBER_TAG = "[object Number]";
const BOOLEAN_TAG = "[object Boolean]";
const STRING_TAG = "[object String]";
const SYMBOL_TAG = "[object Symbol]";
const ARRAY_TAG = "[object Array]";
const OBJECT_TAG = "[object Object]";
const NULL_TAG = "[object Null]";
const UNDEFINED_TAG = "[object Undefined]";
const DATE_TAG = "[object Date]";
const FUNCTION_TAG = "[object Function]";
const SET_TAG = "[object Set]";
const MAP_TAG = "[object Map]";
const REGEXP_TAG = "[object RegExp]";
const ERROR_TAG = "[object Error]";
const ASYNC_TAG = "[object AsyncFunction]";
const GENERATOR_TAG = "[object GeneratorFunction]";
const ARGS_TAG = "[object Arguments]";

const objProto = Object.prototype;

/**
 * @description 是否number类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isNumber(12) => true
 *          isNumber("12") => false
 */
export const isNumber = (v: any): boolean => {
	return objProto.toString.call(v) === NUMBER_TAG;
};

/**
 * @description 是否string类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isString(12) => false
 *          isString("12") => true
 */
export const isString = (v: any): boolean => {
	return objProto.toString.call(v) === STRING_TAG;
};

/**
 * @description 是否boolean类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isBool(12) => false
 *          isBool(false) => true
 */
export const isBool = (v: any): boolean => {
	return objProto.toString.call(v) === BOOLEAN_TAG;
};

/**
 * @description 是否array类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isArray([]) => true
 *          isArray(1) => false
 */
export const isArray = (v: any): boolean => {
	return v.constructor === Array && toString.call(v) === ARRAY_TAG;
};

/**
 * @description 是否object类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isObj([]) => false
 *          isObj(1) => false
 *          isObj({}) = true
 */
export const isObj = (v: any): boolean => {
	return objProto.toString.call(v) === OBJECT_TAG;
};

/**
 * @description 是否Symbol类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isSymbol([]) => false
 *          isSymbol(1) => false
 *          isSymbol(Symbol()) = true
 */
export const isSymbol = (v: any): boolean => {
	return objProto.toString.call(v) === SYMBOL_TAG;
};

/**
 * @description 是否null
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isNull([]) => false
 *          isNull(1) => false
 *          isNull(null) = true
 */
export const isNull = (v: any): boolean => {
	return objProto.toString.call(v) === NULL_TAG;
};

/**
 * @description 是否undefined
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isUndefined([]) => false
 *          isUndefined(1) => false
 *          isUndefined(null) => false
 *          isUndefined(undefined) = true
 */
export const isUndefined = (v: any): boolean => {
	return objProto.toString.call(v) === UNDEFINED_TAG;
};

/**
 * @description 是否NaN
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isNaN([]) => false
 *          isNaN(1) => false
 *          isNaN(null) => false
 *          isNaN(NaN) = true
 */
export const isNaN = (v: any): boolean => {
	return isNumber(v) && Number.isNaN(v);
};

/**
 * @description 是否function
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isFunction([]) => false
 *          isFunction(1) => false
 *          isFunction(function * aync() {}) => true
 *          isFunction(function(){}) = true
 */
export const isFunction = (v: any): boolean => {
	return typeof v === "function";
};

/**
 * @description 是否Set类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isSet([]) => false
 *          isSet(1) => false
 *          isSet(new Set()) => true
 */
export const isSet = (v: any): boolean => {
	return objProto.toString.call(v) === SET_TAG;
};

/**
 * @description 是否Map类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isMap([]) => false
 *          isMap(1) => false
 *          isMap(new Map()) => true
 */
export const isMap = (v: any): boolean => {
	return objProto.toString.call(v) === MAP_TAG;
};

/**
 * @description 是否Date类型
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isDate([]) => false
 *          isDate(1) => false
 *          isDate(new Date()) => true
 */
 export const isDate = (v: any): boolean => {
	return objProto.toString.call(v) === DATE_TAG;
};

