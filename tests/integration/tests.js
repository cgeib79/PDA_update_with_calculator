var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2') //to.eventually is like event listener
  })


    it('the number buttons update the display of the running total', function(){
        running_total = element(by.css('#running_total'));
            element(by.css('#number1')).click();
            element(by.css('#operator_add')).click();
            element(by.css('#number2')).click();
            element(by.css('#operator_add')).click();
            expect(running_total.getAttribute('value')).to.eventually.equal('3')
    })


    it(' should have arithmetical operations update the display with the result of the operation', function(){
        running_total = element(by.css('#running_total'));
            element(by.css('#number1')).click();
            element(by.css('#operator_add')).click();
            element(by.css('#number2')).click();
            element(by.css('#operator_multiply')).click();
            element(by.css('#number3')).click();
            element(by.css('#operator_divide')).click();
            element(by.css('#number3')).click();
            element(by.css('#operator_equals')).click();
            expect(running_total.getAttribute('value')).to.eventually.equal('3')
    })


    it('should have buttons chaining multiple operations together', function(){
               running_total = element(by.css('#running_total'));
                    element(by.css('#number1')).click();
                    element(by.css('#operator_add')).click();
                    element(by.css('#number2')).click();
                    element(by.css('#operator_multiply')).click();
                    element(by.css('#number3')).click();
                    element(by.css('#operator_divide')).click();
                    element(by.css('#number3')).click();
                    element(by.css('#operator_equals')).click();
                    expect(running_total.getAttribute('value')).to.eventually.equal('3')
    })


    it('should return output as expected for a range of numbers - positive example', function(){
         running_total = element(by.css('#running_total'));
            element(by.css('#number1')).click();
            element(by.css('#operator_add')).click();
            element(by.css('#number2')).click();
            element(by.css('#operator_equals')).click();
            expect(running_total.getAttribute('value')).to.eventually.equal('3')
    })


    it('should return output as expected for a range of numbers - positive example', function(){
         running_total = element(by.css('#running_total'));
            element(by.css('#number1')).click();
            element(by.css('#operator_subtract')).click();
            element(by.css('#number2')).click();
            element(by.css('#operator_equals')).click();
            expect(running_total.getAttribute('value')).to.eventually.equal('-1')
    })

    it('It should provide the output "Not a number" if a number is divided by zero', function(){
        running_total = element(by.css('#running_total'));
        element(by.css('#number1')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number0')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('No a number')
    })
});