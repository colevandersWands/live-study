# event-loop 

## /x

> fail: 4/7/2020, 12:28:50 PM 

[../REVIEW.md](../REVIEW.md)

* [/index.js](#indexjs) - fail

---

## /index.js

* fail
* [review source](./index.js)

```txt
+ PASS : exercise 1, 0 ms: Test 1
- FAIL (async) : exercise 1, 1005 ms: Test 3
- FAIL (async) : exercise 1, 2004 ms: Test 2
- FAIL (async) : exercise 1, 3005 ms: Test 1
```

```js
const title = 'exercise 1';
console.log('--- ' + title + ' ---');

const start = Date.now();

// debugger;
// Timers

let word = 'w';

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

