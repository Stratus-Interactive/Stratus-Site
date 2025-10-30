"use client";
import { Column, Heading, Text, Button, SmartLink, Flex } from "@once-ui-system/core";
import { productivity } from "@/resources";
import Image from "next/image";
import React from "react";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";

const structure = [
  {
    title: "About",
    display: true,
    items: [],
  },
  {
    title: "Why Stratus Productivity?",
    display: true,
    items: [],
  },
  {
    title: "Download The App",
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
          <Column id="About" fillWidth minHeight="160" vertical="center" marginBottom="32">
            {/* Header Image */}
            <div style={{ 
              width: '100%', 
              maxWidth: '800px', 
              margin: '0 auto 32px auto',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <Image 
                src="/images/gallery/Mulit Screen Demo.png" 
                alt="Stratus Productivity Multi-Screen Demo" 
                width={800} 
                height={600} 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover'
                }}
                priority
              />
            </div>
            
            <Heading className={styles.textAlign} variant="display-strong-xl">
              Stratus Productivity
            </Heading>
            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
              Unified productivity powered by AI that reimagines how you organize thoughts, manage tasks, and maintain focus.
            </Text>
            <Flex className={styles.blockAlign} gap="16" marginTop="m" mobileDirection="column" style={{ width: '100%' }}>
              <Button onClick={() => document.getElementById('Dowload The App')?.scrollIntoView({ behavior: 'smooth' })} variant="primary" size="l" fillWidth style={{ minHeight: '48px' }}>
                Download The App
              </Button>
              <Button href="/vision" variant="secondary" size="l" fillWidth style={{ minHeight: '48px' }}>
                The Future
              </Button>
            </Flex>
          </Column>
                     {/* Customer Testimonial */}
            <Column gap="s" style={{ 
              background: 'var(--neutral-alpha-weak)', 
              padding: '32px 24px', 
              borderRadius: '12px',
              border: '1px solid var(--neutral-alpha-medium)',
              marginTop: '24px'
            }}>
              <Text variant="body-default-l" wrap="balance" style={{ fontStyle: 'italic', textAlign: 'center' }}>
                &ldquo;The Stratus Productivity app has helped me tremendously with keeping the overhead for my landscape business organized. It takes away a lot of stress because now I have all of my info in one place. It saves me lots of time and keeps me more focused not having to go back and forth between multiple apps. I highly recommend you give Stratus a try!&rdquo;
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

          <Column gap="s" id="Why Stratus Productivity?" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-s" marginBottom="m"> 
              Why Status Productivity? </Heading>
            <Heading variant="heading-strong-l" marginBottom="m">
              Unified Workspace</Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Stratus Productivity brings together all of your tasks, notes, and events from Apple and Google into a single, cohesive system you can access form anywhere. 
            </Text>
          </Column>

          <Column id="AI-First Design" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-l" marginBottom="m">
              Get Organized Faster
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Get organized faster and stay productive for longer thanks to Stratus Interactives AI assistant Genesis. Genesis creates events and tasks from Natural language, so you can focus more on completing your tasks instead of organizing them. Genesis also provides intelligent insignt into your day helping you stay productive for longer and get wahts important done faster.
            </Text>
          </Column>

          <Column id="Seamless Integration" fillWidth gap="m" marginBottom="xl">
            <Heading variant="display-strong-l" marginBottom="m">
              Seamless Integration
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Works across all your devices with real-time sync. Whether you&apos;re on desktop, tablet, or mobile, your productivity system stays in perfect harmony.
            </Text>
          </Column>

          {/* Join the Beta Section */}
          <Column id="Download The App" fillWidth gap="xl" marginBottom="xl">
            <Heading variant="display-strong-s" style={{ marginBottom: 0 }}>
              Start Using Stratus Productivity Today</Heading>
            <Text variant="body-default-l" style={{ marginBottom: 0 }}>
              At Stratus we take pride in bringing our users the highest quality experiecne possible. Stratus Productivity is our first publicly available product and it has been designed form the ground up to take the burden out of being productive.<br />
              <strong>Power your dreams with intelligent productivity.</strong>
            </Text>
            
            <Flex gap="48" wrap direction="row" mobileDirection="column" style={{ marginTop: 32, justifyContent: "center", alignItems: "stretch" }}>
              {/* TODO: For responsive row/column, use Tailwind or CSS media queries */}
              {/* Public Beta */}
              <Column horizontal="center" gap="m" style={{ minWidth: 220, maxWidth: 340, flex: 1 }}>
                <div style={{ width: 120, height: 120, borderRadius: 24, overflow: "hidden", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                  <Image src="/images/Logos/Stratus Productivity.png" alt="Stratus Productivity Logo" width={140} height={140} style={{ objectFit: "contain" }} /></div>
                <Heading as="h3" variant="heading-strong-l" style={{ marginTop: 16 }}>Stratus Productivity: Intelligent Productivity</Heading>
                <Button onClick={() => window.open('https://testflight.apple.com/join/FsuGNkh4', '_blank')} variant="primary" size="l" fillWidth style={{ marginTop: 8, minHeight: '48px' }}>
                  Get
                </Button>
              </Column>
              {/* Removed Kickstarter section */}
            </Flex>
          </Column>
        </Column>
      </Flex>
    </Column>
  );
} 