require('mocha');
require('should');
var format = require('./index.js');
console.log(format.printf('%% %s %d %f','hingsir',99,1.35))
describe('format', function () {
  it('should format the given string:', function () {
    format.formatDate(new Date,'yyyy-MM-dd hh:mm:ss').should.match(/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/)
    format.printf('%% %s %d %f','hingsir',99,1.35).should.eql('% hingsir 99 1.35')
  });
  it('should throw an error:', function () {
      (function () {
      }).should.throw('expected a string.');
    });
});