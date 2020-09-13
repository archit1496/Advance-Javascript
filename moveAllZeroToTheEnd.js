function moveAllZeroToTheEnd(array)
{
    let newArray=[];
    let noOfZero=0;
    for(let x=0;x<array.length;x++)
    {
        if(array[x]!=0)
        {
            newArray.push(array[x]);
        }
        else{
            noOfZero++;
        }
    }
    for(let x=0;x<noOfZero;x++)
    {
        newArray.push(0);
    }
    console.log(newArray);
}

moveAllZeroToTheEnd([0,1,3,0,11])