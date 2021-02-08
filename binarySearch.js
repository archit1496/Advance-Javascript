// using recursion
function binarySearch(array,target){
    let start=0;
    let end=array.length-1;
    let mid=Math.floor((end-start)/2)
    if(target ==array[mid])
    {
        return true
    }
    else if(start>=end)
    {
        return false
    }
    else if(target>array[mid])
    {
        return binarySearch(array.splice(mid+1,end),target)
    }
    else if(target<array[mid])
    {
        return binarySearch(array.splice(start,mid),target)
    }
}

console.log(binarySearch([1,2,3,9,13,14],2))

// without recursion

function binarySearch(array,target){
    let start=0;
    let end=array.length-1;
    let mid=Math.floor((start+end)/2)
    while(array[mid]!==target && start<=end)
    {
        if(target<array[mid])
        {
            end=mid-1
        }
        else{
            start=mid+1
        }
        mid=Math.floor((start+end)/2);
    }
    return array[mid]===target?mid:-1;
}