/**
 *  Primitives
 */

// string
var str   = 'Andrei Pfeiffer';
// number
var nr    = 12;
// boolean
var bool  = true;
// null
var nil   = null;
// undefined
var undef = undefined;
// Symbol (ES6)
var symb  = Symbol('some description');

//console.log(undef);

/**
 *  variables
 */

var Nr = 23;
//console.log(Nr);

/**
 *  typeof operator
 */

//console.log( typeof str );
//console.log( typeof nr );
//console.log( typeof bool );
//console.log( typeof nil );
//console.log( typeof undef );
//console.log( typeof symb );

/**
 *  Loosely typed, Dynamic language
 */

str = 1;
var nr1 = 1;
var nr2 = '1';

// implicit type coercion
//console.log( nr1 == nr2 );

//console.log( nr1 === nr2 );

/**
 *  type casting
 */

var age = '34';
var age = '34.5';
var age = '34.5aaaaa';
var age = 'a34.5';
//age = parseInt(age);
//age = parseFloat(age);
//age = +age;
//console.log(age + 1);
//console.log(age);

var username = 1122;
//username = String(username);
//console.log('' + 0 + username);

var exists = 1;
//console.log( !exists );

/**
 *  falsey values
 */

if (1) {
    // true
} else {
    // false
}

console.log( !!'' );
console.log( !!0 );
console.log( !!false );
console.log( !!undefined );
console.log( !!null );
console.log( !!NaN );

//undefined = true;

if ( // age == undefined - poate crapa
    typeof age !== 'undefined' &&
    parseInt(age) !== NaN &&
    parseInt(age) > 0
)
{
    
}

if ( parseInt(age) ) {
    
}