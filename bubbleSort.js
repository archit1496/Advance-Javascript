function bubbleSort(arr) {
    let array = arr;
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x <array.length-1 ; x++) {
            if (array[x] > array[x + 1]) {
                [array[x],array[x+1]]=[array[x+1],array[x]]
              
            }

        }
    }
    return array;
}

console.log(bubbleSort([100, 10, 20, 3, 40, 200, 30]))
