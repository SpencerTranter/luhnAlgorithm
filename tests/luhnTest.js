var assert = require("chai").assert;
var isLuhn = require("../luhn");

describe("Luhn", function() {
  it("should return true if every second number is doubled", function() {
    var number = [1234];
    var doubledSecond = doubleSecond(number);
    var result = false;
    for (int i = 1; i < number.length; i + 2){
      var result = (doubledSecond[1] === (number[1] * 2) && doubledSecond[3] === (number[3] * 2);
    }
    assert.isTrue(result);
  });

  it("should return false if every second number is not doubled", function() {
    var number = [1234];
    var result = false;
    for (int i = 1; i < number.length; i + 2){
      var result = (doubledSecond[1] === (number[1] * 2) && doubledSecond[3] === (number[3] * 2);
    }
    assert.isTrue(result);
  });

  it("should return true if every item in the array is less than 10", function() {
    var moreArray = [5, 10, 6, 16];
    var lessArray = lessThanTen(moreArray);
    var result = true;
    for (i = 0; i < lessArray.length; i++){
      if (lessArray[i] >= 10){
        result = false;
      }
    }
    assert.isTrue(result);
  }

  it("should return false if every item in the array is not less than 10", function() {
   var moreArray = [5, 10, 6, 16];
    var result = true;
    for (i = 0; i < moreArray.length; i++){
      if (moreArray[i] >= 10){
        result = false;
      }
    }
    assert.isTrue(result);
    }

  it("should return true if x equals every number in array added then multipied by 9 and modulo 10", function() {
    var x = 3;
    var array = [7,9,9,4,7,6,9,7,7,2];
    assert.equals(x, findX(array));
  });

   it("should return true if x does not equal every number in array added then multipied by 9 and modulo 10", function() {
    var x = 4;
    var array = [7,9,9,4,7,6,9,7,7,2];
    assert.equals(x, findX(array));
  });

   it("should return true if the array fits in the luhn algorithm aka the combined numbers modulo 10 equal 0", function){
    var luhnArray = [7,9,9,4,7,6,9,7,7,2,3];
    assert.isTrue(isLuhn(luhnArray));
   }

    it("should return false if the array does not fit in the luhn algorithm aka the combined numbers modulo 10 do not equal 0", function){
    var notLuhnArray = [7,9,9,4,7,6,9,7,7,2];
    assert.isTrue(isLuhn(luhnArray));
   }
});