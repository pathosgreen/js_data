// Map 객체의 크기 확인
const map = new Map();

map.set('one',1);
map.set('twe',2);
map.set([1,2,3],'Three elements');
map.set({a:'A',b:'B'},'object elememt');
map.set(function(){},'function element');

console.log(map.size);