/**
 * 判断两个字符串是否相等
 * @param {string} str 基准字符串
 * @param {string|number} other 其他类型值
 * @return {boolean} true：相等，false：不相等
 * @example
 * isStringEqual(12, '12'); // true
 * isStringEqual('12', '12'); // true
 */
const isStringEqual = (str, other) => {
	return String(str) === String(other);
}

export {
	isStringEqual,
}
