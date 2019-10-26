/*Return the number of total permutations of the provided string that don't have repeated 
consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations 
(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) 
don't have the same letter (in this case a) repeating.

permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
permAlone("a") should return 1.
permAlone("aaab") should return 0.
permAlone("aaabb") should return 12
*/


/* modified heap's algorithm taken from wiki page - non recursive version*/
function generate(n,A){
    var c=[];
    var count=0;
    for (var i=0;i<n;i++){
        c[i]=0;
    }
    //this is the modification. this searches the string for repetitions.
    if(A.join('').search(/([a-z])\1/g)<0)
        count++;
    for (var j=0;j<n;)
        if (c[j]<j) {
            //swap elements, this could be easily functionalized
            if (j % 2 === 0) {
                var temp = A[j];
                A[j] = A[0];
                A[0] = temp;
            }
            else {
                var temp1 = A[j];
                A[j]=A[c[j]];
                A[c[j]] = temp1;
            }
            //same modification as above. could be functionalized
            if(A.join('').search(/([a-z])\1/g)<0)
                count++;
            c[j]++;
            j=0;
        }
        else{
            c[j]=0;
            j++;
        }
        return count;
    }

function permAlone(str){
    return generate(str.length,str.split(''));
}

var x = permAlone('aab');
console.log(x);
