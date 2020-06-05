# Live Study 

## /exercises/4-functions/exercises

> 6/5/2020, 4:30:47 PM 

[../REVIEW.md](../REVIEW.md)

- [/1.js](#1js) - error
- [/2.js](#2js) - error
- [/3.js](#3js) - error
- [/completed-example.js](#completed-examplejs) - pass

---

## /1.js

> error
>
> [review source](./1.js)

```txt
UNCAUGHT : ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/4-functions/exercises/1.js:10:31)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:72:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
```

```js
function scramble(param1, param2, param3) {
  const result = param3 + param1 + param2;
  return result;
}

const arg1 = "a";
const arg2 = "c";
const arg3 = "b";
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === _;
console.assert(isTrue1, 'Assertion 1');

const arg4 = "a";
const arg5 = "b";
const arg6 = "c";
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === _;
console.assert(isTrue2, 'Assertion 2');

const arg7 = "c";
const arg8 = "b";
const arg9 = "a";
const returned3 = scramble(arg8, arg9, arg7);
const isTrue3 = returned3 === _;
console.assert(isTrue3, 'Assertion 3');

const arg10 = "b";
const arg11 = "a";
const arg12 = "c";
const returned4 = scramble(arg12, arg11, arg10);
const isTrue4 = returned4 === _;
console.assert(isTrue4, 'Assertion 4');

const arg13 = "b";
const arg14 = "c";
const arg15 = "a";
const returned5 = scramble(arg14, arg15, arg13);
const isTrue5 = returned5 === _;
console.assert(isTrue5, 'Assertion 5');

const arg16 = "c";
const arg17 = "a";
const arg18 = "b";
const returned6 = scramble(arg18, arg17, arg16);
const isTrue6 = returned6 === _;
console.assert(isTrue6, 'Assertion 6');


```

[TOP](#live-study)

---

## /2.js

> error
>
> [review source](./2.js)

```txt
UNCAUGHT : ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/4-functions/exercises/2.js:6:14)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:72:1)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
```

```js
function scramble(param1, param2, param3) {
  const result = param1 + param3 + param2;
  return result;
}

const arg1 = _;
const arg2 = _;
const arg3 = _;
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === 'bac';
console.assert(isTrue1, 'Assertion 1');

const arg4 = _;
const arg5 = _;
const arg6 = _;
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === 'cab';
console.assert(isTrue2, 'Assertion 2');

const arg7 = "c";
const arg8 = "b";
const arg9 = "a";
const returned3 = scramble(_, _, _);
const isTrue3 = returned3 === 'abc';
console.assert(isTrue3, 'Assertion 3');

const arg10 = "b";
const arg11 = "a";
const arg12 = "c";
const returned4 = scramble(_, _, _);
const isTrue4 = returned4 === 'abc';
console.assert(isTrue4, 'Assertion 4');

const arg13 = _;
const arg14 = _;
const arg15 = _;
const returned5 = scramble(arg14, arg15, arg13);
const isTrue5 = returned5 === 'cba';
console.assert(isTrue5, 'Assertion 5');

const arg16 = "c";
const arg17 = "a";
const arg18 = "b";
const returned6 = scramble(_, _, _);
const isTrue6 = returned6 === 'abc';
console.assert(isTrue6, 'Assertion 6');


```

[TOP](#live-study)

---

## /3.js

> error
>
> [review source](./3.js)

```txt
UNCAUGHT : ReferenceError: _ is not defined
    at scramble (  ...  /exercises/4-functions/exercises/3.js:2:18)
    at Object.<anonymous> (  ...  /exercises/4-functions/exercises/3.js:9:19)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluate (  ...  /scripts/lib/evaluate.js:12:7)
    at Object.<anonymous> (  ...  /scripts/review.js:72:1)
```

```js
function scramble(param1, param2, param3) {
  const result = _ + _ + _;
  return result;
}

const arg1 = "x";
const arg2 = "z";
const arg3 = "y";
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === "yxz";
console.assert(isTrue1, 'Assertion 1');

const arg4 = "x";
const arg5 = "y";
const arg6 = "z";
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === "zxy";
console.assert(isTrue2, 'Assertion 2');

const arg7 = "z";
const arg8 = "y";
const arg9 = "x";
const returned3 = scramble(arg9, arg8, arg7);
const isTrue3 = returned3 === "zxy";
console.assert(isTrue3, 'Assertion 3');

const arg10 = "y";
const arg11 = "x";
const arg12 = "z";
const returned4 = scramble(arg11, arg12, arg10);
const isTrue4 = returned4 === "yxz";
console.assert(isTrue4, 'Assertion 4');

```

[TOP](#live-study)

---

## /completed-example.js

> pass
>
> [review source](./completed-example.js)

```txt
+ PASS : Assertion 1
+ PASS : Assertion 2
+ PASS : Assertion 3
+ PASS : Assertion 4
```

```js
function scramble(param1, param2, param3) {
  const result = param2 + param3 + param1;
  return result;
}

const arg1 = "x";
const arg2 = "z";
const arg3 = "y";
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === "zyx";
console.assert(isTrue1, 'Assertion 1');

const arg4 = "x";
const arg5 = "y";
const arg6 = "z";
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === "yzx";
console.assert(isTrue2, 'Assertion 2');

const arg7 = "z";
const arg8 = "y";
const arg9 = "x";
const returned3 = scramble(arg9, arg8, arg7);
const isTrue3 = returned3 === "yzx";
console.assert(isTrue3, 'Assertion 3');

const arg10 = "y";
const arg11 = "x";
const arg12 = "z";
const returned4 = scramble(arg11, arg12, arg10);
const isTrue4 = returned4 === "zyx";
console.assert(isTrue4, 'Assertion 4');



```

[TOP](#live-study)

