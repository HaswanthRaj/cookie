const mongoose = require('mongoose')

module.exports = {
  init:  () =>{
    
   mongoose.connect("mongodb+srv://cookie:uGuT2BHCyk3zpJbx@cluster0.wjs6y.mongodb.net/project0?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
    mongoose.connection.on("connected", () =>
     console.log("Connected to DataBase")
    )
    }}


