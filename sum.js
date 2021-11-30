function sum(arr){
    
    var Sum=0;
    for(var i=0;i<arr.length;i++){
        var a=[];
        Sum=Sum+arr[i];
        a.push(Sum);
    }
    return a;
}
console.log(sum([1,2,3,4,5,6,7,8]));
