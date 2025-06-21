const mongoose = require('mongoose');
const Employee = require('./models/EmployeeModel');
const employeesData = require('./employees.json');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/employee';

(async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected for seeding');
    const docs = employeesData.map(emp => ({
    id: emp.id.padStart(3, '0'),
  first_name: emp.first_name,
  last_name: emp.last_name,
  email: emp.email,
  number: emp.number,
  gender: emp.gender,
  photo: emp.photo
    }));

    await Employee.insertMany(docs);
    console.log('Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
})();
