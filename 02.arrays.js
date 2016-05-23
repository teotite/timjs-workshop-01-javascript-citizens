/**
 *  Arrays
 */


// array literal
var arr = [1, 2];
//var arr2 = new Array(4)
//console.log(arr);
//console.log(arr2);
//console.log( arr[0] );
//console.log( arr2[0] );


/**
 *  element access
 */

//arr[2] = 3;
arr[ arr.length ] = 3;
//console.log(arr);

/**
 *  length
 */

//arr.a = 5;
//arr['a'] = 5;
//console.log( arr );
//console.log( arr.length );

var emptyArray = [];
emptyArray[4] = 4;
//console.log( emptyArray );
//console.log( emptyArray.length );

/**
 *  stack
 */

console.log(arr);
//console.log( arr.push(4) );
//console.log( arr.push(5) );
//console.log( arr );
//console.log( arr.pop() );
//console.log( arr.pop() );
//console.log( arr );

/**
 *  queue
 */

//console.log( arr.shift() );
//console.log( arr.shift() );
//console.log( arr );

/**
 *  sub-arrays
 */

//console.log( arr.slice(1, 3) );
//console.log( arr.splice(1, 2, 'a', 'b', 'c') );
//console.log( arr );

/**
 *  find index
 */

//console.log( arr.indexOf(4) > -1 );
//console.log( arr.includes(4) );

/**
 *  filter
 */

var arr2 = arr.filter(function(element, index, array) {
    return element > 1;
    console.log(element, index, array);
});
//console.log('filtered array', arr2);
//console.log('original array', arr);

/**
 *  iterations
 */

for (var i = 0; i < arr.length; i += 1) {
    //console.log(arr[i]);
}

var newArray = [];
arr.forEach(function(element, index, array) {
    console.log(element);
    newArray.push(element + 10);
    //arr[index] = element + 10;
});

console.log(arr);

var mappedArr = arr.map(function(element, index, array) {
    return element + 10;
});

console.log(arr);
console.log(mappedArr);

/**
 *  other useful methods
 */



/**
 *  typeof
 */

console.log( typeof arr );
console.log( Array.isArray(arr) );

function a() {
    console.log(arguments);
    console.log(arguments[1]);
    console.log(arguments.length);
    console.log( Array.isArray(arguments));
}

a(1,2,3);