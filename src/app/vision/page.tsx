"use client";

import { Column, Heading, Text, Button, SmartLink, Flex } from "@once-ui-system/core";
import { vision } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

const structure = [
  { title: "The Future of Productivity", display: true, items: [] },
  { title: "Phase 1: Stratus Productivity", display: true, items: [] },
  { title: "Phase 2: Hardware Integration", display: true, items: [] },
  { title: "Phase 3: Personal AI Ecosystem", display: true, items: [] },
  { title: "Our Principles", display: true, items: [] },
];

const tocConfig = {
  tableOfContent: { display: true, subItems: false },
};

export default function VisionPage() {
  return (
    <Column maxWidth="m">
      <TableOfContents structure={structure} about={tocConfig} />
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column id="The Future of Productivity" fillWidth minHeight="160" vertical="center" marginBottom="32">
            <Heading className={styles.textAlign} variant="display-strong-xl">
              Our Vision
            </Heading>
            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
              Building a comprehensive AI ecosystem that transforms how people live and work.
            </Text>
          </Column>

          <Column id="The Future of Productivity" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m">
              The Future of Productivity
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              We envision a world where technology seamlessly enhances human capability without overwhelming it. Our AI ecosystem will span software, hardware, and cloud infrastructure to create truly unified experiences.
            </Text>
          </Column>

          <Column id="Phase 1: Stratus Productivity" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m">
              Phase 1: Stratus Productivity
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Our flagship productivity app that unifies tasks, notes, events, and goals with intelligent AI support. This foundation will demonstrate our approach to AI-first design and human-centered innovation.
            </Text>
          </Column>

          <Column id="Phase 2: Hardware Integration" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m">
              Phase 2: Hardware Integration
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Smart devices and hardware that extend the digital experience into the physical world. From intelligent displays to ambient computing devices, we&apos;ll create seamless bridges between digital and physical workflows.
            </Text>
          </Column>

          <Column id="Phase 3: Personal AI Ecosystem" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m">
              Phase 3: Personal AI Ecosystem
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              A comprehensive AI ecosystem that learns and adapts to individual users. Personal AI assistants, predictive workflows, and intelligent automation that feels natural and enhances rather than replaces human creativity.
            </Text>
          </Column>

          <Column id="Our Principles" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m">
              Our Principles
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              • AI serves humans, not the other way around<br />
              • Technology should feel invisible and intuitive<br />
              • Privacy and user control are fundamental<br />
              • Continuous learning and adaptation<br />
              • Seamless integration across all touchpoints
            </Text>
          </Column>

          <Flex gap="16" marginTop="l" horizontal="center" style={{ justifyContent: 'center' }}>
            <Button
              variant="solid"
              size="m"
              style={{ marginTop: 8 }}
              onClick={() => window.location.href = '/productivity'}
            >
              Explore Products
            </Button>
          </Flex>
        </Column>
      </Flex>
    </Column>
  );
} 