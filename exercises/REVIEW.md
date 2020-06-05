# Live Study 

## /exercises

> 6/5/2020, 4:25:51 PM 

- [/lost.js](#lostjs) - error (async)
- [/1-variables](./1-variables/REVIEW.md)
  - [/examples](./1-variables/examples/REVIEW.md)
    - [/const-vs-let.js](./1-variables/examples/REVIEW.md#const-vs-letjs) - syntax error
    - [/declaration-and-assignment.js](./1-variables/examples/REVIEW.md#declaration-and-assignmentjs) 
    - [/reassignment.js](./1-variables/examples/REVIEW.md#reassignmentjs) 
  - [/exercises](./1-variables/exercises/REVIEW.md)
    - [/1.js](./1-variables/exercises/REVIEW.md#1js) 
- [/2-primitive-types](./2-primitive-types/REVIEW.md)
  - [/examples](./2-primitive-types/examples/REVIEW.md)
    - [/boolean-undefined-null.js](./2-primitive-types/examples/REVIEW.md#boolean-undefined-nulljs) 
    - [/number.js](./2-primitive-types/examples/REVIEW.md#numberjs) 
    - [/string.js](./2-primitive-types/examples/REVIEW.md#stringjs) 
    - [/typeof.js](./2-primitive-types/examples/REVIEW.md#typeofjs) 
  - [/exercises](./2-primitive-types/exercises/REVIEW.md)
    - [/1.js](./2-primitive-types/exercises/REVIEW.md#1js) - error
- [/3-asserting-and-comparing](./3-asserting-and-comparing/REVIEW.md)
  - [/examples](./3-asserting-and-comparing/examples/REVIEW.md)
    - [/assignment-vs-comparison.js](./3-asserting-and-comparing/examples/REVIEW.md#assignment-vs-comparisonjs) 
    - [/console-assert.js](./3-asserting-and-comparing/examples/REVIEW.md#console-assertjs) - fail
    - [/strict-equality.js](./3-asserting-and-comparing/examples/REVIEW.md#strict-equalityjs) 
    - [/strict-inequality.js](./3-asserting-and-comparing/examples/REVIEW.md#strict-inequalityjs) 
    - [/testing-with-assert.js](./3-asserting-and-comparing/examples/REVIEW.md#testing-with-assertjs) - error
  - [/exercises](./3-asserting-and-comparing/exercises/REVIEW.md)
    - [/1.js](./3-asserting-and-comparing/exercises/REVIEW.md#1js) - error
    - [/2.js](./3-asserting-and-comparing/exercises/REVIEW.md#2js) - error
- [/4-functions](./4-functions/REVIEW.md)
  - [/examples](./4-functions/examples/REVIEW.md)
    - [/declaration-vs-execution.js](./4-functions/examples/REVIEW.md#declaration-vs-executionjs) 
    - [/parameters-and-arguments.js](./4-functions/examples/REVIEW.md#parameters-and-argumentsjs) 
    - [/return-values.js](./4-functions/examples/REVIEW.md#return-valuesjs) - pass
    - [/scope.js](./4-functions/examples/REVIEW.md#scopejs) 
    - [/tracing-execution.js](./4-functions/examples/REVIEW.md#tracing-executionjs) - pass
  - [/exercises](./4-functions/exercises/REVIEW.md)
    - [/1.js](./4-functions/exercises/REVIEW.md#1js) - error
    - [/2.js](./4-functions/exercises/REVIEW.md#2js) - error
    - [/3.js](./4-functions/exercises/REVIEW.md#3js) - error
    - [/completed-example.js](./4-functions/exercises/REVIEW.md#completed-examplejs) - pass

---

## /lost.js

> error (async)
>
> [review source](./lost.js)

```txt
(async) UNCAUGHT : Error: asdf
    at Timeout._onTimeout (  ...  /exercises/lost.js:2:9)
    at listOnTimeout (internal/timers.js:531:17)
    at processTimers (internal/timers.js:475:7)
```

```js
setTimeout(() => {
  throw new Error('asdf')
}, 0)

setTimeout(() => {
  throw 'asdf'
}, 0)

setTimeout(() => {
  throw 'asdf'
}, 0)

setTimeout(() => {
  throw 'asdf'
}, 0)

```

[TOP](#live-study)

---

## Unsorted Logs

```txt
(async) UNCAUGHT : asdf
```
```txt
(async) UNCAUGHT : asdf
```
```txt
(async) UNCAUGHT : asdf
```
