import { Column, Heading, Text } from "@once-ui-system/core";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <Column maxWidth="m" gap="xl" style={{ margin: "0 auto", padding: "48px 0" }}>
      <Heading variant="display-strong-xl" as="h1">Privacy Policy for Stratus</Heading>
      <Text variant="body-default-m" onBackground="neutral-weak">Last Updated: June 24, 2025</Text>
      <Text variant="body-default-l">
        Stratus is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information when you use our app.
      </Text>
      <Heading variant="heading-strong-l" as="h2">1. Information We Collect</Heading>
      <Text variant="body-default-m">
        <strong>Account Information:</strong> If you sign in using Google or another provider, we collect your name, email address, and profile picture.<br /><br />
        <strong>User Content:</strong> Tasks, events, notes, and other user-generated content are stored securely in our database (e.g., Supabase).<br /><br />
        <strong>Usage Data:</strong> We may collect anonymized data such as app interactions, feature usage, and performance statistics to improve the product.
      </Text>
      <Heading variant="heading-strong-l" as="h2">2. How We Use Your Information</Heading>
      <Text variant="body-default-m">
        To provide, personalize, and improve our services.<br /><br />
        To communicate important updates or support responses.<br /><br />
        To maintain account security and data integrity.
      </Text>
      <Heading variant="heading-strong-l" as="h2">3. How We Share Your Information</Heading>
      <Text variant="body-default-m">
        We do not sell your data. We may share information:<br /><br />
        With service providers strictly for operating and improving Stratus.<br /><br />
        As required by law or to protect our legal rights.
      </Text>
      <Heading variant="heading-strong-l" as="h2">4. Data Retention</Heading>
      <Text variant="body-default-m">
        We retain your data as long as your account is active. You may request deletion by contacting us at <a href="mailto:stratusfeedback@gmail.com">stratusfeedback@gmail.com</a>.
      </Text>
      <Heading variant="heading-strong-l" as="h2">5. Security</Heading>
      <Text variant="body-default-m">
        We implement modern security measures to protect your information. However, no system is 100% secure.
      </Text>
      <Heading variant="heading-strong-l" as="h2">6. Children’s Privacy</Heading>
      <Text variant="body-default-m">
        Stratus is not intended for children under 13. We do not knowingly collect personal information from children.
      </Text>
      <Heading variant="heading-strong-l" as="h2">7. Changes to this Policy</Heading>
      <Text variant="body-default-m">
        We may update this policy and will notify users of material changes via the app or email.
      </Text>
      <Heading variant="heading-strong-l" as="h2">8. Contact</Heading>
      <Text variant="body-default-m">
        If you have any questions, contact us at:<br /><br />
        Stratus<br />
        Email: <a href="mailto:stratusfeedback@gmail.com">stratusfeedback@gmail.com</a><br />
        Website: <a href="https://thinkstratus.com" target="_blank" rel="noopener noreferrer">https://thinkstratus.com</a>
      </Text>
    </Column>
  );
} 