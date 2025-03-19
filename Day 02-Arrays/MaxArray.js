
let numarray = [-1,-5,-3,-8]
console.log(numarray)



if (numarray.length === 0) {
    console.log("Array is empty.");
} else
{
    let max =numarray[0];
    numarray.forEach((n)=>
        {
            if(max<n)
            {
                max = n
            }
            
        })
        console.log("Max of the Array is:" +max)
}

