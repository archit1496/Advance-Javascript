function sumofTwoNumbers(array, target) {
    let list = {};

    for (let x = 0; x < array.length; x++) {
        let search=target-array[x];
        if (list[search]!=undefined) {
            return [(list[search]),x]
        }
        else{
            let item=array[x]
            list[item] = x;
           
        }

    }
}
console.log(sumofTwoNumbers([2,7,11,15],9));
