
//Primitive 
//
// Reference
//Arrays 
//Objects
//collections 


//The stack
let numOne = 50;
console.log(numOne)
let numTwo = 50;
console.log(numTwo)


//The Heap
let objectOne = {
    name :"Chan",
    age : 50
}

let objectTwo = objectOne;
console.log(objectTwo)
console.log(objectOne)
//Array
let restaurants = ["Dominos", "Crispy Chicken", "KFC","Mc Donalds"]
console.log(restaurants)
const num = [2,"five",true, function cycle(){
    console.log("Ayee!!! I am riding")
},6,]
console.log(num)
 const empty = [];
 console.log(empty)

 const oddNum = new Array('one', 'two', )
 console.log(oddNum)

 //Indexing 
 //Indexes start from zero
 const concatArr = restaurants.concat(num)


 console.log(concatArr)

 //splice and slice methods

 console.log(concatArr.splice(0,2,"x",'you'))
 console.log(concatArr)

