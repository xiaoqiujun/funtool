import { isPrimitive } from "./lang"

const objProto = Object.prototype;
const hasOwnProperty = objProto.hasOwnProperty;

/**
 * @description 判断属性是否存在
 *
 * @param {*} obj 任意类型, 不是obejct返回false
 * @param {(string|number)} v 需要查找的属性名
 * @return {*}  {boolean} 返回一个布尔值
 * @example has({a:1}, "a") => true
 */
export const has = (obj: any, v: string|number): boolean => {
	if (isPrimitive(obj)) return false
	return hasOwnProperty.call(obj, v)
}