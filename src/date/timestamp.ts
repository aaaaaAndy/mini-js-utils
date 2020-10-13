import { now } from './common';
import { getLength } from "../type";

/**
 * 获取N天前的时间戳, 默认0天，即当前时间戳
 * @param {number} day N天，不传默认取当前时间戳
 * @return {number} N天前的时间戳
 * @example
 * const timestamp = getTimeStamp(); // 获取当前时间戳
 * const timestamp = getTimeStamp(10); // 获取十天前的时间戳
 */
const getTimeStamp = (day = 0): number => {
	const DAY_TIMESTAMP = 24 * 60 * 60 * 1000;
	return now() - day * DAY_TIMESTAMP;
}

/**
 * 是否为秒级时间戳
 * @param {number} timeStamp
 * @return {boolean} true：秒级，false：非秒级
 * @example
 * const timestampType = isSecondsTimeStamp(now()); // false
 */
const isSecondsTimeStamp = (timeStamp: number): boolean => {
	const currentTime = now();
	const currentTimeLength = getLength(currentTime);
	const timeStampLength = getLength(timeStamp);

	return timeStampLength + 3 === currentTimeLength;
}

/**
 * 是否为毫秒级时间戳
 * @param {number} timeStamp
 * @return {boolean} true：毫秒级，false：非毫秒级
 * @example
 * const timestampType = isMillisecondsTimeStamp(now()); // true
 */
const isMillisecondsTimeStamp = (timeStamp: number): boolean => {
	const currentTime = now();
	const currentTimeLength = getLength(currentTime);
	const timeStampLength = getLength(timeStamp);

	return timeStampLength === currentTimeLength;
}

/**
 * 判断是否为时间戳
 * @param {number} timestamp 时间戳
 * @return {boolean} true：是时间戳，false：不是时间戳
 * @example
 * const isTimeStamp = isTimeStamp(now()); // true
 */
const isTimeStamp = (timestamp: number): boolean => isMillisecondsTimeStamp(timestamp) || isSecondsTimeStamp(timestamp);

export {
	getTimeStamp,
	isTimeStamp,
	isSecondsTimeStamp,
	isMillisecondsTimeStamp,
}
