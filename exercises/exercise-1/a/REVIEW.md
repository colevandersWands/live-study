# event-loop 

## /a

> syntaxError: 4/7/2020, 12:39:38 PM 

[../REVIEW.md](../REVIEW.md)

* [/index.js](#indexjs) - syntaxError
* [/m](./m/REVIEW.md) - fail
  * [/toad.js](./m/REVIEW.md#toadjs) - no reports
  * [/x](./m/x/REVIEW.md) - fail
    * [/index.js](./m/x/REVIEW.md#indexjs) - fail
  * [/y](./m/y/REVIEW.md) - fail
    * [/index.js](./m/y/REVIEW.md#indexjs) - fail
  * [/z](./m/z/REVIEW.md) - fail
    * [/index.js](./m/z/REVIEW.md#indexjs) - fail

---

## /index.js

* syntaxError
* [review source](./index.js)

```txt
 [ ... ] /exercises/exercise-1/a/index.js:9
let word 'w';
         ^^^

SyntaxError: Unexpected string
    at Module._compile (internal/modules/cjs/loader.js:720:22)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate ( [ ... ] /review.js:226:7)
    at Object.<anonymous> ( [ ... ] /review.js:233:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
```

```js
const title = 'exercise 1';
console.log('--- ' + title + ' ---');

const start = Date.now();

// debugger;
// Timers

let word 'w';

setTimeout(function firstTimeout() {
  word += 'd';
  const expected = 'word';
  console.assert(word === expected, `${title}, ${Date.now() - start} ms: Test 1`);
}, 3000);

setTimeout(function secondTimeout1() {
  word += 'o';
  const expected = 'wo';
  // throw new Error();
  console.assert(word === expected, `${title}, ${Date.now() - start} ms: Test 2`);
}, 2000);


setTimeout(function thirdTimeout() {
  word += 'r';
  const expected = 'wor';
  console.assert(word === expected, `${title}, ${Date.now() - start} ms: Test 3`);
}, 1000);

console.assert(word === 'w', `${title}, ${Date.now() - start} ms: Test 1`);

// f

```

[TOP](#event-loop)

