import express from "express"
import { Book } from "../model.js";

const router = express.Router();
// to create a book model we need a new http  route with type of post
// post method is usually used to create a new host
// playing with mongodb is also a asynchronose function

router.post("/" , async ( request , response)=>{
    try {
        if(
            !request.body.title || 
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: "send all required fields: title, author, publishYear"
            })
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }
        const book = await Book.create(newBook)
        return response.status(201).send(book)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message : error.message})       
    }
} );

// route for get all books from database //

router.get("/", async (request,response)=>{
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        })

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
        
    }
});

// getting one books id from database /// 


router.get("/:id", async (request,response)=>{
    try {
        const { id }= request.params;
        const booke = await Book.findById(id);
        return response.status(200).json(booke)

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
        
    }
});

// update a book with mongoose  Route for update the book///

router.put("/:id", async (request, response)=> {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({message: "send all required fields: title,  author , publishYear"})
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body)

        if(!result){
            return response.status(404).json({message: "Book not found"})
        }
        return response.status(200).send({message: "Book updated successfully"})
    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
        
    }
})

// delete a book with mongoose /// route for delete a book 

router.delete("/:id" , async (request , response)=>{
    try {

        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({message: "Book not found"})
        }
        return response.status(200).send({message: "boom deleted successfully"})
        
    } catch (error) {
        console.log(error.message)
        
    }
}
    
);

export default router