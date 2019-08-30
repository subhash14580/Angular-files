class Greetings{
    public strProp: string;
    private numProp:number;
    protected safeProp: any = "Some safe Locker here";

    // protected can be accessed only in the child classess not within the class

    anyProp : any; // public property
    
}

interface Something{
    Worked() : string;
}
class SpecialGreeting extends Greetings implements Something{
    constructor() {
        super();
    }
    public Worked():string {
        return "Worked a lot";
    }
}

var objGreetins = new Greetings();

objGreetins.strProp = "subhash";

console.log(objGreetins);

