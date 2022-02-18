

  //next part
 
 //1. Get the first item, the middle item and the last item of the array

  var myArray = ['Rodel', 'Mike', 'Ronnie', 'Betus'];

  function firstAndLast(array) {
  
  var firstItem = myArray[0];
  var lastItem = myArray[myArray.length-1];
  
   var objOutput = {
     first : firstItem,
     last : lastItem
    };
  
  return objOutput;
  }
  
  var display = firstAndLast(myArray);
  
  console.log(display);

  //2. Add your name to the end of the friends array, and add another name to beginning.

  //PUSH METHOD
  let a=['First item', 'Second item', 'Third item'];
  a.push("fourth name");
  console.log(a);





  //unshift
  const arr = ['First item', 'Second item', 'Third item'];

const arrLength = arr.unshift('Urgent item 1', 'Urgent item 2');

console.log(arrLength);
console.log(arr); 

//CONCADE METHOD
const arr1 = ['?', '?'];
const arr2 = ['?', '?'];

const arr3 = arr1.concat(arr2);
console.log(arr3);

//. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
var s = [1, 12, 123, 1]                    
avg = s.join('').length / s.length      
console.log(avg)


var myarray=[11,22,33,44,55]
//write a code to count the elements in the array . Don’t use length property
//Declare an empty array;
var c=[34,5,667,8,89,89,];
console.log(c.length);
function arrylength(s){
  var length=0;
while(c[length]!==undefined){
  length++;
}
return length;
}
arrylength(c);
     

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
"rajkumar",
"rajith",
"ramu",
"raij",
"ravi"
]
let friends2=[
"raj",
"gugan",
"thivager",
]
var plus=friends1+friends2

//total
let marks=[78,79,67,90,67];
((a)=>{
  total=0;
  for(let i in marks){
    total+=a[i]

  }
})(marks);
//average

