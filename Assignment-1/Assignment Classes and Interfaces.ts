import iOperations from './InterfaceIOperations';

class ReadOnly {
     readOnly : string;
    constructor() {
        this.readOnly = "Hello";
    }
}
export class Person {
    public name:string;
    public age:number;
    public gender:string;
    static desc:string = "Every person is a social animal";
    //final keyword is not present in type script
    

    printDescription(){
        console.log(Person.desc);
    }
    printEmployeeNameAndAge(name:string,age:number){
        console.log("Parent class is :: Employee name and age is",name,age);
    }

}
export class Employee extends Person implements iOperations{
    public empId:number;
    public deptName:string;
    public empManager:string;

    //overrriding
    printEmployeeNameAndAge(name:string,age:number){
        console.log("Child Class is  :: Employee name and age is",name,age);
    }

    printEmpId() {
        console.log("Employee id is ",this.empId);
    }

} 

