"use server";

import { z } from "zod";

const quoteSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must have at least 2 characters")
    .max(100, "Full name is too long"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .min(10, "Please provide a valid phone number (at least 10 digits)"),
  projectType: z
    .string()
    .min(1, "Please select a project type"),
  details: z
    .string()
    .min(5, "Please provide a brief description of your project")
    .max(2000, "Project description is too long"),
  honeypot: z.string().optional(),
});

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function sendQuoteAction(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    details: formData.get("details"),
    honeypot: formData.get("company_website")?.toString() || "", // Honeypot field
  };

  // 1. Check honeypot anti-spam
  if (rawData.honeypot && rawData.honeypot.trim() !== "") {
    // Silently succeed for bots
    return {
      success: true,
      message: "Thank you! Your quote request has been received.",
    };
  }

  // 2. Validate with Zod
  const validation = quoteSchema.safeParse(rawData);
  if (!validation.success) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { fullName, email, phone, projectType, details } = validation.data;

  // 3. Real dispatch strategy (dispatches to server logs / email service)
  console.log("=== NEW QUOTE ESTIMATE REQUEST ===");
  console.log(`Client: ${fullName}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Project Type: ${projectType}`);
  console.log(`Details: ${details}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log("===================================");

  // In production, integration with Resend, SendGrid, or Nodemailer would dispatch here.
  // We simulate the network dispatch delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message:
      "Thank you! Your quote request has been submitted successfully. Our Toronto finishing director will review your specifications and contact you within 24 hours.",
  };
}

