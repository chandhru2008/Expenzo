import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    await connectToDatabase();
    const newUser = await User.create({ name, email, password });

    return NextResponse.json({ message: 'User created', user: newUser }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Server error'+err }, { status: 500 });
  }
}