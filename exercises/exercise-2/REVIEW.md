# event-loop 

## /exercise-2

> uncaught error: 4/7/2020, 12:39:38 PM 

[../REVIEW.md](../REVIEW.md)

* [/asdf.js](#asdfjs) - no reports
* [/index.js](#indexjs) - uncaught error
* [/qwer.js](#qwerjs) - no reports

---

## /asdf.js

* no reports
* [review source](./asdf.js)

[TOP](#event-loop)

---

## /index.js

* uncaught error
* [review source](./index.js)

```txt
ReferenceError: er is not defined
    at Object.<anonymous> ( [ ... ] /exercises/exercise-2/index.js:35:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate ( [ ... ] /review.js:226:7)
    at Object.<anonymous> ( [ ... ] /review.js:233:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
(async) ReferenceError: word is not defined
    at Timeout.secondTimeout2 [as _onTimeout] ( [ ... ] /exercises/exercise-2/index.js:27:3)
    at listOnTimeout (internal/timers.js:531:17)
    at processTimers (internal/timers.js:475:7)
(async) ReferenceError: word is not defined
    at Timeout.firstTimeout [as _onTimeout] ( [ ... ] /exercises/exercise-2/index.js:20:3)
    at listOnTimeout (internal/timers.js:531:17)
    at processTimers (internal/timers.js:475:7)
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

## /qwer.js

* no reports
* [review source](./qwer.js)

[TOP](#event-loop)

