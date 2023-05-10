var express = require('express');
var router = express.Router();
const passport = require('passport');
require('./../middleware/passport')(passport);

const EmployeeController = require('../controllers/employee.controller');
const UserAccountController = require('../controllers/userAccount.controller');
router.post('/login', UserAccountController.login);
router.post('/refreshToken', UserAccountController.refreshToken);

router.get('/getEmployees', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployees);
router.post('/createEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.createEmployee);

router.get('/getDesignation', passport.authenticate('jwt', { session: false }), EmployeeController.getDesignation);
router.get('/getRole', passport.authenticate('jwt', { session: false }), EmployeeController.getRole);
router.post('/deleteEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.deleteEmployee);

router.post('/getEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployee);
router.post('/updateEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.updateEmployee);
router.post('/checkEmail', passport.authenticate('jwt', { session: false }), EmployeeController.checkEmail);


// router.get('/getEmployees', EmployeeController.getEmployees);
// router.post('/createEmployee', EmployeeController.createEmployee);

// router.get('/getDesignation', EmployeeController.getDesignation);
// router.get('/getRole', EmployeeController.getRole);
// router.post('/deleteEmployee', EmployeeController.deleteEmployee);

// router.post('/getEmployee', EmployeeController.getEmployee);
// router.post('/updateEmployee', EmployeeController.updateEmployee);
module.exports = router;
