import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, location, priority, type, issue, reproduce } = body;

    console.log("Bug report received:", {
      name,
      email,
      location,
      priority,
      type,
    });

    // Check if email configuration is available
    const hasEmailConfig =
      process.env.GMAIL_USER &&
      process.env.GMAIL_APP_PASSWORD &&
      process.env.GMAIL_APP_PASSWORD !== "your-gmail-app-password-here";

    if (hasEmailConfig) {
      try {
        // Try to send email
        const nodemailer = await import("nodemailer");

        const transporter = nodemailer.default.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        // Email content
        const emailContent = `
          <h2>🐛 New Bug Report - HG Resume Craft</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #dc3545; margin-top: 0;">Bug Details</h3>
            <p><strong>Priority:</strong> <span style="color: ${getPriorityColor(
              priority
            )};">${priority}</span></p>
            <p><strong>Type:</strong> ${type}</p>
            <p><strong>Location:</strong> ${location}</p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Issue Description</h3>
            <p style="white-space: pre-wrap;">${issue}</p>
          </div>

          ${
            reproduce
              ? `
          <div style="background: #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #6c757d; margin-top: 0;">How to Reproduce</h3>
            <p style="white-space: pre-wrap;">${reproduce}</p>
          </div>
          `
              : ""
          }

          <div style="background: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0c5460; margin-top: 0;">Reporter Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 14px;">
            This bug report was automatically generated from HG Resume Craft application.
          </p>
        `;

        // Send email to you
        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: "tasleemhadiqa76@gmail.com",
          subject: `🐛 Bug Report: ${type} - ${priority} Priority`,
          html: emailContent,
        });

        console.log("Email sent successfully to tasleemhadiqa76@gmail.com");

        return NextResponse.json({
          success: true,
          message: "Bug report sent successfully via email!",
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Fall through to console logging
      }
    }

    // Fallback: Log to console (you can see this in your terminal)
    console.log("\n=== 🐛 BUG REPORT ===");
    console.log(`📧 From: ${name} (${email})`);
    console.log(`📍 Location: ${location}`);
    console.log(`⚠️  Priority: ${priority}`);
    console.log(`🏷️  Type: ${type}`);
    console.log(`📝 Issue: ${issue}`);
    if (reproduce) {
      console.log(`🔄 Reproduce: ${reproduce}`);
    }
    console.log(`⏰ Time: ${new Date().toLocaleString()}`);
    console.log("==================\n");

    return NextResponse.json({
      success: true,
      message: "Bug report received! Check the server console for details.",
    });
  } catch (error) {
    console.error("Error processing bug report:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process bug report. Please try again.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

function getPriorityColor(priority: string): string {
  switch (priority) {
    case "Critical":
      return "#dc3545";
    case "High":
      return "#fd7e14";
    case "Medium":
      return "#ffc107";
    case "Low":
      return "#28a745";
    default:
      return "#6c757d";
  }
}
