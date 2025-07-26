"use client";

import { useState, useEffect } from 'react';
import { Flex, Text, Button } from '@once-ui-system/core';
import styles from './KickstarterBanner.module.scss';

export const KickstarterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('kickstarter-banner-dismissed');
    if (dismissed) setIsDismissed(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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

  const bannerText = isMobile 
    ? "Live on Kickstarter!" 
    : "Stratus is live on Kickstarter! Back us now for early access.";

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
        variant={isMobile ? "body-default-s" : "label-strong-s"}
        style={{ 
          color: 'var(--neutral-on-background-strong)', 
          fontWeight: 600,
          textAlign: 'center'
        }}
      >
        {bannerText}
      </Text>
      <Button
        onClick={handleKickstarterClick}
        variant="primary"
        size={isMobile ? "s" : "s"}
        style={{ 
          minWidth: isMobile ? '80px' : '100px', 
          fontWeight: 600,
          fontSize: isMobile ? '12px' : '14px'
        }}
      >
        {isMobile ? "Back" : "Back Now"}
      </Button>
      <Button
        onClick={handleDismiss}
        variant="tertiary"
        size="s"
        style={{ 
          color: 'var(--neutral-on-background-medium)', 
          opacity: 0.7, 
          padding: isMobile ? '2px 6px' : '4px 8px', 
          minWidth: 'auto',
          fontSize: isMobile ? '12px' : '14px'
        }}
        aria-label="Dismiss banner"
      >
        ✕
      </Button>
    </Flex>
  );
} 