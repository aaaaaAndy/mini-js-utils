import { isArray, getTypeString } from './type';
import { isObjectEqual } from "./object";

/**
 * 判断是否为一个数值的数组
 * @param {array} arr 数组
 * @return {boolean} true：数组有值，false：空数组，数组没有有效值
 * @example
 * isEffectiveArray([]);  // false
 * isEffectiveArray([1, 3]); // true
 */
const isEffectiveArray = (arr) => isArray(arr) && arr.length > 0;

/**
 * 判断两个数组是否相等
 * @param {array} arr 基准数组
 * @param {array} other 待对比数组
 * @return {boolean} true：两个数组相等，false：两个数组不相等
 * @example
 * isArrayEqual([1, 2], [1, 2]); // true
 * isArrayEqual([1, 2], [2, 1]); // false
 * isArrayEqual([1, 2], ['1', 2]); // false
 */
const isArrayEqual = (arr, other) => {
	if (!isArray(other)) {
		return false;
	}

	if (arr.length !== other.length) {
		return false;
	}

	for (let i = 0; i < arr.length; i++) {
		const typeString = getTypeString(arr[i]);

		switch (typeString) {
			case 'string':
			case 'number':
			case 'null':
			case 'undefined':
			case 'boolean':
				if (arr[i] !== other[i]) {
					return false;
				}
				break;
			case 'object':
				if (!isObjectEqual(arr[i], other[i])) {
					return false;
				}
				break;
			case 'array':
				if (!isArrayEqual(arr[i], other[i])) {
					return false;
				}
				break;
			default:
				if (String(arr[i]) !== String(other[i])) {
					return false;
				}
		}
	}

	return true;
}

export {
	isArrayEqual,
	isEffectiveArray,
};
