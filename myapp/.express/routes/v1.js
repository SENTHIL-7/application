var express = require('express');
var router = express.Router();

const EmployeeController = require('../controllers/employee.controller');
router.get('/getEmployees', EmployeeController.getEmployees);
router.post('/createEmployee', EmployeeController.createEmployee);
router.get('/getRole', EmployeeController.getRole);
router.get('/getDesignation', EmployeeController.getDesignation);
router.post('/deleteEmployee', EmployeeController.deleteEmployee);
router.post('/getEmployee', EmployeeController.getEmployee);
router.post('/updateEmployee', EmployeeController.updateEmployee);

module.exports = router;
