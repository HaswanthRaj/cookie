const mongoose = require('mongoose')

module.exports = {
  init:  () =>{
    
   mongoose.connect("mongodb+srv://cookie:thecookie@cluster0.puzj7.mongodb.net/Data?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
    mongoose.connection.on("connected", () =>
     console.log("Connected to DataBase")
    )
    }}


