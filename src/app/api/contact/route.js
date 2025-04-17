import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Check required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Sanitize and validate email (simple validation beyond the front-end check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address format" },
        { status: 400 }
      );
    }

    // Create email content with better formatting
    const mailSubject = subject || `New Contact Form Submission from ${name}`;
    const emailContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Form Submission</title>
<style>
body {
font-family: Arial, sans-serif;
line-height: 1.6;
color: #333;
max-width: 600px;
margin: 0 auto;
padding: 20px;
}
.header {
background-color: #FFC200;
color: #333;
padding: 15px;
border-radius: 5px 5px 0 0;
}
.content {
padding: 20px;
border: 1px solid #ddd;
border-top: none;
border-radius: 0 0 5px 5px;
}
.field {
margin-bottom: 15px;
}
.label {
font-weight: bold;
display: inline-block;
width: 80px;
}
.message-box {
background-color: #f9f9f9;
padding: 15px;
border-radius: 5px;
margin-top: 20px;
}
</style>
</head>
<body>
<div class="header">
<h2>New Contact Form Submission - Beyond The Books</h2>
</div>
<div class="content">
<div class="field">
<span class="label">Name:</span> ${name}
</div>
<div class="field">
<span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
</div>
<div class="field">
<span class="label">Phone:</span> ${phone || "Not provided"}
</div>
<div class="field">
<span class="label">Subject:</span> ${subject || "Not provided"}
</div>
<div class="message-box">
<h3>Message:</h3>
<p>${message.replace(/\n/g, "<br>")}</p>
</div>
<p style="margin-top: 30px; font-size: 12px; color: #777;">
This email was sent from the contact form on Beyond The Books website. To reply directly to the sender, please use their email address: <a href="mailto:${email}">${email}</a>
</p>
</div>
</body>
</html>
`;

    // Gmail-specific transporter configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Additional settings for better deliverability
      tls: {
        rejectUnauthorized: true, // Verify TLS/SSL certificates
        ciphers: "SSLv3",
      },
      debug: false, // Set to true for troubleshooting
      logger: false, // Set to true for detailed logs
    });

    // Whitelist the recipient domain to improve deliverability
    await transporter.verify();

    // Email options with improved headers and structure for Gmail
    const mailOptions = {
      from: {
        name: "Beyond The Books Website",
        address: process.env.EMAIL_USER,
      },
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: mailSubject,
      html: emailContent,
      replyTo: {
        name: name,
        address: email,
      },
      // Gmail ignores most custom headers but these might help with other providers
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "High",
        "X-Contact-Form": "Beyond The Books Website",
      },
      // Text version is important for spam prevention
      text: `
New Contact Form Submission
---------------------------
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "Not provided"}

Message:
${message}

This email was sent from the contact form on Beyond The Books website.
`.trim(),
      // These DSN options request delivery status notifications
      dsn: {
        id: `contact-form-${Date.now()}`,
        return: "headers",
        notify: ["success", "failure", "delay"],
        recipient: process.env.EMAIL_USER,
      },
    };

    // Send email with improved error handling
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);

      // Log additional information for troubleshooting
      if (info.accepted) console.log("Accepted:", info.accepted);
      if (info.rejected) console.log("Rejected:", info.rejected);
      if (info.pending) console.log("Pending:", info.pending);

      return NextResponse.json(
        { message: "Message sent successfully", id: info.messageId },
        { status: 200 }
      );
    } catch (mailError) {
      console.error("Mail sending error:", mailError);
      throw new Error(`Mail error: ${mailError.message}`);
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
