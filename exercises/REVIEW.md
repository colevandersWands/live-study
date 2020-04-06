# event-loop /

> 4/6/2020, 7:05:08 PM 

## /exercises - syntaxError 

### files

* [/limited-intervals.js](#limited-intervals---error) - error 

### sub-directories

* [/exercise-1](./exercise-1/REVIEW.md) - syntaxError
* [/exercise-2](./exercise-2/REVIEW.md) - error

[../REVIEW.md](../REVIEW.md)

---

## limited-intervals - error

* [review source](./limited-intervals.js)

```txt
 (async)ReferenceError: intervalId is not defined
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

