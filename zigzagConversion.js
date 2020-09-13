function zigzagConversion(string, row) {
    let array = new Array(row).fill("");
    let index = 0;
    let step = 1;
    let finalString = "";
    // if (string.length <= 2) {
    //     return string;
    // }
    for (let x = 0; x < string.length; x++) {
        array[index] = array[index] + string[x];
        if (row > 1) {
            if (index == 0) step = 1;
            else if (index == row - 1) step = -1;

            index = index + step;
        }

    }
    for (let x = 0; x < row; x++) {
        finalString = finalString + array[x]
    }
    return finalString;
}

console.log(zigzagConversion("ab", 1))