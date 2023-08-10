import { NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req) => {
  try {
    return console.log("TESTING");
  } catch (err) {
    return NextResponse.json({ err: err.message });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const { checkout_token } = body;
  try {
    const transactionId = await axios.post(
      process.env.API_URL,
      {
        transaction_id: checkout_token,
        order_id: "JKLM4321",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: process.env.PUBLIC_API_KEY,
          password: process.env.PRIVATE_API_KEY,
        },
      }
    );
    return NextResponse.json({ transactionId: transactionId.data.id });
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
};
