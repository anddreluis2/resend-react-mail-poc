"use server";

import { Resend } from "resend";
import z from "zod";
import { FirstEmail } from "@/emails/first-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  success?: boolean;
  message?: string;
  errors?: string;
};

const formSchema = z.object({
  email: z.email(),
});

export async function submitTestEmail(
  prevState: FormState,
  formData: FormData,
) {
  const { data, success } = formSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!success)
    return {
      success: false,
      errors: "sorry, our dev isn't smart enough to handle this form",
    };

  const { error } = await resend.emails.send({
    from: "anddreluis98@resend.dev",
    to: [data.email],
    subject: "This is my first email",
    react: FirstEmail(),
  });

  if (error) {
    console.error(error);
    return {
      success: false,
      errors: "failed to send email",
    };
  }

  return {
    success: true,
    message: "Email sent successfully",
  };
}
