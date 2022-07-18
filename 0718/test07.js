// 배열의 특정 요소 위치 확인
// 배열.indexOf(검색할 값, 시작 인덱스)
const arr = ['spring','summer','fall','winter','is','down']

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
console.log(`"winter" is not in this value ${arr.indexOf('winter',4)}`);