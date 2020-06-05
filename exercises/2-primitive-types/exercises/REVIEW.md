# Live Study 

## /exercises/2-primitive-types/exercises

> 6/5/2020, 4:30:47 PM 

[../REVIEW.md](../REVIEW.md)

- [/1.js](#1js) - error

---

## /1.js

> error
>
> [review source](./1.js)

```txt
LOG : -- example --
LOG : object  null
LOG : object  null
LOG : -- challenge1 --
UNCAUGHT : ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/2-primitive-types/exercises/1.js:12:13)
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
// replace the _'s to complete the challenges
//  you know it's right when your log matches the one below it


console.log('-- example --');
const example = null;
console.log('object', null);
console.log(typeof example, example);

console.log('-- challenge1 --');
const challenge1 = 'undefined';
console.log(_, _);
console.log(typeof challenge1, challenge1);

console.log('-- challenge2 --');
const challenge2 = Infinity;
console.log(_, _);
console.log(typeof challenge2, challenge2);

console.log('-- challenge3 --');
const challenge3 = 4;
console.log(_, _);
console.log(typeof challenge3, challenge3);

console.log('-- challenge4 --');
const challenge4 = '4';
console.log(_, _);
console.log(typeof challenge4, challenge4);

console.log('-- challenge5 --');
const challenge5 = (typeof (typeof false));
console.log(_, _);
console.log(typeof challenge5, challenge5);


```

[TOP](#live-study)

