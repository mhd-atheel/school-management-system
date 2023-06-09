const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const StudentRouter = require('./router/studentRouter.js');
const TeacherRouter = require('./router/teacherRouter.js');
const GradeRouter = require('./router/gradeRouter.js');
const LeaveRouter = require('./router/leavesRoute.js');
const AwardsRouter = require('./router/awardsRoute.js');
const SalaryRouter = require('./router/salaryRouter.js');
const PenaltyRouter = require('./router/penaltyRouter.js');
const ComplaintsRouter = require('./router/complaintsRouter.js');
const SiblingsRouter = require('./router/siblingsRouter.js');
const app = express();
app.use(cors());




app.use(express.json());


dotenv.config();

app.get('/',(req,res)=>{
    res.send(">>>>>>>>> Hello Atheexxxxl");
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


// Routes
app.use('/student',StudentRouter);
app.use('/teacher',TeacherRouter);
app.use('/grade',GradeRouter);
app.use('/leave',LeaveRouter);
app.use('/award',AwardsRouter);
app.use('/salary',SalaryRouter);
app.use('/penalty',PenaltyRouter);
app.use('/complaint',ComplaintsRouter);
app.use('/sibling',SiblingsRouter);






  
  
  
  
  
  



