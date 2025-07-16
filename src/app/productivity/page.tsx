"use client";
import { Column, Heading, Text, Button, SmartLink, Flex } from "@once-ui-system/core";
import { productivity } from "@/resources";
import Image from "next/image";
import React from "react";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";

const structure = [
  {
    title: "Stratus Productivity",
    display: true,
    items: [],
  },
  {
    title: "Unified Workspace",
    display: true,
    items: [],
  },
  {
    title: "AI-First Design",
    display: true,
    items: [],
  },
  {
    title: "Seamless Integration",
    display: true,
    items: [],
  },
  {
    title: "Join the Beta",
    display: true,
    items: [],
  },
];

const tocConfig = {
  tableOfContent: {
    display: true,
    subItems: false,
  },
};

export default function ProductivityPage() {
  return (
    <Column maxWidth="m">
      <TableOfContents structure={structure} about={tocConfig} />
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column id="Stratus Productivity" fillWidth minHeight="160" vertical="center" marginBottom="32">
            <Heading className={styles.textAlign} variant="display-strong-xl">
              Stratus Productivity
            </Heading>
            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
              Unified productivity powered by AI that reimagines how you organize thoughts, manage tasks, and maintain focus.
            </Text>
            <Flex className={styles.blockAlign} gap="12" marginTop="m">
              <Button onClick={() => document.getElementById('Join the Beta')?.scrollIntoView({ behavior: 'smooth' })} variant="primary" size="l">
                Learn About the Beta
              </Button>
              <Button href="/vision" variant="secondary" size="l">
                Learn More
              </Button>
            </Flex>
          </Column>

          <Column id="Unified Workspace" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m">
              Unified Workspace
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Stratus Productivity brings together tasks, notes, events, goals, and intelligent AI support into a single, cohesive system. No more switching between apps or losing context.
            </Text>
          </Column>

          <Column id="AI-First Design" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m">
              AI-First Design
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Every feature is built with AI capabilities in mind. From intelligent task prioritization to context-aware note organization, AI enhances every aspect of your workflow.
            </Text>
          </Column>

          <Column id="Seamless Integration" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m">
              Seamless Integration
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Works across all your devices with real-time sync. Whether you&apos;re on desktop, tablet, or mobile, your productivity system stays in perfect harmony.
            </Text>
          </Column>

          {/* Join the Beta Section */}
          <Column id="Join the Beta" fillWidth gap="xl" marginBottom="xl">
            <Heading variant="display-strong-s" style={{ marginBottom: 0 }}>
              Join the Stratus Beta
            </Heading>
            <Text variant="body-default-l" style={{ marginBottom: 0 }}>
              Be among the first to experience a productivity system that feels handcrafted — not hacked together.<br />
              Stratus isn&apos;t another dashboard or checklist app. It&apos;s your intelligent co-pilot — turning scattered tasks, notes, and calendars into one seamless flow.<br />
              By joining the beta, you&apos;re helping shape a tool built for clarity, momentum, and peace of mind.<br /><br />
              <strong>Let&apos;s build the future of productivity — together.</strong>
            </Text>
            
            {/* Customer Testimonial */}
            <Column gap="m" style={{ 
              background: 'var(--neutral-alpha-weak)', 
              padding: '32px 24px', 
              borderRadius: '12px',
              border: '1px solid var(--neutral-alpha-medium)',
              marginTop: '24px'
            }}>
              <Text variant="body-default-l" wrap="balance" style={{ fontStyle: 'italic', textAlign: 'center' }}>
                "The Stratus Productivity app has helped me tremendously with keeping the overhead for my landscape business organized. It takes away a lot of stress because now I have all of my info in one place. It saves me lots of time and keeps me more focused not having to go back and forth between multiple apps. I highly recommend you give Stratus a try!"
              </Text>
              <Flex direction="column" gap="4" horizontal="center" style={{ marginTop: '16px' }}>
                <Text variant="label-strong-s" onBackground="brand-strong">
                  Reed Strozier
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  Dream Gardens Inc
                </Text>
              </Flex>
            </Column>
            <Flex gap="48" wrap direction="row" mobileDirection="column" style={{ marginTop: 32, justifyContent: "center", alignItems: "stretch" }}>
              {/* TODO: For responsive row/column, use Tailwind or CSS media queries */}
              {/* Public Beta */}
              <Column horizontal="center" gap="m" style={{ minWidth: 220, maxWidth: 340, flex: 1 }}>
                <div style={{ width: 120, height: 120, borderRadius: 24, overflow: "hidden", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                  <Image src="/images/Logos/Light-Logo.png" alt="Stratus Beta" width={90} height={90} style={{ objectFit: "contain" }} />
                </div>
                <Heading as="h3" variant="heading-strong-l" style={{ marginTop: 16 }}>Public Beta</Heading>
                <Text variant="body-default-m">Get access through limited spots to the free public beta!</Text>
                <Button onClick={() => window.open('https://testflight.apple.com/join/FsuGNkh4', '_blank')} variant="primary" size="m" style={{ marginTop: 8 }}>
                  Download the Beta!
                </Button>
              </Column>
              {/* Kickstarter */}
              <Column horizontal="center" gap="m" style={{ minWidth: 220, maxWidth: 340, flex: 1 }}>
                <div style={{ width: 120, height: 120, borderRadius: 60, overflow: "hidden", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                  <Image src="/images/Logos/Kickstarter Icon.png" alt="Kickstarter" width={90} height={90} style={{ objectFit: "contain" }} />
                </div>
                <Heading as="h3" variant="heading-strong-l" style={{ marginTop: 16 }}>Kickstarter</Heading>
                <Text variant="body-default-m">Get access to the beta by backing us on Kickstarter!</Text>
                <Button variant="primary" size="m" style={{ marginTop: 8 }} disabled>
                  Coming Soon!
                </Button>
              </Column>
            </Flex>
          </Column>
        </Column>
      </Flex>
    </Column>
  );
} 