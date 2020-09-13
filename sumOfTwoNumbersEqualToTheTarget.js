function sumofTwoNumbers(array, target) {
    let list = {};

    for (let x = 0; x < array.length; x++) {
        debugger
        let search=target-array[x];
        if (list[search]!=undefined) {
            return [(list[search]),x]
        }
        else{
            let item=array[x]
            list[item] = x;
           
        }

    }
    // for(let x=0;x<array.length;x++)
    // {
    //     if(list[array[x]]==array[x+1])
    //     {
            
    //     }
    // }
    //console.log(list)
}
console.log(sumofTwoNumbers([2,7,11,15],9));
