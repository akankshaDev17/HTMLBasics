function akanksha(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
    this.fullName=function(){
        return `${this.firstName} ${this.lastName}`;
    }
    this.getBirthYear=function(){
        return this.dob.getFullYear();
    }
};
const person1=new akanksha("Aashu","Chauhan","17-04-2002");
console.log(person1);
console.log(person1.getBirthYear());