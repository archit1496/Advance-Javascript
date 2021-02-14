function mergeSort(array){
    if(array.length<2){
        return array
    }
    let mid=Math.floor((array.length)/2);
    let left=mergeSort(array.slice(0,mid));
    let right=mergeSort(array.slice(mid));
    return (merge(left,right))

}

function merge(arr1,arr2){
    let result=[];
    let arr1Pointer=0;
    let arr2Pointer=0;
    while(arr1Pointer<arr1.length && arr2Pointer<arr2.length){
      if(arr1[arr1Pointer]<arr2[arr2Pointer])
      {
        result.push(arr1[arr1Pointer]);
        arr1Pointer++;
      }
      else if(arr1[arr1Pointer]>arr2[arr2Pointer])
      {
        result.push(arr2[arr2Pointer]);
        arr2Pointer++;
      }
    }
    while(arr1Pointer<arr1.length){
            result.push(arr1[arr1Pointer]);
            arr1Pointer++;
    }
    while(arr2Pointer<arr2.length){
            result.push(arr2[arr2Pointer]);
            arr2Pointer++;
    }
    return result;

    
}

mergeSort([1,3,11,4]);