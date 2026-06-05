// Email utility - uses Resend when configured, falls back to console logging
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log('📧 [EMAIL MOCK] Would send email:');
    console.log(`  To: ${to}`);
    console.log(`  Subject: ${subject}`);
    console.log(`  Body: ${html.substring(0, 200)}...`);
    return { success: true, mock: true };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Talent Centre <notifications@talentcentre.co.za>',
        to: [to],
        subject,
        html,
      }),
    });

    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error };
  }
}

export function buildLeadNotificationEmail(lead: {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  inquiryType: string;
  message: string;
  source: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', Arial, sans-serif; background: #F8FAFC; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.07); }
        .header { background: linear-gradient(135deg, #0A1628, #0F2547); padding: 30px; text-align: center; }
        .header h1 { color: white; font-size: 20px; margin: 0; }
        .header p { color: #94A3B8; font-size: 13px; margin-top: 5px; }
        .body { padding: 30px; }
        .field { margin-bottom: 16px; }
        .field label { display: block; font-size: 12px; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .field value { display: block; font-size: 15px; color: #1E293B; font-weight: 500; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .badge-consultation { background: #DBEAFE; color: #1D4ED8; }
        .badge-inquiry { background: #E0E7FF; color: #4338CA; }
        .badge-partnership { background: #FEF3C7; color: #D97706; }
        .footer { padding: 20px 30px; background: #F8FAFC; text-align: center; font-size: 12px; color: #94A3B8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏢 New Lead Received</h1>
          <p>Talent Centre Lead Management</p>
        </div>
        <div class="body">
          <div class="field">
            <label>Type</label>
            <span class="badge badge-${lead.inquiryType}">${lead.inquiryType.toUpperCase()}</span>
          </div>
          <div class="field">
            <label>Name</label>
            <value>${lead.fullName}</value>
          </div>
          <div class="field">
            <label>Email</label>
            <value>${lead.email}</value>
          </div>
          ${lead.phone ? `<div class="field"><label>Phone</label><value>${lead.phone}</value></div>` : ''}
          ${lead.companyName ? `<div class="field"><label>Company</label><value>${lead.companyName}</value></div>` : ''}
          <div class="field">
            <label>Source</label>
            <value>${lead.source}</value>
          </div>
          <div class="field">
            <label>Message</label>
            <value>${lead.message}</value>
          </div>
        </div>
        <div class="footer">
          <p>Talent Centre Consultancy • Auto-generated notification</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
