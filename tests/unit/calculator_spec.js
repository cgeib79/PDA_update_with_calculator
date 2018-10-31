var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  it('it should be able to do addition', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal);
  })

   it('it should be able to do subtraction', function () {
    calculator.previousTotal = 7
    calculator.subtract(3)
    assert.equal(4, calculator.runningTotal);
   })

   it('it should be able to do multiplication', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal);
   })

   it('it should be able to do division', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal);
   })

    it('it should be able to do concatenation of multiple button clicks', function)
        calculator.numberClick(4)
        calculator.numberClick(8)
        assert.equal(48, calculator.runningTotal);
    })

    it('it should be able to chain multiple operations together', function)
        calculator.numberClick(4)
        calculator.numberClick('+')
        calculator.numberClick(8)
        calculator.numberClick('-')
        calculator.numberClick(2)
        calculator.numberClick('*')
        calculator.numberClick(10)
        calculator.numberClick('/')
        calculator.numberClick(5)
        assert.equal(10, calculator.runningTotal);

    it('it clear the running total without affecting the calculation', function)
        calculator.numberClick(4)
        calculator.numberClick('+')
        calculator.numberClick(4)
        calculator.clearClick()
        calculator.numberClick('=')
        assert.equal(4, calculator.runningTotal);
});
