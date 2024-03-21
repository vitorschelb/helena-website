import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { contactFormSchema } from '@/app/shared/Data'
import { limiter } from '@/app/api/config/limiter'

export async function POST(request: Request) {
  const body = await request.json()

  const feedback = contactFormSchema.parse(body)

  const remaining = await limiter.removeTokens(1)

  if (remaining < 0) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }

  const { nome, email, mensagem } = feedback

  const user = process.env.EMAIL
  const pass = process.env.EMAIL_PASS

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  })

  try {
    await transporter.sendMail({
      from: user,
      to: 'vitorschelb.contact@gmail.com',
      replyTo: email,
      subject: `Contact form submission from ${nome}`,
      html: `
        <p>Name: ${nome} </p>
        <p>Email: ${email} </p>
        <p>Message: ${mensagem} </p>`,
    })

    return NextResponse.json({ message: 'success' })
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred' })
  }
}
