module.exports=[14747,(e,a,l)=>{a.exports=e.x("path",()=>require("path"))},24361,(e,a,l)=>{a.exports=e.x("util",()=>require("util"))},3819,e=>{"use strict";var a=e.i(44387);async function l({to:e,subject:o,html:i}){let s=process.env.SMTP_PASS||process.env.RESEND_API_KEY;if(!s)return console.log("📧 [EMAIL MOCK] Would send email:"),console.log(`  To: ${e}`),console.log(`  Subject: ${o}`),console.log(`  Body: ${i.substring(0,200)}...`),{success:!0,mock:!0};try{let l=a.default.createTransport({host:process.env.SMTP_HOST||"smtp.resend.com",port:parseInt(process.env.SMTP_PORT||"465"),secure:!0,auth:{user:process.env.SMTP_USER||"resend",pass:s}}),n=await l.sendMail({from:process.env.SMTP_FROM||"Talent Centre <notifications@talentcentre.co.za>",to:e,subject:o,html:i});return{success:!0,data:n}}catch(e){return console.error("Email send failed:",e),{success:!1,error:e}}}e.s(["buildLeadNotificationEmail",0,function(e){return`
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
            <span class="badge badge-${e.inquiryType}">${e.inquiryType.toUpperCase()}</span>
          </div>
          <div class="field">
            <label>Name</label>
            <value>${e.fullName}</value>
          </div>
          <div class="field">
            <label>Email</label>
            <value>${e.email}</value>
          </div>
          ${e.phone?`<div class="field"><label>Phone</label><value>${e.phone}</value></div>`:""}
          ${e.companyName?`<div class="field"><label>Company</label><value>${e.companyName}</value></div>`:""}
          <div class="field">
            <label>Source</label>
            <value>${e.source}</value>
          </div>
          <div class="field">
            <label>Message</label>
            <value>${e.message}</value>
          </div>
        </div>
        <div class="footer">
          <p>Talent Centre Consultancy • Auto-generated notification</p>
        </div>
      </div>
    </body>
    </html>
  `},"sendEmail",0,l])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bbpxo5._.js.map