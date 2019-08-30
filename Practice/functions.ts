// function with different types of parameters


function UsingParam(pRequired : boolean, pDefault:string = "DBS-ID", pOPtional?:number, ...pRest:any[]){
    console.log(pRequired,"\n",pDefault,"\n",pOPtional,"\n",pRest);
}

UsingParam(true,"DBS-491735",123,[123,456,"SDF"]);
UsingParam(true,"DBS-491735",123,123,456,"SDF");

//1)How to omit the optional parameters

UsingParam(true,"");



function array(arr:string[]){
    console.log(arr);
}
function array2(...arr:string[]){
    console.log(arr);
}
array(['a','b','c','d']);
array2('a','b','c','d');







// function that return a function
 
function complicated(){
    console.log("Inside the function");
    return function(){
        console.log("Iam inside the (function inside the function)");
        return "something";
    }
}

//(complicated())();

var result = complicated();
//result();
//console.log(result());
// self-invokable functions
// syntax for invokable functions --- (function(){})();

(function(){
    console.log("A function");
    return function(param:string){
        console.log("param is",param);
        return "u got it";
    }
})()("subhash");


// lambda functions

()=>{
    console.log("A function");
    return "A function";
};

() => "a value";

var out = (a) => (a,x,y) => a+x+y;
//console.log(out(10)(10,20,30));

var out1_lambda = (a) => (x,y) => x+y+a;
var out1 = function(param1:number){
   
        return function(param1,x:number,y:number){
            return param1+x+y;
        }
   
}
//console.log(out1(10)(10,20,30));

var expr = "3+2*5";
// var result1 = "";
// for(var i = 0;i < expr.length; i++){
//    if(expr[i] == '/'){
//        resultExpr = "(" + expr[i-1] + ","+expr[i + 1] + ")"; 
//    } else if (){

//    }
// }
var resultExpr = "";
for(var i = 0 ;i < expr.length; i++) {
   if(expr.search("/")){
       resultExpr = 
   }
}





