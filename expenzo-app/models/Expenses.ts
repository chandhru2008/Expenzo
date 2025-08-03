import mongoose, { Schema, Document } from 'mongoose';

export interface IExpenses extends Document {
  item: string;
  cost: number;
}

const ExpensesSchema = new Schema<IExpenses>({
  item: { type: String, required: true },
  cost: { type: Number, required: true },
});

export default mongoose.models.ExpensesSchema || mongoose.model<IExpenses>('Expenses', ExpensesSchema);