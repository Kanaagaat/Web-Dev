result = a || b;


alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

alert( !true ); // false
alert( !0 ); // true