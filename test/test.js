const multiply = require('./multiply.js')
var chai = require('chai');

describe('Testing multiplication', function(){
    it('First test', function() {
        chai.assert.equal(multiply(3, 3), 9);  
      });
      it('Second test', function() {
        chai.assert.equal(multiply(4, 5), 20);  
      });
})

