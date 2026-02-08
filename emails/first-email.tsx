import {
  Html,
  Head,
  Body,
  Button,
  Container,
  Text,
} from "@react-email/components";

export const FirstEmail = () => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            This is my first email
          </Text>
          <Text
            style={{ fontSize: 16, color: "blue", textDecoration: "underline" }}
          >
            here im just testing the email components and styling
          </Text>
          <Button
            href="https://www.google.com"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: 10,
              borderRadius: 5,
            }}
          >
            Click me
          </Button>
        </Container>
      </Body>
    </Html>
  );
};
