import { Flex, Heading, Text, Button, SmartLink, Input, TextArea } from "@once-ui-system/core";

export const metadata = {
  title: "Join Beta - Stratus Interactive",
  description: "Join the beta program for Stratus Productivity and be among the first to experience the future of AI-powered productivity.",
};

export default function BetaPage() {
  return (
    <Flex direction="column" center fillWidth maxWidth="m" padding="l" gap="l">
      <Flex direction="column" center textAlign="center" gap="m">
        <Heading variant="display-strong-xl" onBackground="neutral-strong">
          Join the Beta
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak" wrap="balance">
          Be among the first to experience Stratus Productivity and help shape the future of AI-powered productivity.
        </Text>
      </Flex>

      <Flex direction="column" gap="l" maxWidth="s" fillWidth>
        <Flex direction="column" gap="m">
          <Heading variant="display-strong-l">What to Expect</Heading>
          <Text onBackground="neutral-weak">
            • Early access to Stratus Productivity features<br/>
            • Direct feedback channels to our development team<br/>
            • Exclusive insights into our development process<br/>
            • Priority support and feature requests<br/>
            • Special recognition as founding beta users
          </Text>
        </Flex>

        <Flex direction="column" gap="m">
          <Heading variant="display-strong-l">Beta Application</Heading>
          <Text onBackground="neutral-weak">
            Tell us about yourself and how you plan to use Stratus Productivity. We're looking for users who are passionate about productivity and excited to help us build something amazing.
          </Text>
        </Flex>

        <Flex direction="column" gap="m" as="form">
          <Flex direction="column" gap="s">
            <Text variant="label-strong-s">Name *</Text>
            <Input placeholder="Your full name" required />
          </Flex>

          <Flex direction="column" gap="s">
            <Text variant="label-strong-s">Email *</Text>
            <Input type="email" placeholder="your.email@example.com" required />
          </Flex>

          <Flex direction="column" gap="s">
            <Text variant="label-strong-s">Current Productivity Tools</Text>
            <Input placeholder="e.g., Notion, Todoist, Obsidian, etc." />
          </Flex>

          <Flex direction="column" gap="s">
            <Text variant="label-strong-s">How do you plan to use Stratus Productivity? *</Text>
            <TextArea 
              placeholder="Tell us about your workflow, challenges, and what you're hoping to achieve with AI-powered productivity tools."
              rows={4}
              required
            />
          </Flex>

          <Flex direction="column" gap="s">
            <Text variant="label-strong-s">What excites you most about AI-powered productivity?</Text>
            <TextArea 
              placeholder="Share your thoughts on how AI could enhance your productivity and creativity."
              rows={3}
            />
          </Flex>

          <Button type="submit" variant="solid" size="l" marginTop="m">
            Submit Application
          </Button>
        </Flex>

        <Flex direction="column" gap="m" marginTop="l">
          <Text variant="body-default-s" onBackground="neutral-weak" textAlign="center">
            We'll review applications and reach out within 1-2 weeks. Beta access will be granted on a rolling basis as we prepare for launch.
          </Text>
        </Flex>

        <Flex center gap="m" marginTop="l">
          <Button as={SmartLink} href="/productivity" variant="ghost" size="m">
            Learn More About Stratus Productivity
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
} 