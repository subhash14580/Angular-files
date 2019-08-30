var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReadOnly = /** @class */ (function () {
    function ReadOnly() {
        this.readOnly = "Hello";
    }
    return ReadOnly;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printDescription = function () {
        console.log(Person.desc);
    };
    Person.prototype.printEmployeeNameAndAge = function (name, age) {
        console.log("Parent class is :: Employee name and age is", name, age);
    };
    Person.desc = "Every person is a social animal";
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //overrriding
    Employee.prototype.printEmployeeNameAndAge = function (name, age) {
        console.log("Child Class is  :: Employee name and age is", name, age);
    };
    Employee.prototype.printEmpId = function () {
        console.log("Employee id is ", this.empId);
    };
    return Employee;
}(Person));
var obj1 = new Employee();
obj1.empId = 491735;
obj1.printEmployeeNameAndAge("subhash", 22);
obj1.printEmpId();
obj1.printDescription();
