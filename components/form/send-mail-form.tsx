"use client";
import { useActionState, ViewTransition } from "react";
import { FormState, submitTestEmail } from "./form-actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SendMailForm = () => {
  const [currentState, formAction, isPending] = useActionState<
    FormState,
    FormData
  >(submitTestEmail, {});

  return (
    <div>
      <h1 className="text-xl mb-4">React Email + Resend</h1>
      <form action={formAction}>
        <ViewTransition>
          <div className="flex gap-2 mb-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              required
              className="h-10 text-base min-w-96"
              disabled={isPending}
            />
            <Button
              type="submit"
              className="h-10 border text-base"
              disabled={isPending}
            >
              {isPending ? "..." : "Send Email"}
            </Button>
          </div>
          {currentState.errors && (
            <p className="text-red-500 text-sm">{currentState.errors}</p>
          )}
          {currentState.message && (
            <p className="text-green-500 text-sm">{currentState.message}</p>
          )}
        </ViewTransition>
      </form>
    </div>
  );
};

export default SendMailForm;
