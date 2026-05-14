import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { nome, email, oggetto, messaggio, recipientEmail } = await req.json();

    if (!nome || !email || !oggetto || !messaggio || !recipientEmail) {
      return NextResponse.json({ error: 'Campi mancanti' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${nome}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: recipientEmail,
      subject: oggetto,
      text: `Nome: ${nome}\nEmail: ${email}\n\n${messaggio}`,
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${messaggio.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Errore invio email:', err);
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 });
  }
}
