
const express = require('express');
const app = express();

const EmployeeRouter = express.Router();

let Employee = require('../models/Employee');


EmployeeRouter.route('/add').post(function (req , res) {
    let employee = new Employee(req.body);
    employee.save()
        .then(employee => {
            res.status(200).json({'Employee': 'Employee has been added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

EmployeeRouter.route('/').get(function (req, res) {
    Employee.find(function (err, employees){
        if(err){
            console.log(err);
        }
        else {
            res.json(employees)
        }
    });
});

EmployeeRouter.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Employee.findById(id, function (err, employee ){
        res.json(employee)
    });
});

EmployeeRouter.route('/update/:id').post(function (req, res){
    Employee.findById(req.params.id, function(err, employee){
        if(!employee)
            res.status(400).send("Record not found");
        else {
            employee.EmployeeName = req.body.EmployeeName;
            employee.EmployeePosition = req.body.EmployeePosition;
            employee.EmployeeAge = req.body.EmployeeAge;

            employee.save().then(employee => {
                res.json('Update complete');
            })
            .catch(err => {
                res.status(400).send("Unable to update the database");
            });
        }
    });
});

EmployeeRouter.route('/delete/:id').get(function (req, res){
    Employee.findByIdAndRemove({_id: req.params.id}, function(err, employee){
        if(err) res.json(err);
        else res.json('Succesfully removed');
    });
});

module.exports = EmployeeRouter;