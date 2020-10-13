import { isNumberEqual} from "./number";
import { isStringEqual } from "./string";
import { isObjectEqual } from "./object";
import { isArrayEqual } from "./array";
import {
	isNumber,
	isObject,
	getTypeString,
} from "./type";

/**
 * 判断两个变量是否相等
 * @param {any} value 基准变量
 * @param {any} other 待比较变量
 * @return {boolean} true：相等，false：不相等
 * @example
 * isEqual(1, 1); // true
 * isEqual(1, '1'); // true
 * isEqual('1', 1); // true
 * isEqual([1, 2], [1, 2]); // true
 * isEqual([2, 1], [1, 2]); // false
 * isEqual({ age: 12 }, { age: 12 }); // true
 * isEqual({ age: 12 }, { age: '12' }); // false
 * isEqual(null, null); // true
 * isEqual(null, undefined); // true
 * isEqual(undefined, undefined); // true
 */
const isEqual = (value: any, other: any): boolean => {
	const typeString = getTypeString(value);

	switch (typeString) {
		case 'number':
			return isNumberEqual(value, other);
		case 'string':
			return isStringEqual(value, other);
		case 'object':
			return isObjectEqual(value, other);
		case 'array':
			return isArrayEqual(value, other);
		case 'function':
			return String(value) === String(other);
		default:
			return value === other;
	}
}

/**
 * 判断数据的长度
 * @param {number|string|object|array} value
 * @return {number} 传入数据的长度，如果是对象，则为其包含key-value键值对的数量
 * @example
 * getLength(12345); // 5
 * getLength('1234'); // 4
 * getLength([1, 2, 3]); // 3
 * getLength({ name: 'andy', age: 12 }); // 2
 */
const getLength = (value: any): number => {
	if (isNumber(value)) {
		return String(value).length;
	}

	if (isObject(value)) {
		return Object.keys(value).length;
	}

	return value.length;
}

export {
	isEqual,
	getLength,
}
