import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Solo questi destinatari sono ammessi: senza whitelist chiunque potrebbe
// usare l'endpoint per inviare email arbitrarie tramite il nostro SMTP.
const ALLOWED_RECIPIENTS = ['info@perseo.biz', 'urgente@perseo.biz'];

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function POST(req: NextRequest) {
  try {
    const { nome, email, oggetto, messaggio, recipientEmail } = await req.json();

    if (!nome || !email || !oggetto || !messaggio) {
      return NextResponse.json({ error: 'Campi mancanti' }, { status: 400 });
    }

    const to = ALLOWED_RECIPIENTS.includes(recipientEmail) ? recipientEmail : ALLOWED_RECIPIENTS[0];

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
      to,
      subject: oggetto,
      text: `Nome: ${nome}\nEmail: ${email}\n\n${messaggio}`,
      html: `
        <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <hr />
        <p>${escapeHtml(messaggio).replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Errore invio email:', err);
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 });
  }
}
