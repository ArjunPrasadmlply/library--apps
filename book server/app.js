const express = require("express");
const BookData = require("./src/model/BookData");

const app = express();
const cors = require('cors');

app.use(cors());

 app.get('/',function(req,res){
   res.send("API response correctly")
    
    })
    
    app.get('/books',function(req,res){
        res.header("Acces-Control-Allow-Origin","*");
        res.header('Acces-Control-Allow-Methods:GET,POST,PUT,DELETE');
        BookData.find().then(function(books){
            console.log(books)
        //    res.send(book);
    
    
        })

        
    })
    
    
    app.listen(5000,()=>{
        console.log("server started...")
    
    });