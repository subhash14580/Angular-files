function class1() {
    this.propertyName = "Js property";
    this.fun = function () {
        console.log(this.propertyName);
    };
}
var obj = new class1();
//obj.fun();
//  data types
var a = "A string";
var b = 100;
a = "kfak";
var arr = ['BMW', 'SKODA', 'AUDI'];
var tsObj = { key: 'value' };
console.log(arr);
function fun() {
    return "Trying to have fun but .....";
}
var fundooo = fun();
var isBoolean = true;
console.log(fun(), fundooo, !isBoolean);
