# event-loop /

> 4/6/2020, 7:05:08 PM 

## /exercise-2 - error 

### files

* [/asdf.js](#asdf---no-assertions) - no assertions 
* [/index.js](#index---error) - error 
* [/qwer.js](#qwer---no-assertions) - no assertions 

[../REVIEW.md](../REVIEW.md)

---

## asdf - no assertions

* [review source](./asdf.js)

[TOP](#event-loop)

---

## index - error

* [review source](./index.js)

```txt
ReferenceError: er is not defined
 (async)ReferenceError: word is not defined
 (async)ReferenceError: word is not defined
```

```js
const title = 'exercise 2';
console.log('--- ' + title + ' ---');

const start = Date.now();

// debugger;
// Timers

// let word  'w';

function pp(e) {
  if (e === 0) throw new Error('e')
  return e - 1
}
// pp(4)
// er()

setTimeout(function firstTimeout() {
  const delay = Date.now() - start;
  word += 'd';
  const expected = 'word';
  console.assert(word === expected, `${Date.now() - start} ms.`, title, `Test 1`);
}, 300);

setTimeout(function secondTimeout2() {
  const delay = Date.now() - start;
  word += 'o';
  const expected = 'wo';
  throw new Error();
  console.assert(word === expected, `${Date.now() - start} ms.`, title, `Test 2`);
}, 200);

// setInterval(() => { throw new Error() }, 40)

er()
setTimeout(function thirdTimeout() {
  const delay = Date.now() - start;
  word += 'r';
  const expected = 'wor';
  console.assert(word === expected, `${Date.now() - start} ms.`, title, `Test 3`);
}, 100);

console.assert(word === 'w',
  `${Date.now() - start} ms.`, title, `Test 4`);
console.assert(word === 'wo',
  `${Date.now() - start} ms.`, title, `Test 5`);

// f

```

[TOP](#event-loop)

---

## qwer - no assertions

* [review source](./qwer.js)

[TOP](#event-loop)

