function uniqueCharacter(string){
  let map={};

  for(let x=0;x<string.length;x++)
  {
      if(map[string[x]]!=undefined)
      {
         map[string[x]]=map[string[x]]+1;
      }
      else{
          map[string[x]]=1;
      }
  }
  for(let x=0;x<string.length;x++)
  {
    if(map[string[x]]==1)
    {
      return x;
      break;
    }
  }
}

console.log(uniqueCharacter("loveleetcode"));