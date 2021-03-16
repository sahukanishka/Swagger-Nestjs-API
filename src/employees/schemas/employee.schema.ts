import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
});
