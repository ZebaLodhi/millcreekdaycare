import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // ✅ Guard: ensure API key exists (prevents build failure)
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // ✅ Instantiate Resend INSIDE the handler (build-safe)
    const resend = new Resend(process.env.RESEND_API_KEY)

    const {
      name,
      email,
      phone,
      childAge,
      program,
      message,
    } = await request.json()

    // ✅ Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // ✅ Map program value to readable text
    const programLabels: Record<string, string> = {
      infant: 'Infant Care (6 weeks – 18 months)',
      toddler: 'Toddler Program (18 months – 3 years)',
      preschool: 'Preschool (3 – 5 years)',
    }

    const programText =
      program && programLabels[program]
        ? programLabels[program]
        : program || 'Not specified'

    const { data, error } = await resend.emails.send({
      from: 'Mill Creek Childcare <onboarding@resend.dev>',
      to: ['bfali414@gmail.com'], // replace with verified address later
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Child's Age:</strong> ${childAge || 'Not provided'}</p>
        <p><strong>Program Interest:</strong> ${programText}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
