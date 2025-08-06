import mongoose, { Schema, Document } from 'mongoose';

export interface IExpectedExpenses extends Document {
  item: string;
  cost: number;
  place? : string;
}

const IExpectedExpensesSchema = new Schema<IExpectedExpenses>({
  item: { type: String, required: true },
  cost: { type: Number, required: true },
  place: { type: String, require: false }
});

export default mongoose.models.ExpensesSchema || mongoose.model<IExpectedExpenses>('Expenses', IExpectedExpensesSchema);