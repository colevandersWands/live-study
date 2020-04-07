# event-loop 

## /exercises

> syntaxError: 4/7/2020, 11:48:14 AM 

* [/limited-intervals.js](#limited-intervalsjs) - error
* [/exercise-1](./exercise-1/REVIEW.md) - syntaxError
  * [/toad.js](./exercise-1/REVIEW.md#toadjs) - error
  * [/a](./exercise-1/a/REVIEW.md) - syntaxError
    * [/index.js](./exercise-1/a/REVIEW.md#indexjs) - syntaxError
    * [/m](./exercise-1/a/m/REVIEW.md) - fail
      * [/toad.js](./exercise-1/a/m/REVIEW.md#toadjs) - no assertions
      * [/x](./exercise-1/a/m/x/REVIEW.md) - fail
        * [/index.js](./exercise-1/a/m/x/REVIEW.md#indexjs) - fail
      * [/y](./exercise-1/a/m/y/REVIEW.md) - fail
        * [/index.js](./exercise-1/a/m/y/REVIEW.md#indexjs) - fail
      * [/z](./exercise-1/a/m/z/REVIEW.md) - fail
        * [/index.js](./exercise-1/a/m/z/REVIEW.md#indexjs) - fail
  * [/b](./exercise-1/b/REVIEW.md) - no assertions
    * [/index.js](./exercise-1/b/REVIEW.md#indexjs) - no assertions
  * [/c](./exercise-1/c/REVIEW.md) - fail
    * [/index.js](./exercise-1/c/REVIEW.md#indexjs) - fail
* [/exercise-2](./exercise-2/REVIEW.md) - error
  * [/asdf.js](./exercise-2/REVIEW.md#asdfjs) - no assertions
  * [/index.js](./exercise-2/REVIEW.md#indexjs) - error
  * [/qwer.js](./exercise-2/REVIEW.md#qwerjs) - no assertions

---

## /limited-intervals.js

* error
* [review source](./limited-intervals.js)

```txt
(async) ReferenceError: intervalId is not defined
```

```js
const title = 'limited intervals';
console.log('--- ' + title + ' ---');

const start = Date.now();
let intervals = 0;

// setTimeout(() => {
//   const delay = Date.now() - start;
//   clearInterval(intervalId);
//   console.log('ST. interval === ' + intervals + ', ' + delay + ' ms');
//   console.assert(intervals === 8, delay + ' ms. Test 1');
// }, 4000);

// const intervalId = setInterval(() => {
//   const delay = Date.now() - start;
//   console.log('SI. interval === ' + intervals + ', ' + delay + ' ms');
//   intervals++;
// }, 500);

setTimeout(() => {
  const delay = Date.now() - start;
  clearInterval(intervalId);
  console.log('ST. interval === ' + intervals + ', ' + delay + ' ms');
  console.assert(intervals === 8, delay + ' ms. Test 1');
}, 4000);


/*

let count = 0;

// what happens if you move the setTimeout after the setInterval?

setTimeout(function sTo() {
  clearInterval(intervalId);
  console.log('sTo. interval === ' + intervals + ', ' + delay + ' ms');
  console.assert(intervals === 8, 'Test 1');
}, 8000);

const intervalId = setInterval(function sInt() {
  console.log('sInt. count === ' + count );
  count++;
}, 1000);

*/

```

[TOP](#event-loop)

