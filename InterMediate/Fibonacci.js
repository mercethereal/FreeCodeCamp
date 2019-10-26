/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/
var fibonacci=function(i){
    return i < 2 ? i : fibonacci(i-1)+fibonacci(i-2);
};

var sumFibs = function (n) 
{ 
    var x=0;
    var y=0;
    for (var i=0;i<=n;i++){
        if (x<=n){
            x = fibonacci(i);
            if (x%2==1 && x<=n)
                y+=x;
        }
        else
            break;
    }
    return y;
}; 

var x=sumFibs(1000);
console.log(x);


 