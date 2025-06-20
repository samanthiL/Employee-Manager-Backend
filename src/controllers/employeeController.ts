import { Request, Response } from 'express';
import EmployeeModel from '../models/EmployeeModel';

export const getEmployees = async (req: Request, res: Response) => {
    res.status(200).json({message:"get all"})
//   try {
//     const employees = await EmployeeModel.find();
//     res.json(employees);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch employees', error: err });
//   }
};

export const addEmployee = async (req: Request, res: Response) => {
  try {
    const newEmployee = await EmployeeModel.create(req.body);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add employee', error: err });
  }
}
// console.log("req",req)
// EmployeeModel.create(req.body) 
// .then(emp => res.json(emp))
// .catch(err =>res.json(err))
// };
