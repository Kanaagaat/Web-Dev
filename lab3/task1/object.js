// let user = {     // an object
//   name: "John",  // by key "name" store value "John"
//   age: 30        // by key "age" store value 30
// };



// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

delete user.age;

// let user = {
//   name: "John",
//   age: 30
// };

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")


function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

// let user = makeUser("John", 30);
// alert(user.name); // John



let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference





let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true



// let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

