'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export type TourFormData = {
  name: string;
  email: string;
  phone: string;
  childAgeGroup: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
};

export async function sendTourEmail(data: TourFormData) {
  await resend.emails.send({
    from: 'Mill Creek Home Childcare <hello@millcreekhomechildcare.com>',
    to: ['bfali414@gmail.com'],
    replyTo: data.email,
    subject: 'New Daycare Tour Request',
    html: `
      <h2>New Daycare Tour Request</h2>

      <p><strong>Parent Name:</strong> ${data.name}</p>
      <p><strong>Email Address:</strong> ${data.email}</p>
      <p><strong>Phone Number:</strong> ${data.phone}</p>
      <p><strong>Child’s Age Group:</strong> ${data.childAgeGroup}</p>
      <p><strong>Preferred Tour Date:</strong> ${data.preferredDate}</p>
      <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>

      <hr />

      <p><strong>Additional Notes / Questions:</strong></p>
      <p>${data.notes || 'None provided'}</p>
    `,
  });
}
