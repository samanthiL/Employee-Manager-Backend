import express from 'express';
import mongoose from 'mongoose';

const app = express();
const cors = require("cors");
const EmployeeModel = require('./models/Employee')

// const corsOptions = {
//   origin:["http://localhost:5173"]
// }
// // mongodb://localhost:27017/
// app.use(cors(corsOptions))

app.use(express.json())
app.use(cors())
app.get('/api', (req,res) => {
  res.json({ fruits :["apple","orange","banana"]});
});

mongoose.connect("mongodb://localhost:27017/employee");

app.post('/register',(req,res)=>{
EmployeeModel.create(req.body)
.then(employee => res.json(employee))
.catch(err =>res.json(err))
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
