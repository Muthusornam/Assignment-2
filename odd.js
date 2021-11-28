function odd(arr){
    var a=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            a.push(arr[i])
        }
        
    }
    return a;
}
console.log(odd([1,2,3,4,5,]));