import {
	isString,
	isNumber,
} from './type';

/**
 * 是否为一个有效数字
 * @param {number|string} value 参数
 * @return {boolean} true：有效数字，false：无效数字
 * @example
 * isEffectiveNumber(123); // true
 * isEffectiveNumber('123'); // true
 * isEffectiveNumber('123a'); // false
 * isEffectiveNumber(abc); // false
 */
const isEffectiveNumber = (value) => isNumber(value) || (isString(value) && !isNaN(value))

/**
 * 判断两个数字是否相等
 * @param {number} num 基准数字
 * @param {number|string} other 待对比数字
 * @return {boolean} true：相等，false；不相等
 * @example
 * isNumberEqual(12, 12); // true
 * isNumberEqual(12, '12'); // true
 * isNumberEqual(12, '12a'); // false
 */
const isNumberEqual = (num, other) => {
	if (isNumber(other) || isString(other)) {
		return Number(num) === Number(other);
	}

	return false;
}

export {
	isEffectiveNumber,
	isNumberEqual,
}
