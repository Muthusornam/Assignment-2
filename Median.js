function median(arr,arr1){
    var a=arr.concat(arr1);
    a.sort();
    b=a.length;
    if(b%2===1){
        return a[(b/2)-.5];
    }
    else{
        return (a[(b/2)]+a[((b/2)-1)])/2;
    }
   
}
console.log(median([6,7,8,9],[1,2,3,4]));
