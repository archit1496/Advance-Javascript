function matrix(matrix,target){
    let row=matrix.length-1;
    let col=matrix[0].length-1;
    
    if(target<matrix[0][0] || target>matrix[row][col])
      return false;

    let x=0;
    let y=col;
    while(x<=row && y>=0)
    {
        if(matrix[x][y]==target)
        {
           return true
        }
        else if(matrix[x][y]>target)
        {
            y--;
        }
        else if(matrix[x][y]<target)
        {
            x++;
        }
    }
    return false;

    
    
}

console.log(matrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],20))