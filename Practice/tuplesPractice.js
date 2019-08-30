// tuples syntax in typescript
var aTuple = [1, "num", true, [1, 2, 3], { key: "value" }];
aTuple.forEach(function (element) {
    console.log(typeof (element));
    if ((typeof element) == "object") {
        var temp = element;
        console.log(temp);
    }
});
