function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    } 
    var i = 0;
    for(var j=1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }  
    }
    return i+1;
}

countUniqueValues([1,1,2,2,4,4,5,6,6,6,7,8,8])
countUniqueValues([])
