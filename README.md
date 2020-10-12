## Functions

<dl>
<dt><a href="#now">now()</a> ⇒ <code>number</code></dt>
<dd><p>返回当前时间戳</p>
</dd>
<dt><a href="#dateFormat">dateFormat(timeStamp, fmt)</a> ⇒ <code>string</code> | <code>number</code></dt>
<dd><p>时间格式化</p>
</dd>
<dt><a href="#getTimeStamp">getTimeStamp(day)</a> ⇒ <code>number</code></dt>
<dd><p>获取N天前的时间戳, 默认0天，即当前时间戳</p>
</dd>
<dt><a href="#isSecondsTimeStamp">isSecondsTimeStamp(timeStamp)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为秒级时间戳</p>
</dd>
<dt><a href="#isMillisecondsTimeStamp">isMillisecondsTimeStamp(timeStamp)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为毫秒级时间戳</p>
</dd>
<dt><a href="#isTimeStamp">isTimeStamp(timestamp)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为时间戳</p>
</dd>
<dt><a href="#invariant">invariant(condition, format)</a></dt>
<dd><p>校验并输出错误</p>
</dd>
<dt><a href="#isEffectiveArray">isEffectiveArray(arr)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为一个数值的数组</p>
</dd>
<dt><a href="#isArrayEqual">isArrayEqual(arr, other)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断两个数组是否相等</p>
</dd>
<dt><a href="#isEqual">isEqual(value, other)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断两个变量是否相等</p>
</dd>
<dt><a href="#getLength">getLength(value)</a> ⇒ <code>number</code></dt>
<dd><p>判断数据的长度</p>
</dd>
<dt><a href="#isEffectiveNumber">isEffectiveNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为一个有效数字</p>
</dd>
<dt><a href="#isNumberEqual">isNumberEqual(num, other)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断两个数字是否相等</p>
</dd>
<dt><a href="#isEffectiveObject">isEffectiveObject(obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为一个有实际值的对象</p>
</dd>
<dt><a href="#isEffectiveValue">isEffectiveValue(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断是否为一个有效值</p>
</dd>
<dt><a href="#deleteKeys">deleteKeys(obj, keys)</a></dt>
<dd><p>删除对象属性</p>
</dd>
<dt><a href="#deleteInvalidateKeys">deleteInvalidateKeys(obj)</a></dt>
<dd><p>删除无用的key，多用于过滤请求条件</p>
</dd>
<dt><a href="#isObjectEqual">isObjectEqual(obj, other)</a></dt>
<dd><p>判断两个object对象是否相等</p>
</dd>
<dt><a href="#isStringEqual">isStringEqual(str, other)</a> ⇒ <code>boolean</code></dt>
<dd><p>判断两个字符串是否相等</p>
</dd>
<dt><a href="#getTypeString">getTypeString(value)</a> ⇒ <code>string</code></dt>
<dd><p>获取数据类型</p>
</dd>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为数字</p>
</dd>
<dt><a href="#isString">isString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为字符串</p>
</dd>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为数组</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为对象</p>
</dd>
<dt><a href="#isFunction">isFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为函数</p>
</dd>
<dt><a href="#isBoolean">isBoolean(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为布尔值</p>
</dd>
<dt><a href="#isUndefined">isUndefined(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为undefined</p>
</dd>
<dt><a href="#isNull">isNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为null</p>
</dd>
<dt><a href="#isSymbol">isSymbol(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为Symbol</p>
</dd>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为日期</p>
</dd>
<dt><a href="#isError">isError(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为错误</p>
</dd>
<dt><a href="#isRegexp">isRegexp(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为正则</p>
</dd>
<dt><a href="#isDocument">isDocument(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为document对象</p>
</dd>
<dt><a href="#isGlobal">isGlobal(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为global对象</p>
</dd>
<dt><a href="#isWindow">isWindow(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>是否为Window对象</p>
</dd>
</dl>

<a name="now"></a>

## now() ⇒ <code>number</code>
返回当前时间戳

**Kind**: global function  
**Returns**: <code>number</code> - 时间戳  
**Example**  
```js
const timestamp = now(); // 1602490153920
```
<a name="dateFormat"></a>

## dateFormat(timeStamp, fmt) ⇒ <code>string</code> \| <code>number</code>
时间格式化

**Kind**: global function  
**Returns**: <code>string</code> \| <code>number</code> - 格式化后的字符串  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| timeStamp | <code>number</code> |  | 时间戳 |
| fmt | <code>string</code> | <code>&quot;yyyy-MM-dd HH:mm:ss&quot;</code> | 格式化字符串类型 |

**Example**  
```js
const currentDate = dateFormat(now())
const currentDate = dateFormat(now(), 'yyyy-MM-dd')
```
<a name="getTimeStamp"></a>

## getTimeStamp(day) ⇒ <code>number</code>
获取N天前的时间戳, 默认0天，即当前时间戳

**Kind**: global function  
**Returns**: <code>number</code> - N天前的时间戳  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| day | <code>number</code> | <code>0</code> | N天，不传默认取当前时间戳 |

**Example**  
```js
const timestamp = getTimeStamp(); // 获取当前时间戳
const timestamp = getTimeStamp(10); // 获取十天前的时间戳
```
<a name="isSecondsTimeStamp"></a>

## isSecondsTimeStamp(timeStamp) ⇒ <code>boolean</code>
是否为秒级时间戳

**Kind**: global function  
**Returns**: <code>boolean</code> - true：秒级，false：非秒级  

| Param | Type |
| --- | --- |
| timeStamp | <code>number</code> |

**Example**  
```js
const timestampType = isSecondsTimeStamp(now()); // false
```
<a name="isMillisecondsTimeStamp"></a>

## isMillisecondsTimeStamp(timeStamp) ⇒ <code>boolean</code>
是否为毫秒级时间戳

**Kind**: global function  
**Returns**: <code>boolean</code> - true：毫秒级，false：非毫秒级  

| Param | Type |
| --- | --- |
| timeStamp | <code>number</code> |

**Example**  
```js
const timestampType = isMillisecondsTimeStamp(now()); // true
```
<a name="isTimeStamp"></a>

## isTimeStamp(timestamp) ⇒ <code>boolean</code>
判断是否为时间戳

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是时间戳，false：不是时间戳  

| Param | Type | Description |
| --- | --- | --- |
| timestamp | <code>number</code> | 时间戳 |

**Example**  
```js
const isTimeStamp = isTimeStamp(now()); // true
```
<a name="invariant"></a>

## invariant(condition, format)
校验并输出错误

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| condition | <code>boolean</code> | 是否输出,当条件为false时输出 |
| format | <code>string</code> | 待输出文案 |

**Example**  
```js
const a = 1;
invariant(typeof a === 'object', 'a不是object'); // 'a不是object'
```
<a name="isEffectiveArray"></a>

## isEffectiveArray(arr) ⇒ <code>boolean</code>
判断是否为一个数值的数组

**Kind**: global function  
**Returns**: <code>boolean</code> - true：数组有值，false：空数组，数组没有有效值  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | 数组 |

**Example**  
```js
isEffectiveArray([]);  // false
isEffectiveArray([1, 3]); // true
```
<a name="isArrayEqual"></a>

## isArrayEqual(arr, other) ⇒ <code>boolean</code>
判断两个数组是否相等

**Kind**: global function  
**Returns**: <code>boolean</code> - true：两个数组相等，false：两个数组不相等  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | 基准数组 |
| other | <code>array</code> | 待对比数组 |

**Example**  
```js
isArrayEqual([1, 2], [1, 2]); // true
isArrayEqual([1, 2], [2, 1]); // false
isArrayEqual([1, 2], ['1', 2]); // false
```
<a name="isEqual"></a>

## isEqual(value, other) ⇒ <code>boolean</code>
判断两个变量是否相等

**Kind**: global function  
**Returns**: <code>boolean</code> - true：相等，false：不相等  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | 基准变量 |
| other | <code>any</code> | 待比较变量 |

**Example**  
```js
isEqual(1, 1); // true
isEqual(1, '1'); // true
isEqual('1', 1); // true
isEqual([1, 2], [1, 2]); // true
isEqual([2, 1], [1, 2]); // false
isEqual({ age: 12 }, { age: 12 }); // true
isEqual({ age: 12 }, { age: '12' }); // false
isEqual(null, null); // true
isEqual(null, undefined); // true
isEqual(undefined, undefined); // true
```
<a name="getLength"></a>

## getLength(value) ⇒ <code>number</code>
判断数据的长度

**Kind**: global function  
**Returns**: <code>number</code> - 传入数据的长度，如果是对象，则为其包含key-value键值对的数量  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> \| <code>object</code> \| <code>array</code> |

**Example**  
```js
getLength(12345); // 5
getLength('1234'); // 4
getLength([1, 2, 3]); // 3
getLength({ name: 'andy', age: 12 }); // 2
```
<a name="isEffectiveNumber"></a>

## isEffectiveNumber(value) ⇒ <code>boolean</code>
是否为一个有效数字

**Kind**: global function  
**Returns**: <code>boolean</code> - true：有效数字，false：无效数字  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> \| <code>string</code> | 参数 |

**Example**  
```js
isEffectiveNumber(123); // true
isEffectiveNumber('123'); // true
isEffectiveNumber('123a'); // false
isEffectiveNumber(abc); // false
```
<a name="isNumberEqual"></a>

## isNumberEqual(num, other) ⇒ <code>boolean</code>
判断两个数字是否相等

**Kind**: global function  
**Returns**: <code>boolean</code> - true：相等，false；不相等  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | 基准数字 |
| other | <code>number</code> \| <code>string</code> | 待对比数字 |

**Example**  
```js
isNumberEqual(12, 12); // true
isNumberEqual(12, '12'); // true
isNumberEqual(12, '12a'); // false
```
<a name="isEffectiveObject"></a>

## isEffectiveObject(obj) ⇒ <code>boolean</code>
判断是否为一个有实际值的对象

**Kind**: global function  
**Returns**: <code>boolean</code> - true：一个有值的对象，false：一个空对象  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | 待判断对象 |

**Example**  
```js
isEffectiveObject({}); // false
isEffectiveObject({ age: 12 }); true
```
<a name="isEffectiveValue"></a>

## isEffectiveValue(value) ⇒ <code>boolean</code>
判断是否为一个有效值

**Kind**: global function  
**Returns**: <code>boolean</code> - true：一个有效值，false：一个无效值  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> \| <code>object</code> \| <code>boolean</code> \| <code>array</code> | 待判断变量 |

**Example**  
```js
isEffectiveValue(12); // true
isEffectiveValue('12'); // true
isEffectiveValue(''); // false
isEffectiveValue([]); // false
isEffectiveValue({}); // false
```
<a name="deleteKeys"></a>

## deleteKeys(obj, keys)
删除对象属性

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | 对象 |
| keys | <code>string</code> \| <code>array</code> | 待删除属性 |

**Example**  
```js
const person = { name: 'andy' };
deleteKeys(person, 'name'); // {}
```
<a name="deleteInvalidateKeys"></a>

## deleteInvalidateKeys(obj)
删除无用的key，多用于过滤请求条件

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | 待过滤object |

**Example**  
```js
const person = {
		name: 'andy'
		money: null,
	};
deleteInvalidateKeys(person); // { name: 'andy' }
```
<a name="isObjectEqual"></a>

## isObjectEqual(obj, other)
判断两个object对象是否相等

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | 基准对象 |
| other | <code>object</code> | 待对比对象 |

**Example**  
```js
isObjectEqual({ age: 12 }, { age: 12 }); // true
isObjectEqual({ age: 12 }, { age: '12' }); // true
```
<a name="isStringEqual"></a>

## isStringEqual(str, other) ⇒ <code>boolean</code>
判断两个字符串是否相等

**Kind**: global function  
**Returns**: <code>boolean</code> - true：相等，false：不相等  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | 基准字符串 |
| other | <code>string</code> \| <code>number</code> | 其他类型值 |

**Example**  
```js
isStringEqual(12, '12'); // true
isStringEqual('12', '12'); // true
```
<a name="getTypeString"></a>

## getTypeString(value) ⇒ <code>string</code>
获取数据类型

**Kind**: global function  
**Returns**: <code>string</code> - 参数类型  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | 参数 |

**Example**  
```js
getTypeString('123'); // string
getTypeString(123); // number
getTypeString(true); // boolean
getTypeString(undefined); // undefined
getTypeString(null); // null
getTypeString(function() {}); // function
getTypeString(Symbol()); // symbol
getTypeString([1, 2, 3]); // array
getTypeString({ age: 12 }); // object
getTypeString(new Date()); // date
getTypeString(new Error('nothing')); // error
getTypeString(new RegExp(/\w/)); // regexp
getTypeString(document); // document
getTypeString(global); // global node环境下
getTypeString(window); // window 浏览器环境下
```
<a name="isNumber"></a>

## isNumber(value) ⇒ <code>boolean</code>
是否为数字

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isNumber(123); // true
isNumber('123'); // false
```
<a name="isString"></a>

## isString(value) ⇒ <code>boolean</code>
是否为字符串

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isString(123); // false
isString('123'); // true
```
<a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
是否为数组

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isArray([]); // true
isArray([1, 2]); // true
isArray({ age: 12 }); // false
```
<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
是否为对象

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isObject({}); // true
isObject({ age: 12 }); // true
isObject([1, 2, 3]); // false
```
<a name="isFunction"></a>

## isFunction(value) ⇒ <code>boolean</code>
是否为函数

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isFunction(function(){}); // true
isFunction({ age: 12 }); // false
```
<a name="isBoolean"></a>

## isBoolean(value) ⇒ <code>boolean</code>
是否为布尔值

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isBoolean(false); // true
isBoolean('false'); // false
```
<a name="isUndefined"></a>

## isUndefined(value) ⇒ <code>boolean</code>
是否为undefined

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isUndefined(undefined); // true
isUndefined(null); // false
```
<a name="isNull"></a>

## isNull(value) ⇒ <code>boolean</code>
是否为null

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isNull(null); // true
isNull(undefined); false
```
<a name="isSymbol"></a>

## isSymbol(value) ⇒ <code>boolean</code>
是否为Symbol

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isSymbol(12); // false
isSymbol(Symbol(12)); // true
```
<a name="isDate"></a>

## isDate(value) ⇒ <code>boolean</code>
是否为日期

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isDate(new Date()); // true
isDate(123); false
```
<a name="isError"></a>

## isError(value) ⇒ <code>boolean</code>
是否为错误

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isError(new Error('nothing')); // true
```
<a name="isRegexp"></a>

## isRegexp(value) ⇒ <code>boolean</code>
是否为正则

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isRegexp(new RegExp(/\w/)); // true
```
<a name="isDocument"></a>

## isDocument(value) ⇒ <code>boolean</code>
是否为document对象

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isDocument(document); // true
```
<a name="isGlobal"></a>

## isGlobal(value) ⇒ <code>boolean</code>
是否为global对象

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isGlobal(global); // true
```
<a name="isWindow"></a>

## isWindow(value) ⇒ <code>boolean</code>
是否为Window对象

**Kind**: global function  
**Returns**: <code>boolean</code> - true：是，false，否  

| Param | Description |
| --- | --- |
| value | 参数 |

**Example**  
```js
isWindow(window); // true
```
