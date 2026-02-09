// Maths

// The following math operations are supported:

//     Addition +,
//     Subtraction -,
//     Multiplication *,
//     Division /,
//     Remainder %,
//     Exponentiation **.

// let x = 1, y = 3;

alert( y - x ); // 2, binary minus subtracts values

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

// No effect on numbers
// let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let x = 2 * 2 + 1;

alert( x ); // 5

// let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

// The list of operators:

//     AND ( & )
//     OR ( | )
//     XOR ( ^ )
//     NOT ( ~ )
//     LEFT SHIFT ( << )
//     RIGHT SHIFT ( >> )
//     ZERO-FILL RIGHT SHIFT ( >>> )
