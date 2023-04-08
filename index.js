const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Atheel")
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

  mongoose.connect('mongodb+srv://sms:sms2023@sms.qjsicyg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

  
  
  
  
  
  



