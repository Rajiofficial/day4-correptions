// // /*How to compare two JSON have the same properties without order?
// // var obj1 = { name: "Person 1", age:5 };
// // var obj2 = { age:5, name: "Person 1" };
// // */
const object1 = {
    name: 'ABC',
    address: 'India',
    age:77,
  };
     
   const object2 = {
    address: 'India',
    name: 'ABC',
    age:77,
  };
function isEqual(obj1,obj2){
 const a=JSON.stringify(obj1);
 const b=JSON.stringify(obj2);
 return a.split("").sort().join("")===b.split("").sort().join("");
}
console.log(isEqual(object1,object2))