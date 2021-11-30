function prime(arr){
    var a=[];
    for(i=0;i<arr.length;i++){
        var b =0;
        for(j=2;j<arr[i];j++){
            if(arr[i]%j===0){
                b=b+1;
            }
            
            }
            if(b===0){
                a.push(arr[i]);
        }
    }
    return a;
}
console.log(prime([3,4,5,15,16,24,31,32]));