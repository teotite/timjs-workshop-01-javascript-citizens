/**
 *  Functions
 */

function declaration() {
    //console.log('function declaration');
}
declaration();
 
//var expression = function() {
    //console.log('anonymus function expression');
//};

expression = function funcName() {
    //funcName();
//    console.log('named function expression');
};
expression();
//funcName();

setTimeout(function funcInTimeout() {
//    err;
}, 100);

// IIFE - Immediate Invoke Function Expression
(function() {
//    console.log('IIFE');
}) ();

/**
 *  declaration vs expression
 */


/**
 *  methods
 */

var obj = {
    method1: function() {
//        console.log('method');
    },
    method2: function() {
//        console.log('method');
    }
};

obj.method1();

/**
 *  return statement
 */
function foo() {
    return;
    return 'second';
    return 'first';
    console.log( foo() );
}
//console.log( foo() );

/**
 *  constructor
 */

function User(name) {
    var temp = '';
    
    this.name = name;
    this.getName = function() {
        return this.name;
    };
}

var user1 = User('Gigel');
var user2 = new User('Maricica');

//console.log(user1);
//console.log(name);
//console.log(getName());
//console.log(user2);

/**
 *  arrows
 */

var arrow = () => {
//    console.log('arrow function');
};
arrow();

var arrow = () => 1;
var arrow = () => {return 1};
//console.log( arrow() );

var arrow = param1 => 1;
var arrow = (param1, param) => 1;

//console.log( arrow() );

var arrow = () => { a: 1 };
var arrow = () => ({ a: 1 });
//console.log( arrow() );

/**
 *  how to use functions
 */

//var APP = ( function {
//    
//    // init
//    
//    return {
//        
//    };
//    
//    function prv() {}
//    
//}) ();

/**
 *  first-class citizen
 */

