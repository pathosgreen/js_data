// Set - 데이터 중복 불허
const s = new Set();

s.add('one');
s.add('twe');
s.add('three');

console.log(s.has('one')); // has : 찾는데 성공하면 true, 실패하면 false
s.delete('one');
console.log(s.has('one'));
console.log(s.has('two'));