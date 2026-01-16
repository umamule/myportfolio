import axios from "axios";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ================== EMAIL TRANSPORT ================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

/* ================== TELEGRAM ================== */
async function sendTelegramMessage(token, chat_id, message) {
  try {
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id,
      text: message,
    });
    return true;
  } catch (err) {
    console.error("Telegram Error:", err.message);
    return false;
  }
}

/* ================== EMAIL TEMPLATE ================== */
const generateEmailTemplate = (name, email, userMessage) => `
  <h2>New Contact Form Message</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong></p>
  <p>${userMessage}</p>
`;

/* ================== SEND EMAIL ================== */
async function sendEmail({ name, email, message }) {
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
      to: process.env.EMAIL_ADDRESS,
      subject: `New Message from ${name}`,
      replyTo: email,
      html: generateEmailTemplate(name, email, message),
    });
    return true;
  } catch (err) {
    console.error("Email Error:", err.message);
    return false;
  }
}

/* ================== API ================== */
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email (MAIN)
    const emailSuccess = await sendEmail({ name, email, message });

    // Send Telegram (OPTIONAL)
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      await sendTelegramMessage(
        process.env.TELEGRAM_BOT_TOKEN,
        process.env.TELEGRAM_CHAT_ID,
        `New message from ${name}\nEmail: ${email}\n\n${message}`
      );
    }

    if (!emailSuccess) {
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("API Error:", err.message);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
