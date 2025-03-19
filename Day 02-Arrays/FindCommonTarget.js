let a = [4, 5, 6, 3, 7];
let b = [8, 3, 2, 1, 5];

let output1 = `a = [${a.join(', ')}]`;
let output2 = `b = [${b.join(', ')}]`;
console.log(output1);
console.log(output2);

a.forEach((elementA, indexA) => {
    b.forEach((elementB, indexB) => {
        if (elementA === elementB) {
            console.log(`Common Element: ${elementA}, Index in 'a': ${indexA}, Index in 'b': ${indexB}`);
        }
    });
});