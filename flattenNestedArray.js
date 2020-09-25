function flattenNestedArray(array){
    if (array.length <= 0 || array == null)
        return array;
    const newArray=[];
    flatten(array,newArray);
    return newArray;
}

function flatten(array,newArray){
   
    for(let x=0;x<array.length;x++)
    {
        if(Array.isArray(array[x]))
        {
              flatten(array[x],newArray)
        }
        else if(array[x]!==null){
            newArray.push(array[x]);
        }
    }
}

console.log(flattenNestedArray([1,[[2],3,4,null],[[5]]]));
console.log("hello")