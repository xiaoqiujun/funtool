/**
 * @version: v1.0.0
 * @author: xiaoqiujun
 * @Github: https://github.com/xiaoqiujun
 * @date: Do not edit
 * @LastEditors: xiaoqiujun
 * @LastEditTime: 2022-03-11 11:48:09
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
const arrayProto = Array.prototype;
const push = arrayProto.push;
const pop = arrayProto.pop;
const slice = arrayProto.slice;
const splice = arrayProto.splice;
const hasOwnProperty = objProto.hasOwnProperty;
/**
 * @description 是否number类型
 *
 * @param {unknown} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isNumber(12) => true
 *          isNumber("12") => false
 */
export const isNumber = (v: unknown): v is number => {
	return objProto.toString.call(v) === NUMBER_TAG;
};

/**
 * @description 是否string类型
 *
 * @param {unknown} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isString(12) => false
 *          isString("12") => true
 */
export const isString = (v: unknown): v is string => {
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
export const isBoolean = (v: unknown): v is boolean => {
	return objProto.toString.call(v) === BOOLEAN_TAG;
};

/**
 * @description 是否array类型
 *
 * @param {any} v 任意值
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
 * @param {unknown} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isPlainObject([]) => false
 *          isPlainObject(1) => false
 *          isPlainObject({}) = true
 */
export const isPlainObject = (v: unknown): v is object => {
	return objProto.toString.call(v) === OBJECT_TAG;
};

/**
 * @description 是否object类型
 *
 * @param {unknown} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isObject([]) => true
 *          isObject(1) => false
 *          isObject({}) = true
 */
export const isObject = (v: unknown): boolean => {
	return !isNull(v) && typeof v === "object";
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
export const isSymbol = (v: unknown): boolean => {
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
export const isNull = (v: unknown): boolean => {
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
export const isUndefined = (v: unknown): boolean => {
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
export const isNaN = (v: unknown): boolean => {
	return isNumber(v) && Number.isNaN(v);
};

/**
 * @description 是否function不包含aync fun
 *
 * @param {unknown} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 *          isPlainFunction([]) => false
 *          isPlainFunction(1) => false
 *          isPlainFunction(function * aync() {}) => true
 *          isPlainFunction(function(){}) = true
 */
export const isPlainFunction = (v: unknown): boolean => {
	return objProto.toString.call(v) === FUNCTION_TAG;
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
export const isFunction = (v: unknown): boolean => {
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
export const isSet = (v: unknown): boolean => {
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
export const isMap = (v: unknown): boolean => {
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
export const isDate = (v: unknown): boolean => {
	return objProto.toString.call(v) === DATE_TAG;
};

/**
 * @description 是否Promise
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 * 			isPromise() => true|false
 */
export const isPromise = <T = any>(v: any): v is Promise<T> => {
	return isObject(v) && isFunction(v.then) && isFunction(v.catch);
};

/**
 * @description 是否RegExp
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example
 * 			isRegExp(function(){}) => false
 * 			isRegExp(/\d/) => true
 */
export const isRegExp = (v: any): boolean => {
	return objProto.toString.call(v) === REGEXP_TAG;
};

/**
 * @description 是否基本数据类型
 * @param {any} 任意类型
 * @return boolean 返回一个boolean值
 * @example
 * 		isPrimitive(1) => true isPrimitive({}) => false
 */

export const isPrimitive = (v: any): boolean => {
	return isString(v) || isNumber(v) || isSymbol(v) || isBoolean(v);
};

/**
 * @description 是否iPhone设备
 *
 * @return {*}  {boolean} 返回一个布尔值
 * @example isiPhone() => false|true
 */
export const isiPhone = (): boolean => {
	let userAgentInfo: string = navigator.userAgent;
	if (userAgentInfo.indexOf("iPhone") > -1) {
		return true;
	}
	return false;
};

/**
 * @description 是否Android
 *
 * @return {*}  {boolean} 返回一个布尔值
 * @example isAndroid() => true|false
 */
export const isAndroid = (): boolean => {
	let userAgentInfo: string = navigator.userAgent;
	if (userAgentInfo.indexOf("Android") > -1 || userAgentInfo.indexOf("Linux") > -1) {
		return true;
	}
	return false;
};

/**
 *@description 是否WPhone设备
 *
 * @return {*}  {boolean} 返回一个布尔值
 * @example isWPhone() => false|true
 */
export const isWPhone = (): boolean => {
	let userAgentInfo: string = navigator.userAgent;
	if (userAgentInfo.indexOf("Windows Phone") > -1) {
		return true;
	}
	return false;
};

/**
 * @description 是否PC端
 *
 * @return {*}  {boolean} 返回一个布尔值
 * @example isPC() => true|false
 */
export const isPC = (): boolean => {
	let userAgentInfo: string = navigator.userAgent;
	let Agents: Array<string> = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	let flag: boolean = true;
	for (let i: number = 0; i < Agents.length; i++) {
		if (userAgentInfo.indexOf(Agents[i]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
};

/**
 * @description 返回一个空函数
 *
 */
export const noop = function () {};

/**
 *
 * @param {GeneratorFunction}
 */
export const thread = (gen: Function) => {
	let it = gen();
	function next(data?: any) {
		let res = it.next(data);
		if (res.done) return res.value;
		res.value
			.then(() => {
				next(data);
			})
			.catch((e: any) => {
				res = it.next(data);
				next(data);
			});
	}
	next();
};

/**
 * @description 函数节流
 *
 * @param {{ apply: (args0: any, args1: any) => void }} fn 需要做节流处理的函数
 * @param {number} [delay=500] 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
export const throttle = (fn: { apply: (args0: any, args1: any) => void }, delay: number = 500): Function => {
	let lastTime: number = 0;
	return function (this: any, ...args: any) {
		let now: number = new Date().getTime();
		if (now - lastTime > delay) {
			fn.apply(this, args);
			lastTime = now;
		}
	};
};

/**
 * @description 函数防抖
 *
 * @param {{ apply: (args0: any, args1: any) => void }} fn 需要做防抖处理的函数
 * @param {number} [delay=500] 延迟时间 默认500ms
 * @return {*}  {Function} 返回防抖后的函数
 */
export const debounce = (fn: { apply: (args0: any, args1: any) => void }, delay: number = 500): Function => {
	let timeout: any = null;
	return function (this: any, ...args: any) {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = null;
			fn.apply(this, args);
		}, delay);
	};
};

/**
 * @description 对象深拷贝
 * 来源Vuex https://github.com/vuejs/vuex/blob/dev/src/util.js 解决了循环引用问题
 * 对其深度拷贝进行二次优化, 添加Date其他类型的判断 {time:new Date(), regexp:/\w+/}
 * @param {any} obj 要进行拷贝的源数据
 * @param {Array<any>} [cache=[]] 利用数组存储已经拷贝过的数据, 每次拷贝会从cache中查询有没有拷贝过
 * @return {any}  {*} 返回拷贝的数据
 * @example deepCopy({age:12, time:new Date(), regexp:/\w+/, fn:function(){}}, [])
 */
export const deepCopy = (obj: any, cache: Array<any> = []): any => {
	if (isNull(obj) && !isObject(obj)) return obj;
	let hit: any = cache.filter((c) => {
		return c.original === obj;
	})[0];
	if (hit) return hit.copy;
	let copy: any;
	//添加Date和RegExp类型
	if (isDate(obj)) copy = new Date(obj);
	else if (isRegExp(obj)) copy = new RegExp(obj);
	else if (isArray(obj)) copy = [];
	else copy = {};
	cache.push({
		original: obj,
		copy,
	});
	Object.keys(obj).forEach((key) => {
		copy[key] = deepCopy(obj[key], cache);
	});
	return copy;
};

/**
 * @description 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数
 *
 * @param {{ apply: (args0: any, args1: any) => void }} target
 * @param {*} obj 需要绑定的对象
 * @return {*}  {(Function|void)} 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数
 * @example bind(fn, {a:1})
 */
export const bind = function (target: { apply: (args0: any, args1: any) => void }, obj: any): Function | null {
	if (!isObject(obj) && !isFunction(obj)) return null;
	const args: any[] = slice.call(arguments, 1);
	const self: any = target;
	const fn: any = noop;
	const wrap = function (this: { apply: (args0: any, args1: any) => void }) {
		const params: any[] = slice.call(arguments);
		self.apply(this ? (this.constructor === self ? this : obj) : obj, args.concat(params));
	};
	fn.prototype = self.prototype;
	wrap.prototype = new fn();
	return wrap;
};

/**
 * @description 把一个对象上的属性拷贝到另个对象上
 *
 * @param {*} thisArgs 拷贝对象
 * @param {*} target 需要被拷贝的对象
 * @example extend({a:1}, {b:1})
 */
export const extend = (thisArgs: any, target: any) => {
	if (isPrimitive(target) || isPrimitive(thisArgs)) return;
	each(target, (v: any, key: any) => {
		if (!isPrimitive(v)) {
			thisArgs[key] = deepCopy(v);
		} else {
			thisArgs[key] = v;
		}
	});
};

/**
 * 迭代器回调函数
 */
type EachCallBack = (currentValue: any, index: number, collection: any) => void;
/**
 * @description 迭代器
 *
 * @param {*} collection
 * @param {EachCallBack} iteratee
 * @example each([1,2,3], (v, i, arr) = {
 *
 *          })
 */
export const each = (collection: any, iteratee: EachCallBack) => {
	if (!isFunction(iteratee)) iteratee = noop;
	let result: Array<any> = [];
	if (isArray(collection)) result = collection;
	else result = [collection];
	let length: number = result.length;
	let index: number = 0;
	while (index < length) {
		iteratee.call(null, result[index], index, collection);
		index++;
	}
};

export const hasKey = (obj: Record<any, any>, key: any): key is keyof typeof obj => {
	return key in obj;
};

/**
 * @description 返回object自身可枚举属性
 *
 * @param {*} obj 要返回可枚举属性的对象
 * @return {*}  {Array<string>} 返回一个给定对象自身的所有可枚举属性的数组
 * @example toKeys({a:1,b:2}) => ["a", "b"]
 */
export const toKeys = (obj: any): Array<string> => {
	if (!isPlainObject(obj)) return [];
	let keys: Array<string> = [];
	for (let key in obj) {
		keys.push(key);
	}
	return keys;
};
/**
 * @description 返回object自身可枚举属性值
 *
 * @param {*} obj 要返回可枚举属性值的对象
 * @return {*}  {Array<any>} 返回一个给定对象自身的所有可枚举属性值的数组
 * @example toValues({a:1,b:2}) => [1, 2]
 */
export const toValues = (obj: Record<any, any>): Array<any> => {
	if (!isObject(obj)) return [];
	let values: Array<any> = [];
	for (let key in obj) {
		if (hasKey(obj, key)) values.push(obj[key]);
	}
	return values;
};

/**
 * @description 判断是否为空 {}|""|[]|null|undefined
 *
 * @param {*} v 任意值
 * @return {*}  {boolean} 返回一个布尔值
 * @example empty("") => true empty(null) => true empty(undefined) => true empty({}) => true empty([]) => true empty(0) => false
 */
export const empty = (v: any): boolean => {
	if (isPlainObject(v)) return toKeys(v).length === 0;
	if (isArray(v)) return v.length === 0;
	if (isNull(v) || isUndefined(v)) return true;
	if (isString(v)) return v === "";
	return false;
};

/**
 * @description 将object对象转成url参数
 *
 * @param {*} obj 需要被转化Url参数的对象
 * @return {*}  {string} 返回一个不包含 ? 的Url参数的字符串
 * @example a=1&b=2&c=3
 */
export const parseQuery = (obj: Record<any, any>): string => {
	if (!isObject(obj)) return "";
	const keys: string[] = toKeys(obj);
	let param: string = "";
	keys.forEach((key: string, i: number) => {
		if (i < keys.length - 1) param += `${key}=${obj[key]}&`;
		else param += `${key}=${obj[key]}`;
	});
	return param;
};

/**
 * @description 对url做简单解析成object
 *
 * @param {string} url 需要被解析的Url地址
 * @return {*}  {*} 返回一个对象
 * @example urlParse("http:127.0.0.1:8080?type=1&id=123&name=zhangsan") => {url: "http:127.0.0.1:8080", type: "1", id: "123", name: "zhangsan"}
 */
export const urlParse = (url: string): Record<any, any> | string => {
	let urlObj: Record<any, any> = {};
	let split: Array<string> = url.split("?");
	if (split.length === 1) return split[0];
	if (split.length === 2) {
		urlObj["url"] = split[0];
		let param: Array<string> = split[1].split("&");
		if (param.length > 1) {
			for (let i: number = 0; i < param.length; i++) {
				let _param: Array<string> = param[i].split("=");
				if (_param.length === 2) {
					urlObj[_param[0]] = _param[1];
				}
			}
		}
	}
	return urlObj;
};

type BrowserType = "IE7" | "IE8" | "IE9" | "IE10" | "IE11" | "Edge" | "FireFox" | "Opera" | "Chrome" | "Safari" | null; //不对低版本做校验
/**
 * @description 获取浏览器类型
 *
 * @return {*}  {BrowserType} | 'IE7'| 'IE8'| 'IE9'| 'IE10'| 'IE11'| 'Edge'| 'FireFox'| 'Opera'| 'Chrome'| 'Safari'| null
 * @example getBrowserType() => 'Chrome'
 */
export const getBrowserType = (): BrowserType => {
	let types: BrowserType = null;
	let userAgentInfo: string = navigator.userAgent;
	let isOpera: boolean = userAgentInfo.indexOf("Opera") > -1;
	let isIE: boolean = userAgentInfo.indexOf("compatible") > -1 && userAgentInfo.indexOf("MSIE") > -1 && !isOpera;
	let isIE11: boolean = userAgentInfo.indexOf("Trident") > -1 && userAgentInfo.indexOf("rv:11.0") > -1;
	let isEdge: boolean = userAgentInfo.indexOf("Edge") > -1 && !isIE;
	let isFireFox: boolean = userAgentInfo.indexOf("Firefox") > -1;
	let isSafari: boolean = userAgentInfo.indexOf("Safari") > -1 && userAgentInfo.indexOf("Chrome") === -1;
	let isChrome: boolean = userAgentInfo.indexOf("Chrome") > -1 && userAgentInfo.indexOf("Safari") > -1;

	if (isIE) {
		let regIE: RegExp = new RegExp("MSIE (\\d+\\.\\d+);");
		regIE.test(userAgentInfo);
		let version: number = parseFloat(RegExp["$1"]);
		if (version == 7) types = "IE7";
		else if (version == 8) types = "IE8";
		else if (version == 9) types = "IE9";
		else if (version == 10) types = "IE10";
		else types = null;
	}
	if (isIE11) types = "IE11";
	if (isEdge) types = "Edge";
	if (isFireFox) types = "FireFox";
	if (isOpera) types = "Opera";
	if (isSafari) types = "Safari";
	if (isChrome) types = "Chrome";
	return types;
};

/**
 * @description 生成唯一的UID
 *
 * @return {*}  {string} 返回生成的UID字符串
 * @example createUID() => 5d33b0fc-692d-41eb-e703-4aa76a8f
 */
export const createUID = (): string => {
	let uniqid: string = "";
	let rule: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx";
	uniqid = rule.replace(/[xy]/g, function (rep: string) {
		let num: number = (16 * Math.random()) | 0;
		return ("x" === rep ? num : 3 && num | 8).toString(16);
	});
	return uniqid;
};

/**
 * @description 获取随机验证码
 *
 * @param {number} [len=4] 默认长度是4位
 * @return {*}  {string} 返回一个[len]长度的随机字符串
 * @example createVerifyCode(4) => 4sGa
 */
export const createVerifyCode = (len: number = 4): string => {
	let strAll: string = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
	let newStr: string = "";
	for (let i: number = 0; i < len; i++) {
		let index: number = Math.floor(Math.random() * strAll.length);
		newStr += strAll.charAt(index);
	}
	return newStr;
};

/**
 * @description 生成简单随机数
 *
 * @param {number} [lower=0] 最小范围
 * @param {number} [upper=1] 最大范围
 * @return {*}  {number} 返回一个[lower, upper]之间的数字
 * @example random(0, 4) => 3
 */
export const random = (lower: number = 0, upper: number = 1): number => {
	return Math.floor(Math.random() * (upper - lower)) + lower;
};

/**
 * 异步异常处理
 * @param promise 接收一个primose
 * @returns promise
 */
export const to = <T, E = Error>(promise: Promise<T>): Promise<[E, undefined] | [null, T]> => {
	if (typeof promise.then !== "function") {
		let _promise: Promise<T> = new Promise((resolve) => {
			resolve(promise);
		});
		return to(_promise);
	}
	return promise
		.then<[null, T]>((data: T) => [null, data])
		.catch<[E, undefined]>((err: E) => [err, undefined]);
};