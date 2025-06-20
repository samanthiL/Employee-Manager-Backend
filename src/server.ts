// import express from 'express';
// import mongoose from 'mongoose';

// const app = express();
// const cors = require("cors");
// import EmployeeModel, { IEmployee } from './models/EmployeeModel'; // adjust path
// // const corsOptions = {
// //   origin:["http://localhost:5173"]
// // }
// // // mongodb://localhost:27017/
// // app.use(cors(corsOptions))
// app.use(express.json())
// app.use(cors())
// app.get('/api', (req,res) => {
//   res.json({ fruits :["apple","orange","banana"]});
// });

// mongoose.connect("mongodb://localhost:27017/employee")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("Connection error", err));

// app.post('/register', async (req: Request, res: Response) => {
//   try {
//     const employee: IEmployee = await EmployeeModel.create(req.body);
//     res.json(employee);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import EmployeeModel, { IEmployee } from './models/EmployeeModel'; // adjust path
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes';

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

 mongoose.connect("mongodb://localhost:27017/employee")
 .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });


  app.get('/apit', (req, res) => {
  res.send('API is running');
});
app.use('/employee', employeeRoutes);
// app.post('/register', async (req: Request, res: Response) => {
//   try {
//     const employee: IEmployee = await EmployeeModel.create(req.body);
//     res.json(employee);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });