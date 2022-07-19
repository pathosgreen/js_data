// UTC 기준 날자 출력
const date = new Date();
const dateUTC = Date.UTC(
    date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),
    date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds()
);

console.log(new Date(dateUTC));
