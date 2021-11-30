function upper(arr){
	var a=[];
	for(i=0;i<arr.length;i++){
	var c=arr[i].toLowerCase();
	var d=c.charAt(0).toUpperCase();
	let x=d+c.slice(1);
	a.push(x);
	}
	return a;
}
console.log(upper(["hello","welcome","on","Board"]));
