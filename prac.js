//total
let marks=[78,79,67,90,67];
(function(add){
  let total=0;
  for(let i=0;i<add.length;i++){
    total+=add[i];

}
console.log(total)
})(marks);
//average

function addtwonumbers(a,b){
  console.log(a,b);
  let c=a+b;
  return c;
}
var v=addtwonumbers(45,67)
console.log(v)

//anonamus function
let add=function(a,b){

  console.log(a,b);
  let c=a+b;
  return c;
}
var j=addtwonumbers(45,67)
console.log(j)


var a=[80,89,78,87,68];
function total(s){
  let sum=0;
  for(i=0;i<a.length;i++){
    sum+=a[i]
  }
return sum
}
k=total(a);
console.log(k)

function avg(d){
  x=(d/5.0);
  return x;
}
let n=avg(k);
console.log(n)

function grade(avgs){
  if(avgs>=90 && avgs<=100){
    console.log("grade a")
  }else if(avgs>=80 && avgs<90){
      console.log("grade b")
  }else if(avgs>=70 && avgs<80){
    console.log("grade c")
  }else if(avgs>=60 && avgs<70){
    console.log("grade d")
  }else{
    console.log("not grade")
  }
  return avgs
}
let z =grade(n);
console.log(z)

