import { NextResponse } from "next/server";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY || "");

const EMAIL_FROM = process.env.EMAIL_FROM || "";
const EMAIL_TO = process.env.EMAIL_TO || "";

export async function POST(request) {
  const body = await request.json();

  const message = `
    Nom : ${body.name}\r\n
    Email : ${body.email}\r\n
    message : \r\n${body.message.replace(/\n/g, "<br />")}
  `;

  const data = {
    to: EMAIL_TO,
    from: EMAIL_FROM,
    subject: body.subject,
    text: message,
    html: message.replace(/\r\n/g, "<br /><br />"),
  };

  try {
    await mail.send(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "ERROR OCCURRED" }, { status: 419 });
  }

  return NextResponse.json({ message: "OK" }, { status: 200 });
}
