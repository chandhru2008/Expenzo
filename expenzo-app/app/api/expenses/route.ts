import connectToDatabase from "@/lib/mongodb";
import Expenses from "@/models/Expenses";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { item, cost } = body;
        await connectToDatabase();
        const newExpenceItem = await Expenses.create({ item, cost });

        return NextResponse.json({ message: 'Expense Item Created Successfully', item: newExpenceItem }, { status: 201 })
    } catch (err) {
        return NextResponse.json({ message: 'Server error' + err }, { status: 500 });

    }
}