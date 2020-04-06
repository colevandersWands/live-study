# event-loop /

> 4/6/2020, 6:13:45 PM 

## /exercise-1 - syntaxError 

* [../REVIEW.md](../REVIEW.md)

### files

* [/toad.js](#toad---error) - error 

### sub-directories

* [/a](./a/REVIEW.md) - syntaxError
* [/b](./b/REVIEW.md) - no assertions
* [/c](./c/REVIEW.md) - fail

---

## toad - error

* [review source](./toad.js)

```txt
- FAIL: 0 ms., toad, Test 4
+ PASS: 0 ms., toad, Test 5
+ PASS (async): 12 ms., toad, Test 6
- FAIL (async): 12 ms., toad, Test 7
 (async)Error: water bucket
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

