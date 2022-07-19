// 배열 내 값 누적 - reduce
const numArr = [1,2,3,4,5];

const result = numArr.reduce((acc,el) =>{ // acc = 누적값, el = 현재 수
    return acc + el;
}, 0); // 초기값

console.log(result);