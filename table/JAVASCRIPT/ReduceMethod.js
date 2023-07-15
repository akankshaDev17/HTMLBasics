const arr=[1,2,3,4];
const initialValue=0;
const sumwithinitial=arr.reduce(
    (accumulator,currentvalue)=>accumulator+currentvalue,initialValue
);
console.log(sumwithinitial);