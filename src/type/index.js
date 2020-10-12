import {
	isNumber,
	isString,
	isArray,
	isObject,
	isFunction,
	isBoolean,
	isUndefined,
	isNull,
	isSymbol,
	isDate,
	isError,
	isRegexp,
	isDocument,
	isGlobal,
	isWindow,
	getTypeString,
} from './type';
import {
	isNumberEqual,
	isEffectiveNumber,
} from './number';
import {
	isStringEqual,
} from './string';
import {
	deleteKeys,
	deleteInvalidateKeys,
	isObjectEqual,
	isEffectiveObject,
	isEffectiveValue,
} from "./object";
import {
	isArrayEqual,
	isEffectiveArray,
} from "./array";
import {
	isEqual,
	getLength,
} from "./common";

export {
	// 类型判断
	isNumber,
	isString,
	isArray,
	isObject,
	isFunction,
	isBoolean,
	isUndefined,
	isNull,
	isSymbol,
	isDate,
	isError,
	isRegexp,
	isDocument,
	isGlobal,
	isWindow,
	getTypeString,

	// number
	isNumberEqual,
	isEffectiveNumber,

	// string
	isStringEqual,

	// object
	deleteKeys,
	deleteInvalidateKeys,
	isObjectEqual,
	isEffectiveObject,
	isEffectiveValue,

	// array
	isArrayEqual,
	isEffectiveArray,

	// common
	isEqual,
	getLength,
};
