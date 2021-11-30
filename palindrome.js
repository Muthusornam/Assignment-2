function palindrome(arr){
    var a=[];
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i].toString();
        var b=arr[i].split("").reverse().join("");
        if(arr[i]===b){
            a.push(arr[i]);
        }
        
        }
        return a;
    }
    console.log(palindrome([11,'hello',12,'madam',33,44]));
