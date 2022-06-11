// get sum of people's budget.
// create the function that takes an array with object and returns the sum
// of people's budgets.




function getBudgets(array){
  let sum=0;
  for(let i in array){
    sum += array[i].budget;
  }
    return sum;
  }
  let array = [
   { name: "John", age: 21, budget: 23000 },
   { name: "Steve", age: 32, budget: 40000 },
   { name: "Martin", age: 16, budget: 2700 }
  ];
  let result = getBudgets(array);
  console.log(result);