// import React from "react"

// function Sample() {
//     const Firstname = "Jeremiah" ;
//     const Lastname = "Egbune" ;
//     const date = new Date()
//     let timeOfDay;
//     if (date.getHours() < 12) {
//         timeOfDay = "Morning";
//     } else if(date.getHours() <= 12 && date.getHours() < 17) {
//         timeOfDay = "Afternoon";
//     } else{
//         timeOfDay = "night";
//     }

//     return (
//         <div>
//             <h1> Hello {Firstname} {Lastname} </h1>
//             <h1> it is currently {date.getHours() % 12} O'clock  </h1>
//             <h1>Good {timeOfDay} {Date()}</h1>
//         </div>
//     //     <div>
//     //          <h2>The time {date}</h2> 

//     //     </div>
//         )

// }
// export default Sample

// const nums = [1,2,3,4,5,]
// console.log(nums)
// const squared = nums.map(function(item) {
//     return item * item
//     // console.log(item) 
// })
// console.log(squared)

// const names = ["alice", "bob", "charlie", "danielle"];
// // const uppercase = names.map( function(name) {
// const uppercase = names.map( (name)=> {
//     return `${name[0].toUpperCase()}${name.slice(1)}`
//     // return name[0].toUpperCase() + name.slice(1)
// })
 
// console.log(uppercase) 

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// const para = pokemon.map(list => `<p>${list}</p>`)

// console.log(para)
  