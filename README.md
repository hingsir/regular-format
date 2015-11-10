# regular-format[![npm version](https://badge.fury.io/js/regular-format.svg)](https://badge.fury.io/js/regular-format)

> A format tool implemented by regular expression

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install regular-format --save
```

## Usage

require the format module
```
var format = require('regular-format')
```
* printf() c语言printf
```
format.printf('%% %s %d %f','hingsir',99,1.35)
```
* date() 格式化日期
```
format.formatDate(new Date,'yyyy-MM-dd hh:mm:ss')
```
* template() 字符串模版，支持数组
```
var tpl = 'name\n{{users.0.name}}\n{{users.1.name}}'
var ret = format.formatTemplate(tpl,{
    users:[
        {name:'hingsir'},{name:'chexingyou'}
    ]
})
console.log(ret)
```
* thousands() 数字千分位分隔
```js
format.thousands('12345678.9999');
//=> 12,345,678.999,9
```
* bankCard() 银行卡号空格
```js
format.bankCard('6222021********1245');
//=> 6222 021* **** ***1 245
```
* mobiblePhone() 11位手机号码格式化
```js
format.mobilePhone('13812345678','-');
//=> 138-1234-5678
```
## License

Copyright © 2015 hingsir
Released under the MIT license.

