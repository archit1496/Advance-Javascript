

//time Complexity O(n)
//space Complexity O(1)

function reverse(string){
    let result="";
    for(let char of string)
    {
        result=char+result;
    }
    return result
}

//OR

function reverseAString(string)
{
    return string.split("").reverse().join("");
}