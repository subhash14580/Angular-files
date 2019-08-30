// function with different types of parameters
function UsingParam(pRequired, pDefault, pOPtional) {
    if (pDefault === void 0) { pDefault = "DBS-ID"; }
    var pRest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        pRest[_i - 3] = arguments[_i];
    }
    console.log(pRequired, "\n", pDefault, "\n", pOPtional, "\n", pRest);
}
UsingParam(true, "DBS-491735", 123, [123, 456, "SDF"]);
UsingParam(true, "DBS-491735", 123, 123, 456, "SDF");
//1)How to omit the optional parameters
UsingParam(true, "");
function array(arr) {
    console.log(arr);
}
function array2() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
array(['a', 'b', 'c', 'd']);
array2('a', 'b', 'c', 'd');
// function that return a function
function complicated() {
    console.log("Inside the function");
    return function () {
        console.log("Iam inside the (function inside the function)");
        return "something";
    };
}
//(complicated())();
var result = complicated();
//result();
//console.log(result());
// self-invokable functions
// syntax for invokable functions --- (function(){})();
(function () {
    console.log("A function");
    return function (param) {
        console.log("param is", param);
        return "u got it";
    };
})()("subhash");
// lambda functions
(function () {
    console.log("A function");
    return "A function";
});
(function () { return "a value"; });
var out = function (a) { return function (a, x, y) { return a + x + y; }; };
//console.log(out(10)(10,20,30));
var out1_lambda = function (a) { return function (x, y) { return x + y + a; }; };
var out1 = function (param1) {
    return function (param1, x, y) {
        return param1 + x + y;
    };
};
//console.log(out1(10)(10,20,30));
var expr = "3+2*5";
var result1 = "";
for (var i = 0; i < expr.length; i++) {
    if (expr[i] == "+") {
        result1 = ("(" + expr[i - 1] + "," + expr[i + 1] + ") => " + expr[i - 1] + "+" + expr[i + 1]);
        //console.log(result1);
    }
    else if (expr[i] == "-") {
        console.log("() => ", expr[i - 1], "-", expr[i + 1]);
    }
    if (expr[i] == "*") {
        result1 = result1 + "*" + expr[i + 1];
    }
}
console.log(result1);
