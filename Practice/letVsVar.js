// let vs var
var abc1 = 100;
if (abc1 == 100) {
    var abc1 = 200;
    console.log(abc1);
}
console.log(abc1);
var abc = 100;
if (abc == 100) {
    var abc_1 = 200;
    console.log(abc_1);
}
console.log(abc);
