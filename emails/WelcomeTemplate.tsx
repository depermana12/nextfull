import {
  Button,
  Html,
  Body,
  Container,
  Text,
  Link,
  Section,
  Head,
  Img,
  Hr,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Hello {name}, your account now ready, happy shopping!</Preview>
        <Body className="bg-[#f6f9fc] font-sans">
          <Container className="mx-auto mb-16 bg-white py-5">
            <Section className="px-12">
              <Img
                src="http://localhost:3000/next.svg"
                width="49"
                height="21"
                alt="Next.js"
              />
              <Hr className="my-5 border-gray-300" />
              <Text className="text-left text-base leading-6 text-gray-700">
                Thank you for registering with us!
              </Text>
              <Text className="text-left text-base leading-6 text-gray-700">
                If you have any questions or need assistance, please feel free
                to reach out to our support team.
              </Text>
              <Text className="text-left text-base leading-6 text-gray-700">
                We are thrilled to have you on board and can&apos;t wait for you
                to start exploring all the features we offer.
              </Text>
              <Button
                className="text-[#556cd6]"
                href="http://localhost:3000/api/auth/signin"
              >
                View your Dashboard
              </Button>

              <Text className="text-left text-base leading-6 text-gray-700">
                — Mgt team
              </Text>
              <Hr className="my-5 border-gray-300" />
              <Text className="text-xs leading-4 text-gray-500">
                Jakarta, Indonesia
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
