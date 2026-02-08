"use client";

import { useActionState, useState } from "react";
import { FormState, submitTestEmail } from "./form-actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SendMailForm = () => {
  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(submitTestEmail, {});
  const [feedbackDismissed, setFeedbackDismissed] = useState(false);

  const clearFeedback = () => setFeedbackDismissed(true);

  const showFeedback =
    !feedbackDismissed && (currentState.errors || currentState.message);

  return (
    <div>
      <h1 className="text-xl mb-4">React Email + Resend</h1>
      <form action={formAction} onSubmit={() => setFeedbackDismissed(false)}>
        <div className="flex gap-2 mb-2">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="h-10 text-base min-w-96"
            disabled={isPending}
            onFocus={clearFeedback}
            onChange={clearFeedback}
          />
          <Button
            type="submit"
            className="h-10 border text-base"
            disabled={isPending}
          >
            {isPending ? "..." : "Send Email"}
          </Button>
        </div>
        {showFeedback && currentState.errors && (
          <p className="text-red-500 text-sm">{currentState.errors}</p>
        )}
        {showFeedback && currentState.message && (
          <p className="text-green-500 text-sm">{currentState.message}</p>
        )}
      </form>
    </div>
  );
};

export default SendMailForm;
