var userList = [];

$(document).ready(() => {
    init();
    addUser('George',  23);
    addUser('Adriana', 13);
    addUser('Mihai',   19);
});

function init() {
    $('form').on('submit', e => e.preventDefault());

    $('#new-user').on(   'submit', e => newUser());
    $('#count-users').on('click',  e => countUsers());
    $('#sort-by-age').on('click',  e => sortUsers());
    $('#level-up').on(   'click',  e => upUsers());
}

function countUsers() {
    var minAge = parseInt($('#min-age').val());
    var minAgeUsers = userList.filter( function( element ) {
        console.log(element.age);
        return element.age >= minAge;
    });
    console.log( minAgeUsers.length );
    err;
}

function sortUsers() {
    var sortedList = userList.sort((user1, user2) => {
        return user1.age - user2.age;
    });
    console.log(sortedList);
}

function upUsers() {
    userList.map( user => {
        return user.age += 1;
    });
}

function newUser() {
    var name = $('#name').val(),
        age  = parseInt($('#age').val());

    if (!name || !age) {
        return alert('Both Name & Age are required');
    }

    $('#age').val('');
    $('#name').val('').focus();

    addUser(name, age);
}

function addUser(name, age) {

    //var user = new User(name, age);
    var user = getUser(name, age);

    // create a user object & store it
    userList.push(user);
//    userList.push( {nameKey: name, ageKey: age} );
    
//    var lastUser = userList[userList.length - 1];
//    var content = '<strong>'+lastUser.name+'</strong> ('+lastUser.age+')'; 
    var content = '<strong>'+name+'</strong> ('+age+')';

    $('<li class="list-group-item"></li>')
        .html(content)
        .appendTo( $('ol') );
}

function getUser(name, age){
    return {
        name,
        age
    };
}

function User(name, age) {
    this.name = name;
    this.age  = age;
}