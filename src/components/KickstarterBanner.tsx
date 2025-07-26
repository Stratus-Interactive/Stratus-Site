"use client";

import { useState, useEffect } from 'react';
import { Flex, Text, Button, Fade } from '@once-ui-system/core';
import styles from './KickstarterBanner.module.scss';

export const KickstarterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if banner was dismissed in this session
  useEffect(() => {
    const dismissed = sessionStorage.getItem('kickstarter-banner-dismissed');
    if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('kickstarter-banner-dismissed', 'true');
  };

  const handleKickstarterClick = () => {
    window.open('https://www.kickstarter.com/projects/evanbradley/stratus-simplify-your-life', '_blank');
  };

  if (isDismissed) return null;

  if (!isVisible) return null;

  return (
    <Flex
      fillWidth 
      position="fixed" 
      top="0" 
      zIndex={10}
      style={{ 
        pointerEvents: 'auto',
        animation: 'slideDown 0.3s ease-out'
      }}
    >
      <Flex
        fillWidth
        background="neutral-strong"
        border="neutral-alpha-weak"
        padding="4"
        horizontal="center"
        vertical="center"
        gap="4"
        style={{
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Left side - Icon and text */}
        <Flex horizontal="center" vertical="center" gap="2" style={{ flex: 1, maxWidth: '600px' }}>
          {/* Kickstarter icon */}
          <div className={styles.kickstarterIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          
          {/* Text content */}
          <Flex vertical="center" gap="1" style={{ flex: 1 }}>
            <Text 
              variant="label-strong-s" 
              style={{ 
                color: 'var(--neutral-on-solid-strong)', 
                fontWeight: '600',
                letterSpacing: '0.025em'
              }}
            >
              🚀 Stratus is Live on Kickstarter!
            </Text>
            <Text 
              variant="body-default-xs" 
              style={{ 
                color: 'var(--neutral-on-solid-medium)',
                opacity: 0.9
              }}
            >
              Join the revolution in productivity. Back now and get early access.
            </Text>
          </Flex>
        </Flex>

        {/* Right side - CTA and dismiss */}
        <Flex horizontal="center" vertical="center" gap="2">
          {/* Kickstarter button */}
          <Button
            onClick={handleKickstarterClick}
            variant="primary"
            size="s"
            style={{
              background: 'linear-gradient(135deg, #2BD576 0%, #1DB954 100%)',
              border: 'none',
              boxShadow: '0 4px 12px rgba(43, 213, 118, 0.3)',
              fontWeight: '600',
              letterSpacing: '0.025em',
              minWidth: '120px'
            }}
          >
            Back Now
          </Button>

          {/* Dismiss button */}
          <Button
            onClick={handleDismiss}
            variant="tertiary"
            size="s"
            style={{
              color: 'var(--neutral-on-solid-medium)',
              opacity: 0.7,
              padding: '4px 8px',
              minWidth: 'auto'
            }}
          >
            ✕
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}; 