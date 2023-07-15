function person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
};
person.prototype.fullName=function(){
    return`Welcome ${firstName} + ${lastName}`
};
person.prototype.getBirthDate=function(){
    return this.dob.getFullYear();

};
const person1=new person("Aashu","Chauhan","17-04-2002");
console.log(person1);
console.log(person1.getBirthDate());

