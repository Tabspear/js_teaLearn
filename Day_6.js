//Call back

// function Convo(response){
//     console.log("I am fine")
//     response()
// }

// function response2(){
//     console.log("I am not fine")
// }

// function response3(){
//     console.log("Don't ask me that question!")
// }

// Convo(response2, response3)

//Call Stack( JavaScript uses it to track of code evaluating it line by line), it stacks functions up, Javascript always tries to empty the call stack.
//stack (Last In First Out)

// Event Loop(Javascript is single threaded, and runs in a loop, whenever it gets to something that would take long, it gets stuck there, then it would block any other thing from completing)

// Queue(first In First Out) Javascript runs code that is saved using asynchronous in the queue 

// Synchronous vs Asynchronous

// Asynchronous programming e.g  setTime out, 
// function cb(){
//     console.log("Timer is complete")
// }

// setTimeout(cb, 0)
// console.log("done with code")


// const converse = new promise((resolve, reject)=>{
//     resolve("How are you ?")
// })
// converse
// .then((val)=> console.log("asynchronous logging has val:", val))
// console.log("immediate logging")

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then((res)=> res.json)
.then((data)=>{
    console.log(data)
})

async function dispLay(url){
 let getApis = await fetch(url)
  let data = await getApis.json()
  console.log(data)
 data?.stats.map((item)=>alert(item.stat.name))
}
dispLay("https://pokeapi.co/api/v2/pokemon/ditto")