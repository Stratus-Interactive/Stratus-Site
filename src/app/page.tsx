import React from "react";

import { Heading, Flex, Text, Button, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, company, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: company.name,
          url: `${baseURL}${about.path}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m" horizontal="center">
        <Column maxWidth="s" horizontal="center" style={{ textAlign: "center" }}>
          {home.featured.display && (
          <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l" style={{ textAlign: "center" }}>
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" style={{ textAlign: "center" }}>
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Flex gap="12" mobileDirection="column" horizontal="center">
              <Button
                id="productivity"
                data-border="rounded"
                href="/productivity"
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                See Stratus Productivity
              </Button>
              <Button
                id="vision"
                data-border="rounded"
                href="/vision"
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                Our Vision
              </Button>
            </Flex>
          </RevealFx>
        </Column>
      </Column>
      
      {/* About Section */}
      <RevealFx translateY="16" delay={0.6}>
        <Column maxWidth="m" gap="m" horizontal="center" style={{ textAlign: 'center' }}>
          <Heading as="h2" variant="display-strong-s" wrap="balance" style={{ textAlign: 'center' }}>
            About Stratus Interactive
          </Heading>
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" style={{ textAlign: 'center' }}>
            We&apos;re an AI software and hardware company focused on creating intelligent solutions that enhance human capability and workflow efficiency. Our products are designed to feel natural, intuitive, and deeply integrated into your life.
          </Text>
          {/* Removed the stats grid (Founded, Focus Areas, Vision) */}
        </Column>
      </RevealFx>

      {/* Innovation Pillars */}
      <RevealFx translateY="16" delay={0.8}>
        <Column maxWidth="l" gap="m" horizontal="center">
          <Heading as="h2" variant="display-strong-s" wrap="balance" style={{ textAlign: 'center' }}>
            Innovation Pillars
          </Heading>
          <Flex gap="24" mobileDirection="column">
            <Column gap="8" flex={1}>
              <Heading as="h3" variant="heading-strong-l">AI-First Design</Heading>
              <Text onBackground="neutral-weak">Every product decision starts with AI capabilities and how they can enhance human workflows.</Text>
            </Column>
            <Column gap="8" flex={1}>
              <Heading as="h3" variant="heading-strong-l">Human-Centered Innovation</Heading>
              <Text onBackground="neutral-weak">Technology that serves people — not overwhelms them, with intuitive and emotionally resonant experiences.</Text>
            </Column>
            <Column gap="8" flex={1}>
              <Heading as="h3" variant="heading-strong-l">Hardware Integration</Heading>
              <Text onBackground="neutral-weak">Seamless integration between software and hardware to create truly unified productivity experiences.</Text>
            </Column>
            <Column gap="8" flex={1}>
              <Heading as="h3" variant="heading-strong-l">Scalable Architecture</Heading>
              <Text onBackground="neutral-weak">Building systems that can grow and adapt with users&apos; needs and technological advancements.</Text>
            </Column>
          </Flex>
        </Column>
      </RevealFx>

      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest Insights
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
