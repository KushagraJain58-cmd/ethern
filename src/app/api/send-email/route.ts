// /app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const { fullName, email, phoneNumber, message, preferredContact } = await req.json()

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // e.g., "yourgmail@gmail.com"
                pass: process.env.EMAIL_PASS, // e.g., "your_app_password"
            },
        })

        const mailOptions = {
            from: `"${fullName}" <${email}>`,
            to: 'jainkushagra582@gmail.com',
            subject: `New Contact Form Submission from ${fullName}`,
            text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phoneNumber}
        Preferred Contact Method: ${preferredContact}

        Message:
        ${message}
      `,
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ success: true, message: 'Email sent successfully' })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 })
    }
}
