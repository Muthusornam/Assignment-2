function rotate(arr,k){
    var a=[];
    var b;
    var len=arr.length;
    if(k===len){
        return arr;
    }
    for(i=0;i<arr.length;i++){
        b=(i+len-k)%len;
        a.push(arr[b]);
    }
    return a;
}
console.log(rotate([1,2,3,4,5],4));
