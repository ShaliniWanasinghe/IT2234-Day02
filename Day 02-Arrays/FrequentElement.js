// [4,8,3,4,3,2,1,8,4]

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];
console.log(arr)


let frequencyMap = {};


for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequencyMap[element]) {
        frequencyMap[element]++; 
    } else {
        frequencyMap[element] = 1; 
    }
}


let mostFrequentElement;
let maxFrequency = 0;

for (let key in frequencyMap) {
    if (frequencyMap[key] > maxFrequency) {
        mostFrequentElement = key;
        maxFrequency = frequencyMap[key];
    }
}

console.log("Most frequent element in the array is: " + mostFrequentElement);
