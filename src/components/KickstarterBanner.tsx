"use client";

import { useState, useEffect } from 'react';
import { Flex, Text, Button } from '@once-ui-system/core';
import styles from './KickstarterBanner.module.scss';

export const KickstarterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('kickstarter-banner-dismissed');
    if (dismissed) setIsDismissed(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('kickstarter-banner-dismissed', 'true');
  };

  const handleKickstarterClick = () => {
    window.open('https://www.kickstarter.com/projects/evanbradley/stratus-simplify-your-life', '_blank');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <Flex
      fillWidth
      position="fixed"
      top="0"
      zIndex={10}
      className={styles.banner}
      style={{ pointerEvents: 'auto', animation: 'slideDown 0.3s ease-out' }}
      horizontal="center"
      vertical="center"
      gap="2"
    >
      <Text
        variant="label-strong-s"
        style={{ color: 'var(--neutral-on-background-strong)', fontWeight: 600 }}
      >
        Stratus is live on Kickstarter! Back us now for early access.
      </Text>
      <Button
        onClick={handleKickstarterClick}
        variant="primary"
        size="s"
        style={{ minWidth: '100px', fontWeight: 600 }}
      >
        Back Now
      </Button>
      <Button
        onClick={handleDismiss}
        variant="tertiary"
        size="s"
        style={{ color: 'var(--neutral-on-background-medium)', opacity: 0.7, padding: '4px 8px', minWidth: 'auto' }}
        aria-label="Dismiss banner"
      >
        ✕
      </Button>
    </Flex>
  );
} 