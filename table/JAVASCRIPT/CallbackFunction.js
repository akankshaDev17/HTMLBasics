function greet(name,callback){
    console.log("Hi"+ name);
    callback();
}
function CallMe(){
    console.log("I am callback Function");
}
greet('Aashu',CallMe);