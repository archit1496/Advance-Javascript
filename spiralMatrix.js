function matrix(row,col){
    let sr=0,er=row-1,sc=0,ec=col-1;
    let count=0;
    let finalMatrix=[];
    let start=1;
    let arr=new Array(row);
    for(let x=0;x<row;x++)
    {
        arr[x]=new Array(col);
    }

    for(let x=0;x<row;x++)
    {
        for(let y=0;y<col;y++)
        {
            arr[x][y]=start;
            start++
        }
    }

    while(sr<=er && sc<=ec)
    {
        //print sr
        for(let x=sc;x<=ec;x++)
        {
            finalMatrix.push(arr[sr][x]);
            count++
        }
        sr++;
        if(count==row*col) return finalMatrix;
        //print ec
        for(let y=sr;y<=er;y++)
        {
            finalMatrix.push(arr[y][ec]);
            count++;
        }
        ec--;
        if(count==row*col) return finalMatrix;
        
        //print er
        for(let x=ec;x>=sc;x--)
        {
            finalMatrix.push(arr[er][x]);
            count++
        }
        er--;
        if(count==row*col) return finalMatrix;

        //print sc
        for(let y=er;y>=sr;y--)
        {
            finalMatrix.push(arr[y][sc]);
            count++;
        }
        sc++;
        if(count==row*col) return finalMatrix;

    }
    // for(let x=0;x<row;x++)
    // {
    //     for(let y=0;y<col;y++)
    //     {
    //         console.table(arr[x][y]) 
            
    //     }
    // }
    
}

console.log(matrix(3,3))