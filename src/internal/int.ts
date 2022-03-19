
import { isNumber } from "./lang"

namespace Int {
	/**
	 * @description 是否number类型
	 *
	 * @param {*} v 任意值
	 * @return {*}  {boolean} 返回一个布尔值
	 * @example
	 *      is("12") => false
	 *      is(1) => true
	 *      is([]) => false
	 */
	export const is = (v: any): boolean => {
		return isNumber(v)
	}
}

export default Int
