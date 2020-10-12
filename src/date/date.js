import { isMillisecondsTimeStamp } from './timestamp';

/**
 * 时间格式化
 * @param {number} timeStamp 时间戳
 * @param {string} fmt 格式化字符串类型
 * @return {string|number} 格式化后的字符串
 * @example
 * const currentDate = dateFormat(now())
 * const currentDate = dateFormat(now(), 'yyyy-MM-dd')
 */
const dateFormat = (timeStamp, fmt = 'yyyy-MM-dd HH:mm:ss') => {
	if (!isMillisecondsTimeStamp(timeStamp)) {
		return timeStamp;
	}

	const date = new Date(timeStamp);
	const o = {
		'M+': date.getMonth() + 1, // 月份
		'd+': date.getDate(), // 日
		'h+': date.getHours(), // 小时
		'H+': date.getHours(), // 小时
		'm+': date.getMinutes(), // 分
		's+': date.getSeconds(), // 秒
		'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
		S: date.getMilliseconds(), // 毫秒
	};
	const week = {
		0: '/u65e5',
		1: '/u4e00',
		2: '/u4e8c',
		3: '/u4e09',
		4: '/u56db',
		5: '/u4e94',
		6: '/u516d',
	};

	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
	}

	if (/(E+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[`${date.getDay()}`]);
	}

	for (const k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
		}
	}
	return fmt;
};

export {
	dateFormat,
}
