/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

/* Comment by author. Since there are many algorithms to compute primes
   and I'm not a mathemetician, I've resorted to the internet to retrieve 
   an alogorithm. The following code is taken from pseudocode alogorithm found
   on the wikipedia entry for "primality" https://en.wikipedia.org/wiki/Primality_test#Fast%5Fdeterministic%5Ftests
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

function sumPrimes(num){
    var x=0;
    for (i=0;i<=num;i++)
    {
        if (is_prime(i))
            x+=i;
    }
    return x;
}

var x = sumPrimes(10);
console.log(x);