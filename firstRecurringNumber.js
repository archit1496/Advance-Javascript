function firstRucurringNumber(arr)
{
    let list={};
    for(let x=0;x<arr.length;x++)
    {
        if(!list[arr[x]])
        {
            const item=arr[x];
            list[item]=1;
        }
        else{
            return arr[x]
            list[arr[x]]+=1;
        }
    }
    return undefined
    console.log(list);
}
console.log(firstRucurringNumber([2,5,0,1,0,2,3,5,1,2,4]))