
/*Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].*/
function steamrollArray(arr,x) {
  // I'm a steamroller, baby
  x = (typeof x !== 'undefined') ?  x : [];
  for (var i in arr)
    if (!Array.isArray(arr[i]))
      x.push(arr[i]);
    else
      steamrollArray(arr[i],x);
  return x;
}

var x=steamrollArray([1, [2], [3, [[4]]]]);
console.log(x);

//console.log(process.versions);
