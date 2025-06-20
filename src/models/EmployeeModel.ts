import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
  fname: string;
  lname: string;
  email: string;
  phoneNo: number;
  gender: string;
}

const EmployeeSchema: Schema<IEmployee> = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  gender: { type: String, required: true },
});

const EmployeeModel = mongoose.model<IEmployee>('Employee', EmployeeSchema);
export default EmployeeModel;
