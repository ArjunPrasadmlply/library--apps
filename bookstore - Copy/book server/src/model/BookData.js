const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Nandhu:Nandhu2004@cluster0.hursawp.mongodb.net/bookdb");

 //schema
 const Schema = mongoose.Schema;
 const bookSchema = new Schema ({
bookname:String,
author:String,
genre:String,
image:String



 });
 //model creation
 var BookData = mongoose.model('booklist',bookSchema);
 module.exports = BookData;