import {
	isObject,
	isArray,
	isString,
	getTypeString,
} from './type';
import {
	isArrayEqual,
	isEffectiveArray,
} from "./array";
import { getLength } from './common';
import { invariant } from "../log";

/**
 * 判断是否为一个有实际值的对象
 * @param {object} obj 待判断对象
 * @return {boolean} true：一个有值的对象，false：一个空对象
 * @example
 * isEffectiveObject({}); // false
 * isEffectiveObject({ age: 12 }); true
 */
const isEffectiveObject = (obj: object): boolean => isObject(obj) && Object.keys(obj).length > 0;

/**
 * 判断是否为一个有效值
 * @param {string|number|object|boolean|array} value 待判断变量
 * @return {boolean} true：一个有效值，false：一个无效值
 * @example
 * isEffectiveValue(12); // true
 * isEffectiveValue('12'); // true
 * isEffectiveValue(''); // false
 * isEffectiveValue([]); // false
 * isEffectiveValue({}); // false
 */
const isEffectiveValue = (value: any): boolean => {
	if (
		value !== ''
		&& value !== null
		&& value !== undefined
		&& !isEffectiveArray(value)
		&& !isEffectiveObject(value)
	) {
		return true;
	}

	return false;
}

/**
 * 删除对象属性
 * @param {object} obj 对象
 * @param {string|array} keys 待删除属性
 * @example
 * const person = { name: 'andy' };
 * deleteKeys(person, 'name'); // {}
 */
const deleteKeys = (obj: object, keys: string | Array<string>) => {
	if (isObject(obj)) {
		if (isString(keys)) {
			// @ts-ignore
			delete obj[keys];
		}

		if (isArray(keys)) {
			// @ts-ignore
			keys.forEach(key => delete obj[key]);
		}
	}
}

/**
 * 删除无用的key，多用于过滤请求条件
 * @param {object} obj 待过滤object
 * @example
 * const person = {
 * 		name: 'andy'
 * 		money: null,
 *	};
 * deleteInvalidateKeys(person); // { name: 'andy' }
 */
const deleteInvalidateKeys = (obj: object) => {
	invariant(isObject(obj), '参数应为Object类型');

	if (!isObject(obj)) {
		return;
	}

	for (let propName in obj) {
		// @ts-ignore
		if (!isEffectiveValue(obj[propName])) {
			// @ts-ignore
			delete obj[propName];
		}
	}
}

/**
 * 判断两个object对象是否相等
 * @param {object} obj 基准对象
 * @param {object} other 待对比对象
 * @example
 * isObjectEqual({ age: 12 }, { age: 12 }); // true
 * isObjectEqual({ age: 12 }, { age: '12' }); // true
 */
const isObjectEqual = (obj: object, other: object) => {
	if (!isObject(other)) {
		return false;
	}

	if (getLength(obj) !== getLength(other)) {
		return false;
	}

	for (let propName in obj) {
		// @ts-ignore
		const typeString = getTypeString(obj[propName]);

		switch (typeString) {
			case 'string':
			case 'number':
			case 'null':
			case 'undefined':
			case 'boolean':
				// @ts-ignore
				if (obj[propName] !== other[propName]) {
					return false;
				}
				break;
			case 'object':
				// @ts-ignore
				if (!isObjectEqual(obj[propName], other[propName])) {
					return false;
				}
				break;
			case 'array':
				// @ts-ignore
				if (!isArrayEqual(obj[propName], other[propName])) {
					return false;
				}
				break;
			default:
				// @ts-ignore
				if (String(obj[propName]) !== String(other[propName])) {
					return false;
				}
		}
	}

	return true;
};

export {
	deleteKeys,
	deleteInvalidateKeys,
	isObjectEqual,
	isEffectiveObject,
	isEffectiveValue,
}
