import express from "express";
import mongoose from "mongoose";
import { PORT , mongoDBURL } from "./config.js"
import booksroute from "./Routes/BookRoutes.js"
import cors from "cors"

// const cors = require('cors');

const app = express();

// middle ware for handling cors policy 
//  allow all origins with defalut of cors(*)
// app.use(cors( ))




// second option allow custom origin
// app.use(
//     cors({
//         origin: "http://localhost:5555/books",
//         methods: ["GET","POST","PUT","DELETE"],
//         allowedHeaders: ["Content-Type"]
//     })
// )
app.use(cors( ))


// middleware for parsing request body
app.use(express.json())

// app.listen(PORT, ()=>{
//     console.log(`App is listening to port: ${PORT}`)
// })



app.use("/books", booksroute)



app.get("/" , (request, response)=>{
    console.log(request)
    return response.status(234).send("bismillah to the mern stack")

});



mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("app connected to data base");
    app.listen(PORT, ()=>{
        console.log(`app is listening to the port : ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error)
})








