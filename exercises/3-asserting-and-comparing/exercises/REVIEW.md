# Live Study 

## /exercises/asserting-and-comparing/exercises

> 6/5/2020, 3:08:10 PM 

[../REVIEW.md](../REVIEW.md)

- [/1.js](#1js) - error
- [/2.js](#2js) - error

---

## /1.js

> error
>
> [review source](./1.js)

```txt
UNCAUGHT : ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/asserting-and-comparing/exercises/1.js:3:26)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:70:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
```

```js
// replace the _'s to pass the isTrues

const isTrue1 = true === _;
console.log(typeof isTrue1, isTrue1);
console.assert(isTrue1, 'Assertion 1');

const isTrue2 = 0.0 === _;
console.log(typeof isTrue2, isTrue2);
console.assert(isTrue2, 'Assertion 2');

const isTrue3 = false === _;
console.log(typeof isTrue3, isTrue3);
console.assert(isTrue3, 'Assertion 3');

const isTrue4 = 'null' === _;
console.log(typeof isTrue4, isTrue4);
console.assert(isTrue4, 'Assertion 4');

```

[TOP](#live-study)

---

## /2.js

> error
>
> [review source](./2.js)

```txt
UNCAUGHT : ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/asserting-and-comparing/exercises/2.js:4:33)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:70:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
```

```js
// replace the _ to pass the asserts

const comparison1 = 4 === '4';
const isTrue1 = comparison1 === _;
console.assert(isTrue1, 'Assertion 1');

const comparison2 = Infinity === 'Infinity';
const isTrue2 = comparison2 === _;
console.assert(isTrue2, 'Assertion 2');

const comparison3 = "x" === `x`;
const isTrue3 = comparison3 === _;
console.assert(isTrue3, 'Assertion 3');

const comparison4 = 'null' === _;
const isTrue4 = comparison4 === true;
console.assert(isTrue4, 'Assertion 4');

const comparison5 = 'null' === null;
const isTrue5 = comparison5 === _;
console.assert(isTrue5, 'Assertion 5');

const comparison6 = 0.0 === 0;
const isTrue6 = comparison6 === _;
console.assert(isTrue6, 'Assertion 6');

const comparison7 = null === undefined;
const isTrue7 = comparison7 === _;
console.assert(isTrue7, 'Assertion 7');


```

[TOP](#live-study)

