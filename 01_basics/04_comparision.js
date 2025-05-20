// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

// ___________________________________________________________________________________________________________________________________________________

/*
eg.:-

  1.  [] == false
        [] → ToPrimitive → ""
        false → 0, "" → 0
        Final: 0 == 0 → true

  2.  Rule Breakdown (from ECMAScript spec):
        If one operand is a string and the other is a number → convert the string to a number.
        If one operand is a boolean → convert the boolean to a number (true → 1, false → 0).
        If both are objects → try to ToPrimitive and then compare.
        If one is null and the other is undefined → true.
        Otherwise → false.


*/
