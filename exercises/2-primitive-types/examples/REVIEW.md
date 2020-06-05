# Live Study 

## /exercises/primitive-types/examples

> 6/5/2020, 3:08:10 PM 

[../REVIEW.md](../REVIEW.md)

- [/boolean-undefined-null.js](#boolean-undefined-nulljs) - no assertions
- [/number.js](#numberjs) - no assertions
- [/string.js](#stringjs) - no assertions
- [/typeof.js](#typeofjs) - no assertions

---

## /boolean-undefined-null.js

> no assertions
>
> [review source](./boolean-undefined-null.js)

```txt
LOG : boolean  true
LOG : boolean  false
LOG : undefined  undefined
LOG : object  null
```

```js
// the final 3 types are much simpler than Strings and Numbers

// there are only 2 "boolean" values in JavaScript
const booleanTrue = true;
console.log(typeof booleanTrue, booleanTrue);

const booleanFalse = false;
console.log(typeof booleanFalse, booleanFalse);


// there is one value with type 'undefined'
const undefinedUndefined = undefined;
console.log(typeof undefinedUndefined, undefinedUndefined);


// there is one null value: null
//  null's type is unexpectedly 'object'
const objectNull = null;
console.log(typeof objectNull, objectNull);

```

[TOP](#live-study)

---

## /number.js

> no assertions
>
> [review source](./number.js)

```txt
LOG : number  1
LOG : number  0
LOG : number  -1
LOG : number  Infinity
LOG : number  NaN
LOG : number  1000
```

```js
// There are many kinds of numbers in JS
// instead of guessing, use typeof!

const numA = 1;
console.log(typeof numA, numA);

const numB = 0.0;
console.log(typeof numB, numB);

const numC = -1;
console.log(typeof numC, numC);

const numD = Infinity;
console.log(typeof numD, numD);

const numE = NaN;
console.log(typeof numE, numE);

const numF = 1e3;
console.log(typeof numF, numF);

```

[TOP](#live-study)

---

## /string.js

> no assertions
>
> [review source](./string.js)

```txt
LOG : string  
LOG : string  0
LOG : string  false
LOG : string  undefined
LOG : string  null
LOG : string  abc
LOG : string  cba
LOG : string  , 0, false, undefined, null
```

```js
// strs are anything between quotations

const str1 = '';
console.log(typeof str1, str1);

const str2 = '0';
console.log(typeof str2, str2);

const str3 = 'false';
console.log(typeof str3, str3);

const str4 = 'undefined';
console.log(typeof str4, str4);

const str5 = 'null';
console.log(typeof str5, str5);


// you can concatenate strings with +
const abc = 'a' + 'b' + 'c';
console.log(typeof abc, abc);

const cba = "c" + "b" + "a";
console.log(typeof cba, cba);


// if you use ``, strings can be built using ${}
// this is called "template literals"
const allOfThem = `${str1}, ${str2}, ${str3}, ${str4}, ${str5}`;
console.log(typeof allOfThem, allOfThem);


```

[TOP](#live-study)

---

## /typeof.js

> no assertions
>
> [review source](./typeof.js)

```txt
LOG : string  
LOG : number  0
LOG : boolean  false
LOG : undefined  undefined
LOG : object  null
```

```js
// there are 5 primitive types in JavaScript
// the typeof operator will tell you what type a value is

// types are one of the most foundational concepts in programming
//  it's a good practice to log the type and the value
//  this will help you catch your mistakes
//  and help you build a better understanding of JS

const stringValue = '';
console.log(typeof stringValue, stringValue);

const numberValue = 0;
console.log(typeof numberValue, numberValue);

const booleanValue = false;
console.log(typeof booleanValue, booleanValue);

const undefinedValue = undefined;
console.log(typeof undefinedValue, undefinedValue);

const nullValue = null;
console.log(typeof nullValue, nullValue);

```

[TOP](#live-study)

