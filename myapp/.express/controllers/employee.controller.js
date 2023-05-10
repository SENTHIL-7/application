const Employee = require("../models").employee;
const Role = require("../models").role;
const Designation = require("../models").designation;
const getEmployees = async function (req, res) {
  let err;
  [err, response] = await to(Employee.findAll({
    include: [
      { model: Role },
      { model: Designation }
    ]
  }));
  console.log('getEmployees: ', response);
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployees = getEmployees;

const createEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, employee] = await to(Employee.create(body))
  // console.log('createEmployee: ', employee);
  if (err) return ReE(res, err, 422);
  return ReS(res, { employee });
}
module.exports.createEmployee = createEmployee;
const getRole = async function (req, res) {
  let err;
  [err, role] = await to(Role.findAll())
  // console.log('role', role,)
  if (err) return ReE(res, err, 422);
  return ReS(res, { role });
}
module.exports.getRole = getRole;

const getDesignation = async function (req, res) {
  let err;
  [err, designation] = await to(Designation.findAll())
  // console.log('getDesignation', designation,)
  if (err) return ReE(res, err, 422);
  return ReS(res, { designation });
}
module.exports.getDesignation = getDesignation;
const deleteEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, deleteEmp] = await to(Employee.destroy({
    where: {
      id: body.id
    }
  }));
  // console.log('deleteEmployee', deleteEmp,)
  if (err) return ReE(res, err, 422);
  return ReS(res, { deleteEmp });
}
module.exports.deleteEmployee = deleteEmployee;

const getEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, employeeDetails] = await to(Employee.findOne({
    where: {
      id: body.id
    }
  }));
  // console.log('getEmployee: ', employeeDetails);
  if (err) return ReE(res, err, 422);
  return ReS(res, { employeeDetails });
}
module.exports.getEmployee = getEmployee;
const updateEmployee = async function (req, res) {
  let err;
  let body = req.body;
  [err, employeeDetails] = await to(Employee.update(body, {
    where: {
      id: body.id
    }
  }));
  // console.log('updateEmployee: ', employeeDetails);
  if (err) return ReE(res, err, 422);
  return ReS(res, { employeeDetails });
}
module.exports.updateEmployee = updateEmployee;