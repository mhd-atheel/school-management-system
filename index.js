const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const StudentRouter = require('./router/studentRouter.js')
const TeacherRouter = require('./router/teacherRouter.js')
const app = express();



app.use(express.json());


dotenv.config()

app.get('/',(req,res)=>{
    res.send("Hello Atheexxxxl")
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

app.use('/student',StudentRouter)
app.use('/teacher',TeacherRouter)

  // app.post('/users', async (req, res) => {
  //   try {
  //       const student =  new Student({
  //         name: req.body.name,
  //         email: req.body.email,
  //         tel:req.body.tel
  //       });
  //       await student.save();
  //       res.status(201).json(student);
  //     } catch (error) {
  //       res.status(500).json({ error: error.message });
  //     }
  // });

  // app.get('/get',async(req,res)=>{
  //       const user = await Student.find()
  //       res.json(user);

  // })


  
  
  
  
  
  



