// 배열의 길이 구하기
const ship ={
    max : 4,
    passengers : [],
    onBoard : function(name){
        if(this.passengers.length === 4){ // == 값 비교 === 값 + 속성 비교
            console.log(`this ship full. ${name} can board this ship. `);
        }else{
            this.passengers.push(name);
            console.log(`${name} board`);
        }
    }
}

ship.onBoard('chole');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passengers);