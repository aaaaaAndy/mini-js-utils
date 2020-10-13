!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["mini-js-utils"] = t() : e["mini-js-utils"] = t()
}(window, (function () {
	return function (e) {
		var t = {};

		function r(n) {
			if (t[n]) return t[n].exports;
			var i = t[n] = {i: n, l: !1, exports: {}};
			return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
		}

		return r.m = e, r.c = t, r.d = function (e, t, n) {
			r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
		}, r.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
		}, r.t = function (e, t) {
			if (1 & t && (e = r(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var n = Object.create(null);
			if (r.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e) for (var i in e) r.d(n, i, function (t) {
				return e[t]
			}.bind(null, i));
			return n
		}, r.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return r.d(t, "a", t), t
		}, r.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, r.p = "", r(r.s = 10)
	}([function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.getTypeString = t.isWindow = t.isGlobal = t.isDocument = t.isRegexp = t.isError = t.isDate = t.isSymbol = t.isNull = t.isUndefined = t.isBoolean = t.isFunction = t.isObject = t.isArray = t.isString = t.isNumber = void 0;
		var n = function (e) {
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
		t.getTypeString = n;
		t.isNumber = function (e) {
			return "number" === n(e)
		};
		t.isString = function (e) {
			return "string" === n(e)
		};
		t.isArray = function (e) {
			return "array" === n(e)
		};
		t.isObject = function (e) {
			return "object" === n(e)
		};
		t.isFunction = function (e) {
			return "function" === n(e)
		};
		t.isBoolean = function (e) {
			return "boolean" === n(e)
		};
		t.isUndefined = function (e) {
			return "undefined" === n(e)
		};
		t.isNull = function (e) {
			return "null" === n(e)
		};
		t.isSymbol = function (e) {
			return "symbol" === n(e)
		};
		t.isDate = function (e) {
			return "date" === n(e)
		};
		t.isError = function (e) {
			return "error" === n(e)
		};
		t.isRegexp = function (e) {
			return "regexp" === n(e)
		};
		t.isDocument = function (e) {
			return "document" === n(e)
		};
		t.isGlobal = function (e) {
			return "global" === n(e)
		};
		t.isWindow = function (e) {
			return "window" === n(e)
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.isEffectiveValue = t.isEffectiveObject = t.isObjectEqual = t.deleteInvalidateKeys = t.deleteKeys = void 0;
		var n = r(0), i = r(2), u = r(8), o = r(9), c = function (e) {
			return n.isObject(e) && Object.keys(e).length > 0
		};
		t.isEffectiveObject = c;
		var s = function (e) {
			return "" !== e && null != e && !i.isEffectiveArray(e) && !c(e)
		};
		t.isEffectiveValue = s;
		t.deleteKeys = function (e, t) {
			n.isObject(e) && (n.isString(t) && delete e[t], n.isArray(t) && t.forEach((function (t) {
				return delete e[t]
			})))
		};
		t.deleteInvalidateKeys = function (e) {
			if (o.invariant(n.isObject(e), "参数应为Object类型"), n.isObject(e)) for (var t in e) s(e[t]) || delete e[t]
		};
		var a = function (e, t) {
			if (!n.isObject(t)) return !1;
			if (u.getLength(e) !== u.getLength(t)) return !1;
			for (var r in e) {
				switch (n.getTypeString(e[r])) {
					case"string":
					case"number":
					case"null":
					case"undefined":
					case"boolean":
						if (e[r] !== t[r]) return !1;
						break;
					case"object":
						if (!a(e[r], t[r])) return !1;
						break;
					case"array":
						if (!i.isArrayEqual(e[r], t[r])) return !1;
						break;
					default:
						if (String(e[r]) !== String(t[r])) return !1
				}
			}
			return !0
		};
		t.isObjectEqual = a
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.isEffectiveArray = t.isArrayEqual = void 0;
		var n = r(0), i = r(1);
		t.isEffectiveArray = function (e) {
			return n.isArray(e) && e.length > 0
		};
		var u = function (e, t) {
			if (!n.isArray(t)) return !1;
			if (e.length !== t.length) return !1;
			for (var r = 0; r < e.length; r++) {
				switch (n.getTypeString(e[r])) {
					case"string":
					case"number":
					case"null":
					case"undefined":
					case"boolean":
						if (e[r] !== t[r]) return !1;
						break;
					case"object":
						if (!i.isObjectEqual(e[r], t[r])) return !1;
						break;
					case"array":
						if (!u(e[r], t[r])) return !1;
						break;
					default:
						if (String(e[r]) !== String(t[r])) return !1
				}
			}
			return !0
		};
		t.isArrayEqual = u
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.isMillisecondsTimeStamp = t.isSecondsTimeStamp = t.isTimeStamp = t.getTimeStamp = void 0;
		var n = r(4), i = r(5);
		t.getTimeStamp = function (e) {
			void 0 === e && (e = 0);
			return n.now() - 864e5 * e
		};
		var u = function (e) {
			var t = n.now(), r = i.getLength(t);
			return i.getLength(e) + 3 === r
		};
		t.isSecondsTimeStamp = u;
		var o = function (e) {
			var t = n.now(), r = i.getLength(t);
			return i.getLength(e) === r
		};
		t.isMillisecondsTimeStamp = o;
		t.isTimeStamp = function (e) {
			return o(e) || u(e)
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.now = void 0;
		t.now = function () {
			return Date.now()
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.getLength = t.isEqual = t.isEffectiveArray = t.isArrayEqual = t.isEffectiveValue = t.isEffectiveObject = t.isObjectEqual = t.deleteInvalidateKeys = t.deleteKeys = t.isStringEqual = t.isEffectiveNumber = t.isNumberEqual = t.getTypeString = t.isWindow = t.isGlobal = t.isDocument = t.isRegexp = t.isError = t.isDate = t.isSymbol = t.isNull = t.isUndefined = t.isBoolean = t.isFunction = t.isObject = t.isArray = t.isString = t.isNumber = void 0;
		var n = r(0);
		Object.defineProperty(t, "isNumber", {
			enumerable: !0, get: function () {
				return n.isNumber
			}
		}), Object.defineProperty(t, "isString", {
			enumerable: !0, get: function () {
				return n.isString
			}
		}), Object.defineProperty(t, "isArray", {
			enumerable: !0, get: function () {
				return n.isArray
			}
		}), Object.defineProperty(t, "isObject", {
			enumerable: !0, get: function () {
				return n.isObject
			}
		}), Object.defineProperty(t, "isFunction", {
			enumerable: !0, get: function () {
				return n.isFunction
			}
		}), Object.defineProperty(t, "isBoolean", {
			enumerable: !0, get: function () {
				return n.isBoolean
			}
		}), Object.defineProperty(t, "isUndefined", {
			enumerable: !0, get: function () {
				return n.isUndefined
			}
		}), Object.defineProperty(t, "isNull", {
			enumerable: !0, get: function () {
				return n.isNull
			}
		}), Object.defineProperty(t, "isSymbol", {
			enumerable: !0, get: function () {
				return n.isSymbol
			}
		}), Object.defineProperty(t, "isDate", {
			enumerable: !0, get: function () {
				return n.isDate
			}
		}), Object.defineProperty(t, "isError", {
			enumerable: !0, get: function () {
				return n.isError
			}
		}), Object.defineProperty(t, "isRegexp", {
			enumerable: !0, get: function () {
				return n.isRegexp
			}
		}), Object.defineProperty(t, "isDocument", {
			enumerable: !0, get: function () {
				return n.isDocument
			}
		}), Object.defineProperty(t, "isGlobal", {
			enumerable: !0, get: function () {
				return n.isGlobal
			}
		}), Object.defineProperty(t, "isWindow", {
			enumerable: !0, get: function () {
				return n.isWindow
			}
		}), Object.defineProperty(t, "getTypeString", {
			enumerable: !0, get: function () {
				return n.getTypeString
			}
		});
		var i = r(6);
		Object.defineProperty(t, "isNumberEqual", {
			enumerable: !0, get: function () {
				return i.isNumberEqual
			}
		}), Object.defineProperty(t, "isEffectiveNumber", {
			enumerable: !0, get: function () {
				return i.isEffectiveNumber
			}
		});
		var u = r(7);
		Object.defineProperty(t, "isStringEqual", {
			enumerable: !0, get: function () {
				return u.isStringEqual
			}
		});
		var o = r(1);
		Object.defineProperty(t, "deleteKeys", {
			enumerable: !0, get: function () {
				return o.deleteKeys
			}
		}), Object.defineProperty(t, "deleteInvalidateKeys", {
			enumerable: !0, get: function () {
				return o.deleteInvalidateKeys
			}
		}), Object.defineProperty(t, "isObjectEqual", {
			enumerable: !0, get: function () {
				return o.isObjectEqual
			}
		}), Object.defineProperty(t, "isEffectiveObject", {
			enumerable: !0, get: function () {
				return o.isEffectiveObject
			}
		}), Object.defineProperty(t, "isEffectiveValue", {
			enumerable: !0, get: function () {
				return o.isEffectiveValue
			}
		});
		var c = r(2);
		Object.defineProperty(t, "isArrayEqual", {
			enumerable: !0, get: function () {
				return c.isArrayEqual
			}
		}), Object.defineProperty(t, "isEffectiveArray", {
			enumerable: !0, get: function () {
				return c.isEffectiveArray
			}
		});
		var s = r(8);
		Object.defineProperty(t, "isEqual", {
			enumerable: !0, get: function () {
				return s.isEqual
			}
		}), Object.defineProperty(t, "getLength", {
			enumerable: !0, get: function () {
				return s.getLength
			}
		})
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.isNumberEqual = t.isEffectiveNumber = void 0;
		var n = r(0);
		t.isEffectiveNumber = function (e) {
			return n.isNumber(e) || n.isString(e) && !isNaN(Number(e))
		};
		t.isNumberEqual = function (e, t) {
			return !(!n.isNumber(t) && !n.isString(t)) && Number(e) === Number(t)
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.isStringEqual = void 0;
		t.isStringEqual = function (e, t) {
			return String(e) === String(t)
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.getLength = t.isEqual = void 0;
		var n = r(6), i = r(7), u = r(1), o = r(2), c = r(0);
		t.isEqual = function (e, t) {
			switch (c.getTypeString(e)) {
				case"number":
					return n.isNumberEqual(e, t);
				case"string":
					return i.isStringEqual(e, t);
				case"object":
					return u.isObjectEqual(e, t);
				case"array":
					return o.isArrayEqual(e, t);
				case"function":
					return String(e) === String(t);
				default:
					return e === t
			}
		};
		t.getLength = function (e) {
			return c.isNumber(e) ? String(e).length : c.isObject(e) ? Object.keys(e).length : e.length
		}
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.invariant = void 0, t.invariant = function (e, t) {
			e || console.warn(t)
		}
	}, function (e, t, r) {
		"use strict";
		var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
			void 0 === n && (n = r), Object.defineProperty(e, n, {
				enumerable: !0, get: function () {
					return t[r]
				}
			})
		} : function (e, t, r, n) {
			void 0 === n && (n = r), e[n] = t[r]
		}), i = this && this.__exportStar || function (e, t) {
			for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
		};
		Object.defineProperty(t, "__esModule", {value: !0}), i(r(11), t)
	}, function (e, t, r) {
		"use strict";
		var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
			void 0 === n && (n = r), Object.defineProperty(e, n, {
				enumerable: !0, get: function () {
					return t[r]
				}
			})
		} : function (e, t, r, n) {
			void 0 === n && (n = r), e[n] = t[r]
		}), i = this && this.__exportStar || function (e, t) {
			for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
		};
		Object.defineProperty(t, "__esModule", {value: !0}), i(r(12), t), i(r(9), t), i(r(5), t)
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.isMillisecondsTimeStamp = t.isSecondsTimeStamp = t.isTimeStamp = t.getTimeStamp = t.now = t.dateFormat = void 0;
		var n = r(13);
		Object.defineProperty(t, "dateFormat", {
			enumerable: !0, get: function () {
				return n.dateFormat
			}
		});
		var i = r(4);
		Object.defineProperty(t, "now", {
			enumerable: !0, get: function () {
				return i.now
			}
		});
		var u = r(3);
		Object.defineProperty(t, "getTimeStamp", {
			enumerable: !0, get: function () {
				return u.getTimeStamp
			}
		}), Object.defineProperty(t, "isTimeStamp", {
			enumerable: !0, get: function () {
				return u.isTimeStamp
			}
		}), Object.defineProperty(t, "isSecondsTimeStamp", {
			enumerable: !0, get: function () {
				return u.isSecondsTimeStamp
			}
		}), Object.defineProperty(t, "isMillisecondsTimeStamp", {
			enumerable: !0, get: function () {
				return u.isMillisecondsTimeStamp
			}
		})
	}, function (e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {value: !0}), t.dateFormat = void 0;
		var n = r(3);
		t.dateFormat = function (e, t) {
			if (void 0 === t && (t = "yyyy-MM-dd HH:mm:ss"), !n.isMillisecondsTimeStamp(e)) return e;
			var r = new Date(e), i = {
				"M+": r.getMonth() + 1,
				"d+": r.getDate(),
				"h+": r.getHours(),
				"H+": r.getHours(),
				"m+": r.getMinutes(),
				"s+": r.getSeconds(),
				"q+": Math.floor((r.getMonth() + 3) / 3),
				S: r.getMilliseconds()
			};
			for (var u in /(y+)/.test(t) && (t = t.replace(RegExp.$1, ("" + r.getFullYear()).substr(4 - RegExp.$1.length))), /(E+)/.test(t) && (t = t.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468" : "") + {
				0: "/u65e5",
				1: "/u4e00",
				2: "/u4e8c",
				3: "/u4e09",
				4: "/u56db",
				5: "/u4e94",
				6: "/u516d"
			}["" + r.getDay()])), i) new RegExp("(" + u + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? i[u] : ("00" + i[u]).substr(("" + i[u]).length)));
			return t
		}
	}])
}));
