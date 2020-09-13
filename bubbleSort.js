function bubbleSort(arr) {
    let array = arr;
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x <array.length ; x++) {
            if (array[x] > array[x + 1]) {
                let temp = array[x];
                array[x] = array[x + 1];
                array[x + 1] = temp;
            }

        }
    }
    return array;
}

console.log(bubbleSort([100, 10, 20, 3, 40, 200, 30]))