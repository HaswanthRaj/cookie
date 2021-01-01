const mongoose = require('mongoose')

module.exports = {
  init:  () =>{
    
   mongoose.connect("mongodb+srv://cookie:cookieuser@cluster0.wjs6y.mongodb.net/cookie?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
    mongoose.connection.on("connected", () =>
     console.log("Connected to DataBase")
    )
    }}


