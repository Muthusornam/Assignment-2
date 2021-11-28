function upper(arr){
	var a=[];
	for(i=0;i<arr.length;i++){
	var c=arr[i].toUpperCase();
	a.push(c);
	}
	return a;
}
console.log(upper(["hello","welcome","on","Board"]));
