//jshint esversion: 7

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let numsArr = [3,5,7,15];

let bitBatBotOrNot = (n) => {
   //your code goes here
   let result = "";
   if(n % 3 == 0){
     result = `${result}Bit`;
  }  if(n % 5 == 0){
      result = `${result}Bat`;
  }  if(n % 7 == 0){
       result = `${result}Bot`;
  } else if(n % 3 !== 0 && n % 5 !==0 && n % 7 !== 0) {
       result = `${result}Not`;
  }
   console.log(result);
};

let findAllbitBatBotOrNots1 = (arr) => {
  let resultArr = arr.map((elem) => {
    bitBatBotOrNot(elem);
  });
};

let findAllbitBatBotOrNots2 = (arr) => {
   let result, resultArr = [];
   for (var i = 0; i < arr.length; i++){
     result = bitBatBotOrNot(arr[i]);
     resultArr.push(`${arr[i]}: ${result}`);
   }
   return resultArr;
};

let findAllbitBatBotOrNots3 = (arr) => {
   resultArr = [];
   for (var item of arr) {
     result = bitBatBotOrNot(item);
     resultArr.push(`${arr[item]}: ${result}`);
   }
   return resultArr;
};

let findAllbitBatBotOrNots4 = (arr) => {
   //your code goes here
   //use forEach method
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);
