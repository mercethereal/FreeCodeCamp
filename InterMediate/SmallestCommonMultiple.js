
/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.

*/

/*
    is_prime is modified from the pseudocode in the wikipedia entry 
    "primality" https://en.wikipedia.org/wiki/Primality_test#Fast%5Fdeterministic%5Ftests
*/
function is_prime(n){
    if (n <= 1)
        return false;
    else if (n <= 3)
        return true;
    else if (n % 2 === 0 || n % 3 === 0)
        return false;
    var i=5;
    while (i*i <= n){
        if (n % i === 0 || n % (i + 2) === 0)
            return false;
        i +=6;
    }
    return true;
}

/*
    PrimeFactors returns an array containing an array of any given number, n
*/
var primeFactors = function (n){
    var arr=[];
    if (n>1){
        if (is_prime(n))
            arr.push(n);
        else
            for (var j=2;j<=n/2;j++){
                k=n;
                while (k%j===0){
                    if (is_prime(j)){
                        arr.push(j);
                    }
                        k=k/j;                
                }}}return arr;};

/*
mostSeq and mostseq2 are used to return a count of the most times an element
appears in an array sequentially */

function mostseq2 (k,arr){
    var count=0;
    for (var i=0;i<arr.length;i++)
        if (arr[i]==k)
            count++;
    return count;
}


function mostseq(arr)
{  var final=[];
    for (var i=0;i<arr.length;i++){
        for (var j=0;j<arr[i].length;j++){
            var m=arr[i][j];
            if (final.indexOf(m)<0){
                var z=0;
                for (var k=0;k<arr.length;k++){
                    count=mostseq2(m,arr[k]);
                    if (count>z)
                        z=count; 
                }
                for (var l=0;l<z;l++)
                    final.push(m);
            }
       }
    }
    return final;
}

function smallestCommons(arr) {
  //primearr is a 2 dimensional array containing all of the 
  //prime factors from each element in arr
  var primearr=[];
  var j,k=0;    
  if (arr[0]>arr[1]){
    j=arr[1];
    k=arr[0];
  }
  else{
    j=arr[0];
    k=arr[1];
  }
for (var i=j;i<=k;i++)
    if (i>1)
        primearr.push(primeFactors(i)); 
  
  //create a new, 1 dimensional array containing the highest occurrence of any prime factor in the primeFactors
  //2 dimensional array
  //[2] or [2,2,] or [2,2,2] return [2,2,2] 
var final = mostseq(primearr);
console.log(primearr);
console.log(final);
return final.reduce(function(a,b){
    return a*b;
}
);
}

var x =smallestCommons([23,18]);
console.log(x);

