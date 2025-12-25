class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("İsim: "+this.name+ " Yaş: "+this.age)
    }
}

class Employee extends Person {
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        
        super(name,age);
        this.salary = salary;
    }
    showInfos(){ // Overriding
        console.log("İsim: "+this.name+ " Yaş: "+this.age+ " Maas: "+ this.salary)
    }
    toString(){ // Overriding
        console.log("Employee")
    }
    raiseSalary(amount){ // Extra
        this.salary +=amount;
    }
}

const emp = new Employee("Enes",23,45000);
emp.showInfos();
emp.raiseSalary(500);