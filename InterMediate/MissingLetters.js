/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/
function fearNotLetter(str) {
  var stuff;
  arr=str.split('');
  for (var i=1;i<arr.length;i++)
    if (arr[i].charCodeAt()>arr[i-1].charCodeAt()+1)
       stuff=String.fromCharCode(arr[i].charCodeAt()-1);
  return stuff;
}

var x=fearNotLetter("abce");
console.log(x);