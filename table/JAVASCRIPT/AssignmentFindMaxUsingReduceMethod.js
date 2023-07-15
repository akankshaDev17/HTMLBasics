const arr=[1,45,78,67,56];
const max=arr.reduce(
    (accumulator,currentValue)=>Math.max(accumulator,currentValue)
);
console.log(max);