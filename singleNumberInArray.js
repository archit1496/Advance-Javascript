function findSingleNumberInArray(arr) {
    let array = arr;
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array.length - 1; y++) {
            if (array[y] > array[y + 1]) {
                let temp = array[y];
                array[y] = array[y + 1];
                array[y + 1] = temp;
            }
        }
    }
    for (let y = 0; y < array.length; y = y + 2) {
        if (y == array.length - 1) {
            return array[y]
        }
        if (array[y] == array[y + 1]) {

        }
        else {
            return array[y];
        }
    }

}
console.log(findSingleNumberInArray([1,2,2,3,1]))