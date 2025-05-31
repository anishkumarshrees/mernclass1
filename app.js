const express=require("express")
const app=express()

app.get("/",function(req,res){
    // res.send("Hello World")
    res.json({
        anish:"hello k xa khbr"
    })
})

app.listen(3000,function(){
    console.log("Server is running on port 3000")
})









// const a= 10;


// console.log(a)

// //array
// const number=[10,20,30]
// //console.log(number[1]) first ko print hunxa
// //to calculate length
// console.log(number.length)

// //objects
// const person={
//     name : "anish",
//     age:23
// }
// //{key:value}
// console.log(person)