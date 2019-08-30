function class1() {
    this.propertyName = "Js property";
    this.fun = function(){
        console.log(this.propertyName);
    }
}

var obj = new class1();
//obj.fun();

//  data types

var a:string = "A string";
var b:number = 100;
a = "kfak";
var arr:string[] = ['BMW','SKODA','AUDI'];
var tsObj:any = {key:'value'};
console.log(arr);

