
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    EmployeeName: {
        type: String
    },
    EmployeePosition:{
        type: String
    },
    EmployeeAge: {
        type: Number
    }
},
{
    collation: 'employee_info'
});

module.exports= mongoose.model('Employee', Employee);