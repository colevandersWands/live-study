# event-loop /

> 4/6/2020, 7:05:08 PM 

## /a - syntaxError 

### files

* [/index.js](#index---syntaxError) - syntaxError 

### sub-directories

* [/m](./m/REVIEW.md) - fail

[../REVIEW.md](../REVIEW.md)

---

## index - syntaxError

* [review source](./index.js)

```txt
SyntaxError: Unexpected string
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

