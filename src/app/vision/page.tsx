import { Flex, Heading, Text, Button, SmartLink } from "@once-ui-system/core";
import { vision } from "@/resources";

export const metadata = {
  title: vision.title,
  description: vision.description,
};

export default function VisionPage() {
  return (
    <Flex direction="column" center fillWidth maxWidth="l" padding="l" gap="l">
      <Flex direction="column" center gap="m" style={{ textAlign: "center" }}>
        <Heading variant="display-strong-xl" onBackground="neutral-strong">
          Our Vision
        </Heading>
        <Text variant="display-default-m" onBackground="neutral-weak" wrap="balance">
          Building a comprehensive AI ecosystem that transforms how people live and work.
        </Text>
      </Flex>

      <Flex direction="column" gap="l" maxWidth="m">
        <Flex direction="column" gap="m">
          <Heading variant="display-strong-l">The Future of Productivity</Heading>
          <Text onBackground="neutral-weak">
            We envision a world where technology seamlessly enhances human capability without overwhelming it. 
            Our AI ecosystem will span software, hardware, and cloud infrastructure to create truly unified experiences.
          </Text>
        </Flex>

        <Flex direction="column" gap="m">
          <Heading variant="display-strong-l">Phase 1: Stratus Productivity</Heading>
          <Text onBackground="neutral-weak">
            Our flagship productivity app that unifies tasks, notes, events, and goals with intelligent AI support. 
            This foundation will demonstrate our approach to AI-first design and human-centered innovation.
          </Text>
        </Flex>

        <Flex direction="column" gap="m">
          <Heading variant="display-strong-l">Phase 2: Hardware Integration</Heading>
          <Text onBackground="neutral-weak">
            Smart devices and hardware that extend the digital experience into the physical world. 
            From intelligent displays to ambient computing devices, we'll create seamless bridges between digital and physical workflows.
          </Text>
        </Flex>

        <Flex direction="column" gap="m">
          <Heading variant="display-strong-l">Phase 3: Personal AI Ecosystem</Heading>
          <Text onBackground="neutral-weak">
            A comprehensive AI ecosystem that learns and adapts to individual users. Personal AI assistants, 
            predictive workflows, and intelligent automation that feels natural and enhances rather than replaces human creativity.
          </Text>
        </Flex>

        <Flex direction="column" gap="m">
          <Heading variant="display-strong-l">Our Principles</Heading>
          <Text onBackground="neutral-weak">
            • AI serves humans, not the other way around<br/>
            • Technology should feel invisible and intuitive<br/>
            • Privacy and user control are fundamental<br/>
            • Continuous learning and adaptation<br/>
            • Seamless integration across all touchpoints
          </Text>
        </Flex>

        <Flex center gap="m" marginTop="l">
          <Button as={SmartLink} href="/productivity" variant="solid" size="l">
            Explore Products
          </Button>
          <Button as={SmartLink} href="/beta" variant="ghost" size="l">
            Join the Journey
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
} 