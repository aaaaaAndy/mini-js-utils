!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["mini-js-utils"] = t() : e["mini-js-utils"] = t()
}(this, (function () {
	return function (e) {
		var t = {};

		function i(r) {
			if (t[r]) return t[r].exports;
			var n = t[r] = {i: r, l: !1, exports: {}};
			return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
		}

		return i.m = e, i.c = t, i.d = function (e, t, r) {
			i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
		}, i.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
		}, i.t = function (e, t) {
			if (1 & t && (e = i(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (i.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e) for (var n in e) i.d(r, n, function (t) {
				return e[t]
			}.bind(null, n));
			return r
		}, i.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return i.d(t, "a", t), t
		}, i.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, i.p = "", i(i.s = 10)
	}([function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.getTypeString = t.isWindow = t.isGlobal = t.isDocument = t.isRegexp = t.isError = t.isDate = t.isSymbol = t.isNull = t.isUndefined = t.isBoolean = t.isFunction = t.isObject = t.isArray = t.isString = t.isNumber = void 0;
		var r = function (e) {
			var t = Object.prototype.toString.call(e);
			switch (t) {
				case"[object String]":
					return "string";
				case"[object Number]":
					return "number";
				case"[object Boolean]":
					return "boolean";
				case"[object Undefined]":
					return "undefined";
				case"[object Null]":
					return "null";
				case"[object Function]":
					return "function";
				case"[object Symbol]":
					return "symbol";
				case"[object Array]":
					return "array";
				case"[object Object]":
					return "object";
				case"[object Date]":
					return "date";
				case"[object Error]":
					return "error";
				case"[object RegExp]":
					return "regexp";
				case"[object HTMLDocument]":
					return "document";
				case"[object global]":
					return "global";
				case"[object Window]":
					return "window";
				default:
					return t
			}
		};
		t.getTypeString = r;
		t.isNumber = function (e) {
			return "number" === r(e)
		};
		t.isString = function (e) {
			return "string" === r(e)
		};
		t.isArray = function (e) {
			return "array" === r(e)
		};
		t.isObject = function (e) {
			return "object" === r(e)
		};
		t.isFunction = function (e) {
			return "function" === r(e)
		};
		t.isBoolean = function (e) {
			return "boolean" === r(e)
		};
		t.isUndefined = function (e) {
			return "undefined" === r(e)
		};
		t.isNull = function (e) {
			return "null" === r(e)
		};
		t.isSymbol = function (e) {
			return "symbol" === r(e)
		};
		t.isDate = function (e) {
			return "date" === r(e)
		};
		t.isError = function (e) {
			return "error" === r(e)
		};
		t.isRegexp = function (e) {
			return "regexp" === r(e)
		};
		t.isDocument = function (e) {
			return "document" === r(e)
		};
		t.isGlobal = function (e) {
			return "global" === r(e)
		};
		t.isWindow = function (e) {
			return "window" === r(e)
		}
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.isEffectiveValue = t.isEffectiveObject = t.isObjectEqual = t.deleteInvalidateKeys = t.deleteKeys = void 0;
		var r = i(0), n = i(2), s = i(8), u = i(9), o = function (e) {
			return r.isObject(e) && Object.keys(e).length > 0
		};
		t.isEffectiveObject = o;
		var a = function (e) {
			return "" !== e && null != e && !n.isEffectiveArray(e) && !o(e)
		};
		t.isEffectiveValue = a;
		t.deleteKeys = function (e, t) {
			r.isObject(e) && (r.isString(t) && delete e[t], r.isArray(t) && t.forEach((function (t) {
				return delete e[t]
			})))
		};
		t.deleteInvalidateKeys = function (e) {
			if (u.invariant(r.isObject(e), "参数应为Object类型"), r.isObject(e)) for (var t in e) a(e[t]) || delete e[t]
		};
		var c = function (e, t) {
			if (!r.isObject(t)) return !1;
			if (s.getLength(e) !== s.getLength(t)) return !1;
			for (var i in e) {
				switch (r.getTypeString(e[i])) {
					case"string":
					case"number":
					case"null":
					case"undefined":
					case"boolean":
						if (e[i] !== t[i]) return !1;
						break;
					case"object":
						if (!c(e[i], t[i])) return !1;
						break;
					case"array":
						if (!n.isArrayEqual(e[i], t[i])) return !1;
						break;
					default:
						if (String(e[i]) !== String(t[i])) return !1
				}
			}
			return !0
		};
		t.isObjectEqual = c
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.isEffectiveArray = t.isArrayEqual = void 0;
		var r = i(0), n = i(1);
		t.isEffectiveArray = function (e) {
			return r.isArray(e) && e.length > 0
		};
		var s = function (e, t) {
			if (!r.isArray(t)) return !1;
			if (e.length !== t.length) return !1;
			for (var i = 0; i < e.length; i++) {
				switch (r.getTypeString(e[i])) {
					case"string":
					case"number":
					case"null":
					case"undefined":
					case"boolean":
						if (e[i] !== t[i]) return !1;
						break;
					case"object":
						if (!n.isObjectEqual(e[i], t[i])) return !1;
						break;
					case"array":
						if (!s(e[i], t[i])) return !1;
						break;
					default:
						if (String(e[i]) !== String(t[i])) return !1
				}
			}
			return !0
		};
		t.isArrayEqual = s
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.isMillisecondsTimeStamp = t.isSecondsTimeStamp = t.isTimeStamp = t.getTimeStamp = void 0;
		var r = i(4), n = i(5);
		t.getTimeStamp = function (e) {
			void 0 === e && (e = 0);
			return r.now() - 864e5 * e
		};
		var s = function (e) {
			var t = r.now(), i = n.getLength(t);
			return n.getLength(e) + 3 === i
		};
		t.isSecondsTimeStamp = s;
		var u = function (e) {
			var t = r.now(), i = n.getLength(t);
			return n.getLength(e) === i
		};
		t.isMillisecondsTimeStamp = u;
		t.isTimeStamp = function (e) {
			return u(e) || s(e)
		}
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.now = void 0;
		t.now = function () {
			return Date.now()
		}
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.getLength = t.isEqual = t.isEffectiveArray = t.isArrayEqual = t.isEffectiveValue = t.isEffectiveObject = t.isObjectEqual = t.deleteInvalidateKeys = t.deleteKeys = t.isStringEqual = t.isEffectiveNumber = t.isNumberEqual = t.getTypeString = t.isWindow = t.isGlobal = t.isDocument = t.isRegexp = t.isError = t.isDate = t.isSymbol = t.isNull = t.isUndefined = t.isBoolean = t.isFunction = t.isObject = t.isArray = t.isString = t.isNumber = void 0;
		var r = i(0);
		t.isNumber = r.isNumber, t.isString = r.isString, t.isArray = r.isArray, t.isObject = r.isObject, t.isFunction = r.isFunction, t.isBoolean = r.isBoolean, t.isUndefined = r.isUndefined, t.isNull = r.isNull, t.isSymbol = r.isSymbol, t.isDate = r.isDate, t.isError = r.isError, t.isRegexp = r.isRegexp, t.isDocument = r.isDocument, t.isGlobal = r.isGlobal, t.isWindow = r.isWindow, t.getTypeString = r.getTypeString;
		var n = i(6);
		t.isNumberEqual = n.isNumberEqual, t.isEffectiveNumber = n.isEffectiveNumber;
		var s = i(7);
		t.isStringEqual = s.isStringEqual;
		var u = i(1);
		t.deleteKeys = u.deleteKeys, t.deleteInvalidateKeys = u.deleteInvalidateKeys, t.isObjectEqual = u.isObjectEqual, t.isEffectiveObject = u.isEffectiveObject, t.isEffectiveValue = u.isEffectiveValue;
		var o = i(2);
		t.isArrayEqual = o.isArrayEqual, t.isEffectiveArray = o.isEffectiveArray;
		var a = i(8);
		t.isEqual = a.isEqual, t.getLength = a.getLength
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.isNumberEqual = t.isEffectiveNumber = void 0;
		var r = i(0);
		t.isEffectiveNumber = function (e) {
			return r.isNumber(e) || r.isString(e) && !isNaN(Number(e))
		};
		t.isNumberEqual = function (e, t) {
			return !(!r.isNumber(t) && !r.isString(t)) && Number(e) === Number(t)
		}
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.isStringEqual = void 0;
		t.isStringEqual = function (e, t) {
			return String(e) === String(t)
		}
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.getLength = t.isEqual = void 0;
		var r = i(6), n = i(7), s = i(1), u = i(2), o = i(0);
		t.isEqual = function (e, t) {
			switch (o.getTypeString(e)) {
				case"number":
					return r.isNumberEqual(e, t);
				case"string":
					return n.isStringEqual(e, t);
				case"object":
					return s.isObjectEqual(e, t);
				case"array":
					return u.isArrayEqual(e, t);
				case"function":
					return String(e) === String(t);
				default:
					return e === t
			}
		};
		t.getLength = function (e) {
			return o.isNumber(e) ? String(e).length : o.isObject(e) ? Object.keys(e).length : e.length
		}
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.invariant = void 0, t.invariant = function (e, t) {
			e || console.warn(t)
		}
	}, function (e, t, i) {
		"use strict";
		var r = this && this.__createBinding || (Object.create ? function (e, t, i, r) {
			void 0 === r && (r = i), Object.defineProperty(e, r, {
				enumerable: !0, get: function () {
					return t[i]
				}
			})
		} : function (e, t, i, r) {
			void 0 === r && (r = i), e[r] = t[i]
		}), n = this && this.__exportStar || function (e, t) {
			for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || r(t, e, i)
		};
		t.__esModule = !0, n(i(11), t)
	}, function (e, t, i) {
		"use strict";
		var r = this && this.__createBinding || (Object.create ? function (e, t, i, r) {
			void 0 === r && (r = i), Object.defineProperty(e, r, {
				enumerable: !0, get: function () {
					return t[i]
				}
			})
		} : function (e, t, i, r) {
			void 0 === r && (r = i), e[r] = t[i]
		}), n = this && this.__exportStar || function (e, t) {
			for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || r(t, e, i)
		};
		t.__esModule = !0, n(i(12), t), n(i(9), t), n(i(5), t)
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.isMillisecondsTimeStamp = t.isSecondsTimeStamp = t.isTimeStamp = t.getTimeStamp = t.now = t.dateFormat = void 0;
		var r = i(13);
		t.dateFormat = r.dateFormat;
		var n = i(4);
		t.now = n.now;
		var s = i(3);
		t.getTimeStamp = s.getTimeStamp, t.isTimeStamp = s.isTimeStamp, t.isSecondsTimeStamp = s.isSecondsTimeStamp, t.isMillisecondsTimeStamp = s.isMillisecondsTimeStamp
	}, function (e, t, i) {
		"use strict";
		t.__esModule = !0, t.dateFormat = void 0;
		var r = i(3);
		t.dateFormat = function (e, t) {
			if (void 0 === t && (t = "yyyy-MM-dd HH:mm:ss"), !r.isMillisecondsTimeStamp(e)) return e;
			var i = new Date(e), n = {
				"M+": i.getMonth() + 1,
				"d+": i.getDate(),
				"h+": i.getHours(),
				"H+": i.getHours(),
				"m+": i.getMinutes(),
				"s+": i.getSeconds(),
				"q+": Math.floor((i.getMonth() + 3) / 3),
				S: i.getMilliseconds()
			};
			for (var s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, ("" + i.getFullYear()).substr(4 - RegExp.$1.length))), /(E+)/.test(t) && (t = t.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + {
				0: "/u65e5",
				1: "/u4e00",
				2: "/u4e8c",
				3: "/u4e09",
				4: "/u56db",
				5: "/u4e94",
				6: "/u516d"
			}["" + i.getDay()])), n) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? n[s] : ("00" + n[s]).substr(("" + n[s]).length)));
			return t
		}
	}])
}));
