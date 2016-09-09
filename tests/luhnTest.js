var assert = require("chai").assert;
var isLuhn = require("../luhnAlg");

describe("Luhn", function() {
  it("should return true if every second number is doubled or doubled then subtracted by 9", function() {
    var number = [7,9,9,2,7,3,9,8,7,1];
    var result = [7,9,9,4,7,6,9,7,7,2];
    assert.deepEqual(result, isLuhn.doubleSecond(number));
  });


  it("should return false if every second number is not doubled or doubled then subtracted by 9", function() {
    var number = [7,9,9,2,7,3,9,8,7,1];
    var result = [7,9,9,4,7,6,9,7,7,2];
    assert.notEqual(result, isLuhn.doubleSecond(number));
  });

  it("should return true if x equals every number in array added then multipied by 9 and modulo 10", function() {
    var x = 3;
    var array = [7,9,9,4,7,6,9,7,7,2];
    assert.equal(x, isLuhn.findX(array));
  });

   it("should return true if x does not equal every number in array added then multipied by 9 and modulo 10", function() {
    var x = 4;
    var array = [7,9,9,4,7,6,9,7,7,2];
    assert.notEqual(x, isLuhn.findX(array));
  });

   it("should return true if the array fits in the luhn algorithm aka the combined numbers modulo 10 equal 0", function(){
    var luhnArray = [7,9,9,4,7,6,9,7,7,2,3];
    assert.isTrue(isLuhn.isArrayLuhn(luhnArray));
   });

    it("should return false if the array does not fit in the luhn algorithm aka the combined numbers modulo 10 do not equal 0", function(){
    var notLuhnArray = [7,9,9,4,7,6,9,7,7,2];
    assert.isFalse(isLuhn.isArrayLuhn(notLuhnArray));
   });
});