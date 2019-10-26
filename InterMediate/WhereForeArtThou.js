
/*Make a function that looks through an array of objects (
first argument) and returns an array of all objects 
that have matching property and value pairs 
(second argument). Each property and value pair
 of the source object has to be present in the 
 object from the collection if it is to be 
 included in the returned array.
 */
//
function sourceapart(source,collection){
    var y=false;
    for (var src in source){
        var x=false;
        for (var col in collection){
            if(src==col&&source[src]==collection[col]){
                x=true;
                break;
            }
        }
        if (x)
            y=true;
        else{
            y=false;
            break;
        }    
    }
    return y;
}


function whatIsInAName(collection, source) {    
    var temp=[];
    for (var collele in collection ){
        if (sourceapart(source,collection[collele])){
            temp.push(collection[collele]);
        }
    }
    return temp;
}


var x=whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
console.log(x);