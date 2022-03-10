/**
 * @version: v1.0.0
 * @author: xiaoqiujun
 * @Github: https://github.com/xiaoqiujun
 * @date: Do not edit
 * @LastEditors: xiaoqiujun
 * @LastEditTime: 2022-03-10 16:37:57
 * @FilePath: \funtool\src\date.ts
 */

/**
 * @description 简单的日期格式化
 *
 * @param {Date} date Data 日期
 * @param {string} [format="-"] string 默认-
 * @return {*}  {string} 返回格式化后的日期
 * @example format(new Date()) => 2019-6-12 13:43:23
 */
export const format = (date: Date, format: string = "-"): string => {
	let year: number | string = date.getFullYear();
	let month: number | string = date.getMonth() + 1;
	let day: number | string = date.getDate();
	let hour: number | string = date.getHours();
	let minute: number | string = date.getMinutes();
	let second: number | string = date.getSeconds();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	second = second < 10 ? "0" + second : second;
	return year + format + month + format + day + " " + hour + ":" + minute + ":" + second;
};

/**
 * @description 显示友好时间  今天/一天前/一周前/一个月前/一年前
 * @param date 时间戳
 * @returns {string}  
 */
export const timeSpan = (date: number): string => {
	let minute: number = 1000 * 60;
	let hour: number = minute * 60;
	let day: number = hour * 24;
	let week: number = day * 7;
	let month: number = day * 30;
	let year: number = month * 12;

	if (date < 0) return "--";
	else if (date / year >= 1) return (date / year).toFixed(0) + "年前";
	else if (date / month >= 1) return (date / month).toFixed(0) + "月前";
	else if (date / week >= 1) return (date / week).toFixed(0) + "周前";
	else if (date / day >= 1) return (date / day).toFixed(0) + "天前";
	else if (date / hour >= 1) return (date / hour).toFixed(0) + "小时前";
	else if (date / minute >= 1) return (date / minute).toFixed(0) + "分钟前";
	else return "刚刚";
};

/**
 * @description 获取当前时间秒
 * @returns {number}
 */
export const getTime = (): number => {
	return Math.round(new Date().getTime() / 1000)
}

/**
 * @description 把秒数转化为天、时、分、秒
 * @param {number} 参数value是秒数
 * @returns {string} 
 */
 export const formatSeconds = (value:number):string => {
	let second:number = Math.floor(value) // 秒
	let minute:number = 0 // 分
	let hour:number = 0 // 小时
	let day:number = 0 // 天
	var result = ''
	if (value < 60) {
		return `${second}秒`
	}
	if(second >= 60) {	// 如果秒数大于60，将秒数转换成整数
		minute = second / 60		//算出分 1分钟60秒
		second = second % 60		//算出剩余秒数
	}
	if(minute >= 60) {
		hour = minute / 60	//算出小时
		minute = minute % 60	//求出剩余分钟
	}
	if(hour >= 24) {
		day = hour / 24	//算出天数
		hour = hour % 24	//求剩余小时
	}
	
	if(second > 0) result = `${second >= 10 ? second : `0${second}`}秒`
	if(minute > 0) result = `${minute >= 10 ? minute : `0${minute}`}分` + result
	if(hour > 0) result = `${hour >= 10 ? hour : `0${hour}`}小时` + result
	if(day > 0) result = `${day >= 10 ? day : `0${day}`}天` + result
	
	return result
}