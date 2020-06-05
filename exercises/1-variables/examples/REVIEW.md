# Live Study 

## /exercises/variables/examples

> 6/5/2020, 3:08:10 PM 

[../REVIEW.md](../REVIEW.md)

- [/const-vs-let.js](#const-vs-letjs) - syntaxError
- [/declaration-and-assignment.js](#declaration-and-assignmentjs) - no assertions
- [/reassignment.js](#reassignmentjs) - no assertions

---

## /const-vs-let.js

> syntaxError
>
> [review source](./const-vs-let.js)

```txt
UNCAUGHT :   ...  /exercises/variables/examples/const-vs-let.js:7
const constantVariable1;
      ^^^^^^^^^^^^^^^^^

SyntaxError: Missing initializer in const declaration
    at Module._compile (internal/modules/cjs/loader.js:720:22)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:70:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
```

```js
// const is short for "constant".  a variable that never changes


// const variables cannot be declared without assigning a value
// this will throw a creation-phase error
//  Missing initializer in const declaration
const constantVariable1;
console.log(constantVariable1);

// const variables also cannot be assigned
// this will throw an execution-phase error
//  Assignment to constant variable
const constantVariable2 = 'constant value';
constantVariable2 = 'new value';
console.log(constantVariable2);

// all of these things are possible with let
let letVariable1 = 'value 1';
console.log(letVariable1);

letVariable1 = 'value 2';
console.log(letVariable1);

let letVariable2;
console.log(letVariable2);

/*
  the exercises in the following slides will use let to reassign values
  this is to help you understand how variables work in memory.

  when writing your own code, it is best to always use const.
  it will take some practice to write code like this, but is worth it.
  programs with only const are easier to understand and debug
*/

```

[TOP](#live-study)

---

## /declaration-and-assignment.js

> no assertions
>
> [review source](./declaration-and-assignment.js)

```txt
LOG : undefined
LOG : first value
LOG : second value
LOG : hi!
LOG : bye!
```

```js
// Psst ... "open in JS Tutor" might be helpful

// DECLARING a variable creates a new named entry in memory:
let variable;
// variables store undefined by default if you do not assign a value
console.log(variable);

// after a variable is DECLARED, you can ASSIGN a value to it:
variable = 'first value';
console.log(variable);

// later on you can REASSIGN it a new value:
variable = 'second value';
console.log(variable);

// It is also possible to declare AND assign in one step:
let anotherVariable = 'hi!';
console.log(anotherVariable);

// this variable can also be reassigned:
anotherVariable = 'bye!';
console.log(anotherVariable);

```

[TOP](#live-study)

---

## /reassignment.js

> no assertions
>
> [review source](./reassignment.js)

```txt
LOG : undefined
LOG : first value
LOG : second value
LOG : hi!
LOG : bye!
```

```js
// Psst ... "open in JS Tutor" might be helpful

// DECLARING a variable creates a new named entry in memory:
let variable;
// variables store undefined by default if you do not assign a value
console.log(variable);

// after a variable is DECLARED, you can ASSIGN a value to it:
variable = 'first value';
console.log(variable);

// later on you can REASSIGN it a new value:
variable = 'second value';
console.log(variable);

// It is also possible to declare AND assign in one step:
let anotherVariable = 'hi!';
console.log(anotherVariable);

// this variable can also be reassigned:
anotherVariable = 'bye!';
console.log(anotherVariable);

```

[TOP](#live-study)

