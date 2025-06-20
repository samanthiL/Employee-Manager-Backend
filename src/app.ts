import express from 'express';
import employeeRoutes from './routes/employeeRoutes';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('API is running');
});
app.use('/employee', employeeRoutes);
export default app;