'use server';

import nodemailer from 'nodemailer';

export type TourBookingData = {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

export type BookingResponse = {
  success: boolean;
  message: string;
};

export async function submitTourBooking(
  data: TourBookingData
): Promise<BookingResponse> {
  // Validate required fields
  if (!data.parentName || !data.email) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  // Format the child age for display
  const childAgeLabels: Record<string, string> = {
    infant: 'Infant (6 weeks - 12 months)',
    toddler: 'Toddler (1 - 3 years)',
    preschool: 'Preschool (3 - 5 years)',
  };

  // Format the preferred time for display
  const timeLabels: Record<string, string> = {
    morning: 'Morning (9:00 AM - 12:00 PM)',
    afternoon: 'Afternoon (1:00 PM - 4:00 PM)',
  };

  // Format the date for display
  const formattedDate = data.preferredDate
    ? new Date(data.preferredDate).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Not specified';

  try {
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bfali414@gmail.com',
      replyTo: data.email,
      subject: `New Tour Request from ${data.parentName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #48D1CC; padding-bottom: 10px;">
            New Daycare Tour Request
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a5f; margin-top: 0;">Parent Information</h3>
            <p><strong>Name:</strong> ${data.parentName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a5f; margin-top: 0;">Tour Details</h3>
            <p><strong>Child's Age Group:</strong> ${childAgeLabels[data.childAge] || 'Not specified'}</p>
            <p><strong>Preferred Date:</strong> ${formattedDate}</p>
            <p><strong>Preferred Time:</strong> ${timeLabels[data.preferredTime] || 'Not specified'}</p>
          </div>

          ${
            data.notes
              ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a5f; margin-top: 0;">Additional Notes</h3>
            <p>${data.notes.replace(/\n/g, '<br>')}</p>
          </div>
          `
              : ''
          }

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This tour request was submitted through the Mill Creek Home Childcare website.
          </p>
        </div>
      `,
      text: `
New Daycare Tour Request

Parent Information:
- Name: ${data.parentName}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}

Tour Details:
- Child's Age Group: ${childAgeLabels[data.childAge] || 'Not specified'}
- Preferred Date: ${formattedDate}
- Preferred Time: ${timeLabels[data.preferredTime] || 'Not specified'}

${data.notes ? `Additional Notes:\n${data.notes}` : ''}

---
This tour request was submitted through the Mill Creek Home Childcare website.
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: 'Thank you! Your tour request has been submitted. We will contact you within 24 hours to confirm your visit.',
    };
  } catch (error) {
    console.error('Error sending tour booking email:', error);
    return {
      success: false,
      message: 'There was an error submitting your request. Please try again or contact us directly.',
    };
  }
}
