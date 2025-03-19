/*

    a= [1,2,3,4,5,6]
    target = 7
    a code to find the all pairs that sum up to the target
*/

let array = [1,2,3,4,5,6]
let target = 7

let usedPairs = new Set()

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            
            let pair = `${array[i]},${array[j]}`
            let reversePair = `${array[j]},${array[i]}`

            if (!usedPairs.has(pair) && !usedPairs.has(reversePair)) {
                console.log(`${array[i]} + ${array[j]} = ${target}`)
                usedPairs.add(pair)
            }
        }
    }
}
