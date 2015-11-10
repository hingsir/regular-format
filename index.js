;
(function(global, undefined) {
    var format = {}
    format.printf = function(format, args) {
        var i = 0,
            ret,
            args = [].slice.call(arguments).slice(1)
        var o = {
            '%d': parseInt,
            '%f': parseFloat,
            '%s': function(obj) {
                return obj + ''
            }
        }
        var _parse = function(type) {
            return function(obj) {
                return o[type](obj)
            }
        }
        ret = format.replace(/%[dfs%]/g, function($) {
            if ($ == '%%') {
                return '%'
            }
            if (i == args.length) {
                return $
            }
            return _parse($)(args[i++])
        })
        return ret
    }

    format.date = function(date, format) {
        var o = {
                'yyyy': date.getFullYear(),
                'MM': date.getMonth() + 1,
                'dd': date.getDate(),
                'hh': date.getHours(),
                'mm': date.getMinutes(),
                'ss': date.getSeconds()
            },
            ret
        ret = format.replace(/yyyy|MM|dd|hh|mm|ss/g, function($) {
            return ('0000' + o[$]).slice(-$.length)
        })
        return ret
    }

    format.template = function(template, data) {
        return template.replace(/\{\{([^\}]*)\}\}/g, function($, $1) {
            var keys = $1.split('.'),
                temp = data
            for (var i = 0; i < keys.length; i++) {
                temp = temp[keys[i]]
            }
            return temp
        })
    }

    format.thousands = function(number) {
        return number.replace(/^(\d+)(\.\d+)?$/, function($, $1, $2) {
            return $1.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + ($2 ? $2.replace(/\d{3}/g, '$&,').replace(/,$/, '') : '')
        })
    }

    format.bankCard = function(bankCard) {
        return bankCard.replace(/.{4}/g, '$& ')
    }

    format.mobilePhone = function(mobilePhone, separator) {
        separator = separator || " ";
        return mobilePhone.replace(/\d{3,4}(?=(\d{4})+$)/g, "$&" + separator)
    }

    if (typeof module !== 'undefined' && module && typeof module.exports !== 'undefined') {
        module.exports = format
    } else {
        global.regularFormat = format
    }
})(this);
