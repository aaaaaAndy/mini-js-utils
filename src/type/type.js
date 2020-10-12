/**
 * 获取数据类型
 * @param {any} value 参数
 * @return {string} 参数类型
 * @example
 * getTypeString('123'); // string
 * getTypeString(123); // number
 * getTypeString(true); // boolean
 * getTypeString(undefined); // undefined
 * getTypeString(null); // null
 * getTypeString(function() {}); // function
 * getTypeString(Symbol()); // symbol
 * getTypeString([1, 2, 3]); // array
 * getTypeString({ age: 12 }); // object
 * getTypeString(new Date()); // date
 * getTypeString(new Error('nothing')); // error
 * getTypeString(new RegExp(/\w/)); // regexp
 * getTypeString(document); // document
 * getTypeString(global); // global node环境下
 * getTypeString(window); // window 浏览器环境下
 */
const getTypeString = (value) => {
	const objectType = Object.prototype.toString.call(value);

	switch (objectType) {
		case '[object String]':
			return 'string';
		case '[object Number]':
			return 'number';
		case '[object Boolean]':
			return 'boolean';
		case '[object Undefined]':
			return 'undefined';
		case '[object Null]':
			return 'null';
		case '[object Function]':
			return 'function';
		case '[object Symbol]':
			return 'symbol';
		case '[object Array]':
			return 'array';
		case '[object Object]':
			return 'object';
		case '[object Date]':
			return 'date';
		case '[object Error]':
			return 'error';
		case '[object RegExp]':
			return 'regexp';
		case '[object HTMLDocument]':
			return 'document';
		case '[object global]':
			return 'global';
		case '[object Window]':
			return 'window';
		default:
			return objectType;
	}
}

/**
 * 是否为数字
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isNumber(123); // true
 * isNumber('123'); // false
 */
const isNumber = value => getTypeString(value) === 'number';

/**
 * 是否为字符串
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isString(123); // false
 * isString('123'); // true
 */
const isString = value => getTypeString(value) === 'string';

/**
 * 是否为数组
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isArray([]); // true
 * isArray([1, 2]); // true
 * isArray({ age: 12 }); // false
 */
const isArray = value => getTypeString(value) === 'array';

/**
 * 是否为对象
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isObject({}); // true
 * isObject({ age: 12 }); // true
 * isObject([1, 2, 3]); // false
 */
const isObject = value => getTypeString(value) === 'object';

/**
 * 是否为函数
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isFunction(function(){}); // true
 * isFunction({ age: 12 }); // false
 */
const isFunction = value => getTypeString(value) === 'function';

/**
 * 是否为布尔值
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isBoolean(false); // true
 * isBoolean('false'); // false
 */
const isBoolean = value => getTypeString(value) === 'boolean';

/**
 * 是否为undefined
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isUndefined(undefined); // true
 * isUndefined(null); // false
 */
const isUndefined = value => getTypeString(value) === 'undefined';

/**
 * 是否为null
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isNull(null); // true
 * isNull(undefined); false
 */
const isNull = value => getTypeString(value) === 'null';

/**
 * 是否为Symbol
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isSymbol(12); // false
 * isSymbol(Symbol(12)); // true
 */
const isSymbol = value => getTypeString(value) === 'symbol';

/**
 * 是否为日期
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isDate(new Date()); // true
 * isDate(123); false
 */
const isDate = value => getTypeString(value) === 'date';

/**
 * 是否为错误
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isError(new Error('nothing')); // true
 */
const isError = value => getTypeString(value) === 'error';

/**
 * 是否为正则
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isRegexp(new RegExp(/\w/)); // true
 */
const isRegexp = value => getTypeString(value) === 'regexp';

/**
 * 是否为document对象
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isDocument(document); // true
 */
const isDocument = value => getTypeString(value) === 'document';

/**
 * 是否为global对象
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isGlobal(global); // true
 */
const isGlobal = value => getTypeString(value) === 'global';

/**
 * 是否为Window对象
 * @param value 参数
 * @return {boolean} true：是，false，否
 * @example
 * isWindow(window); // true
 */
const isWindow = value => getTypeString(value) === 'window';

export {
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
}
