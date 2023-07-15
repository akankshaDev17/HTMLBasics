const person={
    FirstName:"Aashu",
    Age:21,
    LastName:"Chauhan",
    fullName:function(){
   return this.FirstName +" "+this.LastName;
    }

}
console.log(person.fullName());