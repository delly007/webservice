const express = require('express');
const router = express.Router();
const Student = require('../models/students');

//Getting all
router.get('/', async(request, response) => {
    try {
        const students = await Student.find();
        response.json(students);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

//Get one
router.get('/:id', getStudent, (request, response) => {
    response.json(response.student);
});

//Create one
router.post('/', async(request, response) => {
    const student = new Student({
        _id: request.body._id,
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        phone: request.body.phone,
        dob: request.body.dob,
        gender: request.body.gender,
        year: request.body.year,
        faculty: request.body.faculty
    });
    try {
        const newStudent = await student.save();
        response.status(201).json(newStudent);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

//Updating
router.patch('/:id', getStudent, async(request, response) => {
    if (request.body.firstname != null) {
        response.student.firstname = request.body.firstname;
    }
    if (request.body.lastname != null) {
        response.student.lastname = request.body.lastname;
    }
    if (request.body.email != null) {
        response.student.email = request.body.email;
    }
    if (request.body.phone != null) {
        response.student.phone = request.body.phone;
    }
    if (request.body.dob != null) {
        response.student.dob = request.body.dob;
    }
    if (request.body.gender != null) {
        response.student.gender = request.body.gender;
    }
    if (request.body.year != null) {
        response.student.year = request.body.year;
    }
    if (request.body.faculty != null) {
        response.student.faculty = request.body.faculty;
    }
    try {
        const updatedStudent = await response.student.save();
        response.status(201).json(updatedStudent);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

//Deleting
router.delete('/:id', getStudent, async(request, response) => {
    try {
        await response.student.remove();
        response.json({ message: 'Student Deleted Successfully' });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

//find a student by ID
async function getStudent(request, response, next) {
    let student;
    try {
        student = await Student.findById(request.params.id);
        if (student == null) {
            return response.status(404).json({ message: "Cannot find student." });
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }

    response.student = student;
    next();
}

module.exports = router;