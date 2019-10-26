/*Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided 
above. The area code is required. If the country code is provided, you must confirm that the country code 
is 1. Return true if the string is a valid US phone number; otherwise return false.*/

/*telephoneCheck("555-555-5555"); //should return a boolean.
telephoneCheck("1 555-555-5555"); //should return true.
telephoneCheck("1 (555) 555-5555"); //should return true.
telephoneCheck("5555555555"); // should return true.
telephoneCheck("555-555-5555"); //should return true.
telephoneCheck("(555)555-5555"); //should return true.
telephoneCheck("1(555)555-5555"); //should return true.
telephoneCheck("555-5555");  //should return false.
telephoneCheck("5555555"); //should return false.
telephoneCheck("1 555)555-5555"); //should return false.
telephoneCheck("1 555 555 5555"); //should return true.
telephoneCheck("1 456 789 4444"); //should return true.
telephoneCheck("123**&!!asdf#"); //should return false.
telephoneCheck("55555555");  //should return false.
telephoneCheck("(6505552368)"); // should return false
telephoneCheck("2 (757) 622-7382"); // should return false.
telephoneCheck("0 (757) 622-7382"); // should return false.
telephoneCheck("1- (757) 622-7382"); // should return false
telephoneCheck("2 757 622-7382"); // should return false.
telephoneCheck("10 (757) 622-7382"); // should return false.
telephoneCheck("27576227382"); // should return false.
telephoneCheck("(275)76227382"); // should return false.
telephoneCheck("2(757)6227382"); // should return false.
telephoneCheck("2(757)622-7382"); // should return false.
telephoneCheck("555)-555-5555"); // should return false.
telephoneCheck("(555-555-5555"); // should return false.
telephoneCheck("(555)5(55?)-5555"); // should return false.*/

function telephoneCheck(str) {
  // Good luck!
  var spaceordashoptional='[-\\s]?'; //space or dash optional between digit groups 303-454-5454 or 303 454 5454 or 3034545454
  var firstgroup='^(1'+spaceordashoptional +')?'; //first group 1 and whitespace group OPTIONAL '1 ' OR '1' OR '1-'
  var secondgroup='(\\(\\d{3}\\)|\\d{3})'; // should match 3 digits and optional (). (303) or 303
  var thirdgroup='\\d{3}'; //3 digit middle group
  var fourthgroup='\\d{4}$'; //4 digit final group
  //var thirdgroup ''
  var regex = new RegExp(firstgroup+spaceordashoptional+secondgroup+spaceordashoptional+thirdgroup+spaceordashoptional+fourthgroup);
  //var x=regex.test(str);
  var y=str.match(regex);
  //console.log(y); debug line
  //return (console.log(regex.test(str))); debug line
  return regex.test(str);
}





