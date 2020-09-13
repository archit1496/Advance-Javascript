function comparison(array1,array2)
{
    let map={};
    for(let x=0;x<array1.length;x++)
    {
       // map[array1[x]]=true;
        if(!map[array1[x]])
        {
            const item=array1[x];
            map[item]=true;
        }
    }
    for(let y=0;y<array2.length;y++)
    {
        // if((Object.keys(map).indexOf(array2[y])>-1))
        // {
        //     return true
        // }
        if(map[array2[y]])
        {
            return true
        }
    }
    return false

}   
console.log(comparison(["a","b","c","d"],["s","u","y"]));