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
var format = require('format.js')
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
var tmpl = 'name : ${user.name}, home :${user.address.home},work at :${user.address.work}'
var user = {
    id: '1000',
    name: 'hingsir',
    address: {
        home: 'china',
        work: 'ZhuHai'
    }
}
```
## License

Copyright © 2015 hingsir
Released under the MIT license.

