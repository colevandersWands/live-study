# Live Study 

## /exercises/functions/examples

> 6/5/2020, 3:08:10 PM 

[../REVIEW.md](../REVIEW.md)

- [/declaration-vs-execution.js](#declaration-vs-executionjs) - no assertions
- [/parameters-and-arguments.js](#parameters-and-argumentsjs) - no assertions
- [/return-values.js](#return-valuesjs) - pass
- [/scope.js](#scopejs) - no assertions
- [/tracing-execution.js](#tracing-executionjs) - pass

---

## /declaration-vs-execution.js

> no assertions
>
> [review source](./declaration-vs-execution.js)

```txt
LOG : I exist!
LOG : I exist!
LOG : I exist!
```

```js
// Be sure to study this in JS Tutor or debugger

// DECLARING a function creates it in memory
//  without executing the code inside the curly braces
function iExist() {
  console.log('I exist!');
}

// EXECUTING a function will run the code in it's body
// you can do this as many times as you like
iExist();
iExist();
iExist();

// there are 3 logs, and one console.log in the source code
//  console.log is not run when the function is DECLARED
//  but it is run each time the function is EXECUTED

```

[TOP](#live-study)

---

## /parameters-and-arguments.js

> no assertions
>
> [review source](./parameters-and-arguments.js)

```txt
LOG : string  4
LOG : number  4
LOG : string  4.0
LOG : boolean  true
LOG : object  null
LOG : undefined  undefined
LOG : undefined  undefined
```

```js
// PS. study this in JS Tutor!

// functions allow you to reuse the same code with different values
//  PARAMETERS declare variables available inside your function
//  they are assigned a value when you EXECUTE the function
function logTheParameter(parameter) {
  console.log(typeof parameter, parameter);
}

// ARGUMENTS assign values to parameters when functions are EXECUTED
// you can pass arguments directly as values
logTheParameter('4');
logTheParameter(4.0);
logTheParameter('4.0');

// or indirectly using variables
const arg1 = true;
logTheParameter(arg1);

const arg2 = null;
logTheParameter(arg2);

const arg3 = undefined;
logTheParameter(arg3);

// if no argument is passed, parameters will be undefined
logTheParameter();

```

[TOP](#live-study)

---

## /return-values.js

> pass
>
> [review source](./return-values.js)

```txt
+ PASS : Assertion 1
+ PASS : Assertion 2
+ PASS : Assertion 3
+ PASS : Assertion 4
+ PASS : Assertion 5
```

```js
// PS. study this in JS Tutor!

// RETURN VALUES allow you to send values from functions to global scope
function findTheType(param) {
  return typeof param;
  console.log('nothing after a return statement is executed!');
}

// to save return values for later, assign them to a variable
const returned1 = findTheType(4.0);
const isTrue1 = returned1 === 'number';
console.assert(isTrue1, 'Assertion 1');

const returned2 = findTheType('4.0');
const isTrue2 = returned2 === 'string';
console.assert(isTrue2, 'Assertion 2');

const arg3 = null;
const returned3 = findTheType(arg3);
const isTrue3 = returned3 === 'object';
console.assert(isTrue3, 'Assertion 3');

const arg4 = undefined;
const returned4 = findTheType(arg4);
const isTrue4 = returned4 === 'undefined';
console.assert(isTrue4, 'Assertion 4');

const returned5 = findTheType();
const isTrue5 = returned5 === 'undefined';
console.assert(isTrue5, 'Assertion 5');

```

[TOP](#live-study)

---

## /scope.js

> no assertions
>
> [review source](./scope.js)

```txt
LOG : -- example 1 --
LOG : string  number
LOG : -- example 2 --
LOG : string  string
LOG : -- example 3 --
LOG : string  object
```

```js
// PS. study this in JS Tutor!

// variables declared in a function body are SCOPED to that function
//  this includes parameters and locally declared variables
function findTheType(param) {
  const result = typeof param;
  return result;
}

// what happens if you uncomment the console.logs below?

console.log('-- example 1 --');
const arg1 = 5;
const returned1 = findTheType(arg1);
console.log(typeof returned1, returned1);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 2 --');
const arg2 = 'hi!';
const returned2 = findTheType(arg2);
console.log(typeof returned2, returned2);
// console.log(typeof param, param);
// console.log(typeof result, result);

console.log('-- example 3 --');
const arg3 = null;
const returned3 = findTheType(arg3);
console.log(typeof returned3, returned3);
// console.log(typeof param, param);
// console.log(typeof result, result);

```

[TOP](#live-study)

---

## /tracing-execution.js

> pass
>
> [review source](./tracing-execution.js)

```txt
+ PASS : Assertion 1
+ PASS : Assertion 2
```

```js
// PS. Study this in JS Tutor and the debugger

// 0: Creation Phase, function is declared
function flipper(param1, param2) {
  // 2 and 9: a return value is generated
  return param2 + param1;
  // 3 and 10: global result variable is declared & assigned
}

// 1: flipper is executed, creating a new frame
//    parameters are assigned values using 'a' & 'b'
const result1 = flipper('a', 'b');
// 4: the value of result1 is compared to the expected value
const isTrue1 = result1 === 'ba';
// 5: the first assertion is evaluated
console.assert(isTrue1, 'Assertion 1');

// 6: variable is declared & assigned
const arg1 = 'x';
// 7: variable is declared & assigned
const arg2 = 'y';

// 8: flipper is executed, creating a new frame
//    parameters are assigned values from arg1 & arg2
const result2 = flipper(arg1, arg2);

// 11: the value of result2 is compared to the expected value
const isTrue2 = result2 === 'yx';
// 12: the second assertion is evaluated
console.assert(isTrue2, 'Assertion 2');



```

[TOP](#live-study)

