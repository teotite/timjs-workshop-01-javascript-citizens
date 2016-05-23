/**
 *  Objects
 */

var age = 34

// object literal
var me = {
	'first Name': 'Andrei',
	lastName : 'Pfeiffer',
	age,
	skills: [
		{ name: 'html', level: 8 },
		{ name: 'css',  level: 7 },
		{ name: 'js',   level: 6 },
	],
	getAge: function() {
		return this.age;
	}
	//getAge() {
	//	return this.age;
	//}
};


/**
 *  usage
 */



/**
 *  property access
 */


/**
 *  properties with spaces
 */

var name = "Name";
//console.log( me[ 'first ' + name ] );
me.skills[1].name = 'css 3';
//console.log( me.skills[1].name );

/**
 *  properties as expressions
 */



/**
 *  enhanced literals (ES6)
 */



/**
 *  delete property
 */

//delete me.skills;
//console.log(me);

/**
 *  property descriptors
 */

//console.log( Object.getOwnPropertyDescriptor(me, 'age') );

Object.defineProperty(me, 'age', {
//	configurable: false, // <=> immutable
});
me.age = 55; // <=> immutable

//console.log( Object.getOwnPropertyDescriptor(me, 'age') );

Object.defineProperty(me, 'age', {
//	writable: false
});
me.age = 100; // <=> immutable

//Object.defineProperty(me, 'age', {
//	writable: true // <=> immutable
//});
//Object.defineProperty(me, 'age', {
//	configurable: true // <=> immutable
//});

//console.log( Object.getOwnPropertyDescriptor(me, 'age') );

//console.log( me.age );

Object.defineProperty(me, 'getAge', {
//	enumerable: false // <=> immutable
});
//console.log( Object.keys(me) );

/**
 *  freezing
 */

Object.freeze(me);
delete me.skills;
me.newProp = 'new';
me.skills[1].name = 'CSSSS';
me.skills.push('new elem');
me.skills = [1, 2, 3];
//console.log(me);

//console.log( Object.isFrozen(me) );

/**
 *  iterations
 */

//console.log( Object.keys(me) );
Object.keys(me).forEach(function(prop) {
	console.log(prop, me[prop]);
});

/**
 *  JSON - JavaScript Object Notation
 */
var user = { name: 'Andrei', age: 34, };
//console.log( JSON.stringify(user) )
var json = '{"name":"Andrei","age":34}';
//console.log( JSON.parse(json) );

/**
 *  null
 */

var str = '';
var nr = 0;
var obj = null;

// if ( obj ) {}

//me = null;

//console.log( '12345'.length );

//console.log(me.toString());