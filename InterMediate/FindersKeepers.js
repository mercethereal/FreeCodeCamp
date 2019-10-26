/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.*/


function findElement(arr, func) {
  var x=arr.filter(func);
  return x[0];
}

var x=findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
console.log(x);
