# event-loop /

> 4/6/2020, 7:05:08 PM 

## /b - no assertions 

### files

* [/index.js](#index---no-assertions) - no assertions 

[../REVIEW.md](../REVIEW.md)

---

## index - no assertions

* [review source](./index.js)

```js
const title = 'exercise 1';
console.log('--- ' + title + ' ---');

const start = Date.now();

// debugger;
// Timers

let word = 'w';
throw word;
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

