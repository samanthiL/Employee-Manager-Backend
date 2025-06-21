const {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  employeeFindById
} = require('../controllers/employeeController');
const express = require('express');

const router = express.Router();

router.get('/', getEmployees);
router.post('/', addEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', updateEmployee);
router.get('/:id',employeeFindById)
module.exports = router;