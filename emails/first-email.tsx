import { Html, Head, Body } from "@react-email/components";

export const FirstEmail = () => {
  return (
    <Html>
      <Head />
      <Body>
        <h1 className="text-red-500 font-bold text-2xl">
          This is my first email
        </h1>
        <p className="text-blue-500 font-bold text-2xl">
          here im just testing the email components and styling
        </p>
      </Body>
    </Html>
  );
};
