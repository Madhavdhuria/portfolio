import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASS,
    },
  });

  console.log("entered");

  try {
    let info = await transporter.sendMail({
      from: `${data.firstname} ${data.lastname} <${data.email}>`,
      to: "madhavdhuria556@gmail.com",
      subject: "work related",
      text: `Name: ${data.firstname} ${data.lastname}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
