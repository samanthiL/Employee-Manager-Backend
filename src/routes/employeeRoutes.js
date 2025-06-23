const {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  employeeFindById
} = require('../controllers/employeeController');
const { validateAddEmployee, validateUpdateEmployee } = require("../middleware/validateEmployee");

const express = require('express');

const router = express.Router();

router.get('/', getEmployees);
router.post('/', validateAddEmployee,addEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', validateUpdateEmployee,updateEmployee);
router.get('/:id',employeeFindById)
module.exports = router;