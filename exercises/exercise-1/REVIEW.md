# event-loop 

## /exercise-1

> syntaxError: 4/7/2020, 11:48:14 AM 

[../REVIEW.md](../REVIEW.md)

* [/toad.js](#toadjs) - error
* [/a](./a/REVIEW.md) - syntaxError
  * [/index.js](./a/REVIEW.md#indexjs) - syntaxError
  * [/m](./a/m/REVIEW.md) - fail
    * [/toad.js](./a/m/REVIEW.md#toadjs) - no assertions
    * [/x](./a/m/x/REVIEW.md) - fail
      * [/index.js](./a/m/x/REVIEW.md#indexjs) - fail
    * [/y](./a/m/y/REVIEW.md) - fail
      * [/index.js](./a/m/y/REVIEW.md#indexjs) - fail
    * [/z](./a/m/z/REVIEW.md) - fail
      * [/index.js](./a/m/z/REVIEW.md#indexjs) - fail
* [/b](./b/REVIEW.md) - no assertions
  * [/index.js](./b/REVIEW.md#indexjs) - no assertions
* [/c](./c/REVIEW.md) - fail
  * [/index.js](./c/REVIEW.md#indexjs) - fail

---

## /toad.js

* error
* [review source](./toad.js)

```txt
- FAIL : 0 ms., toad, Test 4
+ PASS : 2 ms., toad, Test 5
+ PASS (async) : 16 ms., toad, Test 6
- FAIL (async) : 16 ms., toad, Test 7
(async) Error: water bucket
```

```js
const title = 'toad';
console.log('--- ' + title + ' ---');
const start = Date.now();

const word = 'wo';

console.assert(word === 'w',
  `${Date.now() - start} ms.`, title, `Test 4`);
console.assert(word === 'wo',
  `${Date.now() - start} ms.`, title, `Test 5`);

setTimeout(function beAnError() {
  console.assert(word === 'wo',
    `${Date.now() - start} ms.`, title, `Test 6`);
  console.assert(word === 'w',
    `${Date.now() - start} ms.`, title, `Test 7`);
  throw new Error('water bucket');
}, 10);

```

[TOP](#event-loop)

