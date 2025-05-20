let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log("2" - 1 * 1);
// console.log("2" - 1 + 1);

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// ____________________________________________________________________________________________________________________________________________________

/*
Conversions:-
  1. to Premitive
  
    a.  What is a Primitive in JavaScript?
        A primitive is a basic, non-object value. These are immutable and represent simple data.
        ✅ JavaScript Primitive Types:
        string
        number
        boolean
        null
        undefined
        symbol
        bigint
        Everything else (like arrays, objects, functions, etc.) is not primitive — they are objects.
  
    b.  JavaScript uses the ToPrimitive abstract operation when it needs to convert an object to a primitive value, like during:
        String concatenation
        Arithmetic (+, -, etc.)
        Comparison (<, ==, etc.)
  
    c.  Step 1	Call valueOf()
        Step 2	If not primitive, call toString()
        Step 3	If still not primitive → TypeError
        
  2. to Number
  
    a.  | Value       | Result |
        | ----------- | ------ |
        |   null      |   0    |
        |   undefined |   NaN  |
        |   true      |   1    |
        |   false     |   0    |
        |   ""        |   0    |
        |   "123"     |   123  |
        |   "123abc"  |   NaN  |
        |   []        |   0    |
        |   [1]       |   1    |
        |   [1,2]     |   NaN  |
        |   {}        |   NaN  |
        
  3. to String
  
    a.  |   Value     |        Result        |
        | ----------- | -------------------- |
        |   null      |   "null"             |
        |   undefined |   "undefined"        |
        |   true      |   "true"             |
        |   false     |   "false"            |
        |   123       |   "123"              |
        |   []        |   ""                 |
        |   [1]       |   "1"                |
        |   [1,2]     |   "1,2"              |
        |   {}        |   "[Object Object]"  |
  
  4. to Boolean
  
    a.  Falsy Values:
        false
        0, -0
        "" (empty string)
        null
        undefined
        NaN
  
        Everything else is truthy.

Common Operations Using Type Conversion
  ➕ + operator:
      If one operand is a string → performs string concatenation
      Else → performs numeric addition

  ➖ -, *, /, %:
      Always try to convert operands to numbers

  == (Loose equality):
      Performs type coercion if types differ.

  === (Strict equality):
      No type coercion.

  || (OR):
      Returns the first truthy value.

  && (AND):
      Returns the first falsy value.
*/
