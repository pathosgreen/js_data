// 객체에서 키,값만 추출
const obj = {
    movie: 'Sunnty',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};
const arr = Object.keys(obj); // 키만 추출
const arr2 = Object.values(obj); // 값만 추출

console.log(arr);
console.log(arr2);
// 객체를 배열로 변환
const arr3 = Object.entries(obj);

console.log(arr3);