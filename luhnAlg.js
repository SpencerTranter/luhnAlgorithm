var args = process.argv;
var stringArray = args[2].split('');
var numArray = toNumArr(stringArray);

var isLuhn = {

  doubleSecond: function(array){
    var newArray = [];
    for(i =  array.length - 1; i >= 0; i -= 1){
      if(i % 2 === 0){
        newArray[i] = array[i];
      } else if((array[i] * 2) > 9){
        newArray[i] = (array[i] * 2) - 9;
      } else {
        newArray[i] = array[i] * 2;
      }
    }
    return newArray;
  },

  findX: function(array){
    var additions = 0;
    array.map(function(curr){
      additions += curr;
    })
    return ((additions * 9) % 10);

  },

  isArrayLuhn: function(array){
    var additions = 0;
    array.map(function(curr){
      additions += curr;
    })
    return ((additions * 9) % 10) === 0;
  }
}

function toNumArr (stringArray){
  for(var i=0; i<stringArray.length; i++) {
    stringArray[i] = +stringArray[i];
  }
  console.log(stringArray);
  return stringArray;
}


module.exports = isLuhn;
finalArray = numArray.push(isLuhn.findX(isLuhn.doubleSecond(numArray)));
console.log(isLuhn.isArrayLuhn(isLuhn.doubleSecond(finalArray)));
//console.log(numArray);