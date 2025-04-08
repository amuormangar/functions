//Given an array of strings, use a function to reverse all the elements in 
// the string in ascending order and the specific elements in descending order

function reverseArr(elements,descending){
    const sortedArr = elements.sort()
    
    const newArr = sortedArr.map((element,index)=>{if (descending.includes(index)){
        return element.split("").reverse().join("")

    }
    return element
 }) 
 return newArr
}
const elements= ["cats","dogs","horses","cows"]
const descending = [1]
const result = reverseArr(elements,descending)
console.log (result)

//Using JS functions and an array of numbers, return positive if an element within the
//  array is positive, negative if an element is negative, else zero

function  confirmNumbers(arr){
    arr.map(numbers=> {
        if(numbers > 0){
            return "positive"
        }
        if (numbers < 0){
            return "negative"
        }
    }

        
    )
}
   
const digits = [74,6,-8,2]
console.log(confirmNumbers(digits));

//Given an array of objects, where each object represents an employee with an id, 
// name, and salary property, write a function that returns a new array of employee 
// objects sorted by their salary in ascending order.


    let employees = {
        Amuor:{id:5345,salary:100000},
        Mary:{id:6865,salary:4000},
        James:{id:6327,salary:1000}
    }
    let sortedBysalary = Object.fromEntries(
        Object.entries(employees).sort(([,a],[,b]) =>a.salary - b.salary)
    )

console.log(sortedBysalary)


//Write a function that accepts an array of numbers and uses the forEach() method to 
// console.log each number multiplied by 2.
  function multiplyArr(array){
    const multipliedArr = []
   array.forEach(num => {
    multipliedArr.push(num * 2)
   });
   return multipliedArr
}
  const myNumbers = [1,2,3,4,5]
  console.log(multiplyArr(myNumbers));
  

 // Write a function that takes in an array of numbers and consoles the first four items
 //  multiplied by 8 and the last two added by 5. Console the array with the new values

  function numberArr(array){

    for (let i = 0; i< 4; i++){
        array[i] *= 8
    }
  for (let i = array.length -2;i < array.length;  i++){
        array[i] +=5
  }
return array
  }
  const numbers = [10,19,8,7,16,5,2,4]
  console.log(numberArr(numbers));

  
