/**
 * 校验并输出错误
 * @param {boolean} condition 是否输出,当条件为false时输出
 * @param {string} format 待输出文案
 * @example
 * const a = 1;
 * invariant(typeof a === 'object', 'a不是object'); // 'a不是object'
 */
function invariant(condition, format) {
	if (!condition) {
		console.warn(format);
	}
}

export {
	invariant
};
