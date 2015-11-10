# regular-format[![npm version](https://badge.fury.io/js/regular-format.svg)](https://badge.fury.io/js/regular-format)

> A fomat tool implemented by regular expression

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
* formatDate()
```
format.formatDate(new Date,'yyyy-MM-dd hh:mm:ss')
```
* printf()
```
format.printf('%% %s %d %f','hingsir',99,1.35)
```
* formatTemplate()
```
var tpl = 'name\n{{users.0.name}}\n{{users.1.name}}'
var ret = format.formatTemplate(tpl,{
    users:[
        {name:'hingsir'},{name:'chexingyou'}
    ]
})
console.log(ret)
```
## License

Copyright © 2015 hingsir
Released under the MIT license.

