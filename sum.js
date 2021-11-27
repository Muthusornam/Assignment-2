function sum(arr){
    var Sum=0;
    for(var i=0;i<arr.length;i++){
        Sum=Sum+arr[i];
    }
    return Sum;
}
console.log(sum([1,2,3,4,5,6,7,8]));