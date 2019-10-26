
/*DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pairElement(str) {
var arr1=str.split('');
var arr3=[];
for (var i=0;i<arr1.length;i++){
    switch (arr1[i]){
        case 'G':
            arr3.push(['G','C']);
            break;
        case 'C':
            arr3.push(['C','G']);
            break;
        case 'A':
            arr3.push(['A','T']);
            break;
        case 'T':
            arr3.push(['T','A'])
            break;
    }
}
return arr3;
}

var x=pairElement("GCG");
console.log(x);