require('mocha');
require('should');
var format = require('./index.js');

describe('format', function () {
  it('should format the given string:', function () {
    format.date(new Date,'yyyy-MM-dd hh:mm:ss').should.match(/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/)
    format.printf('%% %s %d %f','hingsir',99,1.35).should.eql('% hingsir 99 1.35')
    format.thousands('12345678.9999').should.eql('12,345,678.999,9')
    format.bankCard('6222021********1245').should.eql('6222 021* **** ***1 245')
    format.mobilePhone('13812345678','-').should.eql('138-1234-5678')
    format.template('name\n{{users.0.name}}\n{{users.1.name}}',{
        users:[
            {name:'hingsir'},{name:'chexingyou'}
        ]
        }).should.eql('name\nhingsir\nchexingyou')
  });

});