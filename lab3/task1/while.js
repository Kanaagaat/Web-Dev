

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}



// let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);



for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

// let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}



let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

