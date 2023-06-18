const express = require('express');
const { addTeacher, getAllTeachers, getTeacherById, updateTeacher, deleteTeacher, loginTeacher, searchTeacher, getTeacherSalary, sendMail } = require('../controller/teacherController');
const router = express.Router();

router.post('/add-teacher',addTeacher);
router.get('/get-teacher',getAllTeachers);
router.get('/get-teacher-by-id/:id',getTeacherById);
router.put('/update-teacher-by-id/:id',updateTeacher);
router.delete('/delete-teacher-by-id/:id',deleteTeacher);
router.post('/login-teacher',loginTeacher);
router.post('/search-teacher',searchTeacher);
router.post('/get-salary-by-id',getTeacherSalary);
router.get('/send_mail',sendMail);



module.exports = router