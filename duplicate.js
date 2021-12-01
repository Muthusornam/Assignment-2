function duplicates(arr){
    var a=[];
    for(i=0;i<arr.length;i++){
        if(a.length===0){
            a.push(arr[i]);
        }
        if(a.indexOf(arr[i])===-1){
            
            a.push(arr[i]);
        }
    }
    return a;
}
console.log(duplicates([1,2,1,3,3,5,6,55,43,55]));