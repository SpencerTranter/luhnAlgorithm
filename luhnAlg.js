var luhn = {


  doubleSecond: function(array){
    for(i = 0; i < array.length; i + 2){
      if(array[i] * 2 > 9){
        array[i] = (array[i] * 2) - 9;
      }
    }
    return array;
  },

  lessThanTen: function(array){

  }

  findX: function(array){

  }

  isLuhn: function(array){

  }



}
module.exports = isPalindrome;