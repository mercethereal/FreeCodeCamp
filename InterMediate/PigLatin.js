/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
var arr1=str.split('');
//check if first letter is consonant
//if so, advance the for loop until you encounter a vowel
//this will retrieve consonant (or consonant cluster) to start a word
if (!/[aeiou]/.test(arr1[0])){
  for(var i=1;i<arr1.length;i++){
    if(/[aeiou]/.test(arr1[i])){
      //encountered a vowel, now move consonant or consonant cluster
      //to the end of the array
      var temp=arr1.slice(0,i);
      var temp2=arr1.slice(i,arr1.length);
      arr1=temp2.join('')+temp.join('')+'ay';
      break;
    }
  }
}
else 
//we know it is a vowel, so just append "way" to the end;
  arr1=arr1.join('')+'way';
return arr1;
}

x=translatePigLatin("consonant");
console.log(x);