const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config()

app.get('/',(req,res)=>{
    res.send("Hello Atheel")
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB SuccessFully');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

  
  
  
  
  
  



