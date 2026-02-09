let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)


// The result of a ?? b is:

//     if a is defined, then a,
//     if a isn’t defined, then b.


let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder