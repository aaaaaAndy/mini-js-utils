import { isNumber, isString, isArray, isObject, isFunction, isBoolean, isUndefined, isNull, isSymbol, isDate, isError, isRegexp, isDocument, isGlobal, isWindow, getTypeString } from './type';
import { isNumberEqual, isEffectiveNumber } from './number';
import { isStringEqual } from './string';
import { deleteKeys, deleteInvalidateKeys, isObjectEqual, isEffectiveObject, isEffectiveValue } from "./object";
import { isArrayEqual, isEffectiveArray } from "./array";
import { isEqual, getLength } from "./common";
export { isNumber, isString, isArray, isObject, isFunction, isBoolean, isUndefined, isNull, isSymbol, isDate, isError, isRegexp, isDocument, isGlobal, isWindow, getTypeString, isNumberEqual, isEffectiveNumber, isStringEqual, deleteKeys, deleteInvalidateKeys, isObjectEqual, isEffectiveObject, isEffectiveValue, isArrayEqual, isEffectiveArray, isEqual, getLength, };
