/*
let array1 =[1, 2,30]
let array2= [5,6]
let array3 =[8,5,3]
*/

console.log("Nested Array using forEach: ")
let arr = [[1, 2,30],[5,6],[8,5,3]]
console.log("original array: ")
console.log(arr)

arr.forEach((n) =>
{
    n.forEach((i)=>
    {
        console.log(i)
    })
})

console.log("Nested Array as a Single Array: ")
let flattenedArray = arr.flat();
console.log(flattenedArray); 


console.log("Nested Array using for loop: ")
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}