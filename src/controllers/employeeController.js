const EmployeeModel = require("../models/EmployeeModel");

const getEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employees", error: err });
  }
};

const addEmployee = async (req, res) => {
  try {
    // Get the employee with the highest ID (as a string like "001", "002")
    const lastEmployee = await EmployeeModel.findOne().sort({ id: -1 });

    // Parse and increment ID
    let nextId = 1;
    if (lastEmployee && lastEmployee.id) {
      nextId = parseInt(lastEmployee.id, 10) + 1;
    }

    // Format ID to 3 digits with leading zeros
    const formattedId = String(nextId).padStart(3, '0');

    // Merge new formatted ID into request body
    const newEmployeeData = { ...req.body, id: formattedId };

    const newEmployee = await EmployeeModel.create(newEmployeeData);
    res.status(201).json(newEmployee);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to add employee", error: err.message });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const employee = await EmployeeModel.findOneAndDelete({id});
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const employee = await EmployeeModel.findOneAndUpdate({id}, req.body);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee updated successfully" });
    // const updatedEmployee = await employee.findById(id)
    // res.status(200).json(updatedEmployee)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const employeeFindById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const employee = await EmployeeModel.findOne({ id: id });
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
  employeeFindById,
};
