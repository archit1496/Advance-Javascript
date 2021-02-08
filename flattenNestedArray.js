function flatten(array)
{
    let newArray=[];
   
    function flattenArray(array,newArray)
    {
        for(let x=0;x<array.length;x++)
        {
            if(Array.isArray(array[x]))
            {
                flattenArray(array[x],newArray)
            }
            else{
                newArray.push(array[x])
            }
        }
        return newArray;
    }
    return flattenArray(array,newArray)
}

console.log(flatten([1,[[2],3,4],[[5,6,[9]]]]));
console.log("hello")