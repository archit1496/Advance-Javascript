function lastWordLength(string) { 
    if (string == ' ')
        return 0;

    let splitString = string.split(" ");
    for (let x = splitString.length - 1; x >= 0; x--) {
        if (splitString[x] != "") {
            return splitString[x].length;
        }

    }


}



console.log(lastWordLength("hello world"))