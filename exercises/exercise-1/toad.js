const title = 'toad';
console.log('--- ' + title + ' ---');
const start = Date.now();

const word = 'wo';

console.assert(word === 'w',
  `${Date.now() - start} ms.`, title, `Test 4`);
console.assert(word === 'wo',
  `${Date.now() - start} ms.`, title, `Test 5`);

setTimeout(function beAnError() {
  console.assert(word === 'wo',
    `${Date.now() - start} ms.`, title, `Test 6`);
  console.assert(word === 'w',
    `${Date.now() - start} ms.`, title, `Test 7`);
  throw new Error('water bucket');
}, 10);
