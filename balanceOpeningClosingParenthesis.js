

//using array

function balancedParentheses(string)
{
    let array=[];
    let map={
        "{":"}",
        "[":"]",
        "(":")"
    }
    for(let x=0;x<string.length;x++)
    {
        if(string[x]=="{" || string[x]=="(" || string[x]=="[")
        {
            array.push(string[x]);
        }
        else{
            let last=array.pop();
            if(string[x]!==map[last])
            {
                return false;
            }
        }
    }
    return true;
}
console.log(balancedParentheses("(){}"));
console.log(balancedParentheses("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));
console.log(balancedParentheses("({(()))}}"));