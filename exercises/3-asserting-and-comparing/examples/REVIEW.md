# Live Study 

## /exercises/3-asserting-and-comparing/examples

> 6/5/2020, 4:30:47 PM 

[../REVIEW.md](../REVIEW.md)

- [/assignment-vs-comparison.js](#assignment-vs-comparisonjs) 
- [/console-assert.js](#console-assertjs) - fail
- [/strict-equality.js](#strict-equalityjs) 
- [/strict-inequality.js](#strict-inequalityjs) 
- [/testing-with-assert.js](#testing-with-assertjs) - error

---

## /assignment-vs-comparison.js

> 
>
> [review source](./assignment-vs-comparison.js)

```txt
LOG : string  value 1
LOG : string  value 1
LOG : boolean  false
LOG : boolean  true
LOG : boolean  true
```

```js
// = and === look similar, but do VERY different things!
// = --> assigns a new value to a variable
// === --> compares two values

// it's difficult to explain, but easy to see
// click on "open in JS Tutor" for best results

// = assigns a value to variable, updating memory
let variable = 'value 1';
console.log(typeof variable, variable);

// === compares two values without changing memory
const firstComparison = variable === 'value 2';
console.log(typeof variable, variable);
console.log(typeof firstComparison, firstComparison);

// === compares the CURRENT value assigned to a variable
// changing a variable with = will change the result of the comparison
variable = 'value 2';
const secondComparison = variable === 'value 2';
console.log(typeof secondComparison, secondComparison);

// === comparisons can be written either way
const thirdComparison = 'value 2' === variable;
console.log(typeof thirdComparison, thirdComparison);

// = assignments cannot be written either way
//  Invalid left-hand side in assignment
// 'value 2' = variable; // uncomment this line for an error



```

[TOP](#live-study)

---

## /console-assert.js

> fail
>
> [review source](./console-assert.js)

```txt
+ PASS : this assertion passes
- FAIL : this assertion fails
```

```js
/* console.assert takes two arguments

the first argument is called the ASSERTION
  if it's true, console.assert will pass
  if it's false, console.assert will fail

the second argument is the MESSAGE
  it's conventional for the second argument to be a string
*/

console.assert(true, 'this assertion passes');
console.assert(false, 'this assertion fails');

/* PS. open your browser's console!
In the console, only failing asserts are printed.
  this is the standard behavior for console.assert
  these slides display passing assert to help you study
*/


```

[TOP](#live-study)

---

## /strict-equality.js

> 
>
> [review source](./strict-equality.js)

```txt
LOG : -- true comparisons --
LOG : boolean  true
LOG : boolean  true
LOG : boolean  true
LOG : -- false comparisons --
LOG : boolean  false
LOG : boolean  false
LOG : boolean  false
LOG : -- NaN is weird --
LOG : boolean  false
```

```js
// ===, this operator will always evaluate to a boolean
//  true: if the type & value are the same
//  false: if either the type or value are different

// if two values are the same, === evaluates to true:
console.log('-- true comparisons --');

const isTrue1 = true === true;
console.log(typeof isTrue1, isTrue1);

const isTrue2 = null === null;
console.log(typeof isTrue2, isTrue2);

const isTrue3 = '4' === '4';
console.log(typeof isTrue3, isTrue3);


// if two values are the same, === evalutes to true:
console.log('-- false comparisons --');

// if they are not, it evaluates to false
const isFalse1 = true === false;
console.log(typeof isFalse1, isFalse1);

const isFalse2 = '4' === 4;
console.log(typeof isFalse2, isFalse2);

const isFalse3 = 4 === 4.1;
console.log(typeof isFalse3, isFalse3);



// NaN is a strange and special value in JavaScript
//  it does not equal itself!
console.log('-- NaN is weird --');

const huh = NaN === NaN;
console.log(typeof huh, huh);


```

[TOP](#live-study)

---

## /strict-inequality.js

> 
>
> [review source](./strict-inequality.js)

```txt
LOG : -- false comparisons --
LOG : boolean  false
LOG : boolean  false
LOG : boolean  false
LOG : -- true comparisons --
LOG : boolean  true
LOG : boolean  true
LOG : boolean  true
LOG : -- NaN is weird --
LOG : boolean  true
```

```js
// !==, this operator will always evaluate to a boolean
//  false: if the type & value are the same
//  true: if either the type or value are different

// if two values are the same, !== evaluates to true:
console.log('-- false comparisons --');

const isTrue1 = true !== true;
console.log(typeof isTrue1, isTrue1);

const isTrue2 = null !== null;
console.log(typeof isTrue2, isTrue2);

const isTrue3 = '4' !== '4';
console.log(typeof isTrue3, isTrue3);


// if two values are the same, !== evaluates to true:
console.log('-- true comparisons --');

// if they are not, it evaluates to false
const isFalse1 = true !== false;
console.log(typeof isFalse1, isFalse1);

const isFalse2 = '4' !== 4;
console.log(typeof isFalse2, isFalse2);

const isFalse3 = 4 !== 4.1;
console.log(typeof isFalse3, isFalse3);



// NaN is a strange and special value in JavaScript
//  it does not equal itself!
console.log('-- NaN is weird --');

const huh = NaN !== NaN;
console.log(typeof huh, huh);


```

[TOP](#live-study)

---

## /testing-with-assert.js

> error
>
> [review source](./testing-with-assert.js)

```txt
LOG : -- examples --
+ PASS : Assertion 1
+ PASS : Assertion 2
+ PASS : Assertion 3
LOG : -- practice exercises --
UNCAUGHT : ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/3-asserting-and-comparing/examples/testing-with-assert.js:26:33)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:72:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
```

```js
// console.assert is a good way to test your understanding of code
//  the idea is to write what you expect the value to be
//  then check your guess with console.assert

console.log('-- examples --');

const comparison1 = 4 === 4.0;
const isTrue1 = comparison1 === true;
console.assert(isTrue1, 'Assertion 1');

const comparison2 = 4 === '4';
const isTrue2 = comparison2 === false;
console.assert(isTrue2, 'Assertion 2');

const comparison3 = "xyz" === `xyz`;
const isTrue3 = comparison3 === true;
console.assert(isTrue3, 'Assertion 3');


// exercises at HYF will use comparison and assert
// take a second to figure out how this works:
//  replace _ with a value to pass the assertions
console.log('-- practice exercises --');

const comparison4 = NaN === NaN;
const isTrue4 = comparison4 === _;
console.assert(isTrue4, 'Assertion 4');

const comparison5 = (typeof 4) === (typeof '4');
const isTrue5 = comparison5 === _;
console.assert(isTrue5, 'Assertion 5');

```

[TOP](#live-study)

