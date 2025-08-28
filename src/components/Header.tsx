"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";
import Image from "next/image";

import { routes, display, company, about, productivity, vision, blog, work, gallery } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate top position based on banner height
  const bannerHeight = isMobile ? 40 : 48;
  const headerTop = isMobile ? bannerHeight : 56;

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} style={{ top: headerTop }} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="fixed"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding={isMobile ? "12" : "8"}
        horizontal="center"
        data-border="rounded"
        style={{ 
          alignItems: "center", 
          justifyContent: "center",
          top: headerTop, // Position below banner
          height: isMobile ? "64px" : "auto" // Fixed height for mobile
        }}
      >
        {/* Mobile: Logo on the left */}
        {isMobile && (
          <Flex paddingLeft="16" vertical="center" style={{ minWidth: 60 }}>
            <Image
              src="/images/Logos/Dark-Logo.png"
              alt="Stratus"
              width={32}
              height={32}
              priority
              style={{ objectFit: "contain", borderRadius: "8px" }}
            />
          </Flex>
        )}
        
        {/* Desktop: Logo on the left, smaller for balance - hidden on mobile */}
        {!isMobile && (
          <Flex paddingLeft="12" vertical="center" style={{ minWidth: 80 }}>
            <Image
              src="/images/Logos/Dark-Logo.png"
              alt="Stratus Interactive Logo"
              width={48}
              height={48}
              priority
              style={{ objectFit: "contain", borderRadius: "12px" }}
            />
          </Flex>
        )}
        
        {/* Centered navigation */}
        <Flex 
          fillWidth 
          horizontal="center" 
          style={{ 
            justifyContent: "center", 
            position: "absolute", 
            left: 0, 
            right: 0, 
            margin: "auto", 
            zIndex: 2 
          }}
        >
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius={isMobile ? "s-8" : "m-4"}
            shadow="l"
            padding={isMobile ? "6" : "4"}
            horizontal="center"
            zIndex={1}
            style={{ 
              margin: "0 auto",
              minHeight: isMobile ? "48px" : "auto"
            }}
          >
            <Flex 
              gap={isMobile ? "2" : "4"} 
              vertical="center" 
              textVariant={isMobile ? "body-default-xs" : "body-default-s"} 
              suppressHydrationWarning
              className={isMobile ? styles.mobileNav : ""}
            >
              {routes["/"] && (
                <>
                  <ToggleButton 
                    className="s-flex-hide"
                    prefixIcon="home" 
                    href="/" 
                    label="Home"
                    selected={pathname === "/"} 
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="home"
                    href="/"
                    label="Home"
                    selected={pathname === "/"}
                  />
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight={isMobile ? "20" : "24"} />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    label="About"
                    selected={pathname === "/about"}
                  />
                </>
              )}
              {routes["/productivity"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/productivity"
                    label={productivity.label}
                    selected={pathname.startsWith("/productivity")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/productivity"
                    label="Productivity"
                    selected={pathname.startsWith("/productivity")}
                  />
                </>
              )}
              {routes["/vision"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="eye"
                    href="/vision"
                    label={vision.label}
                    selected={pathname.startsWith("/vision")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="eye"
                    href="/vision"
                    label="Vision"
                    selected={pathname.startsWith("/vision")}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    label="Blog"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight={isMobile ? "20" : "24"} />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        
        {/* Mobile: Theme toggle on the right */}
        {isMobile && (
          <Flex paddingRight="16" horizontal="end" vertical="center">
            <ThemeToggle />
          </Flex>
        )}
        
        {/* Desktop: Right side content */}
        {!isMobile && (
          <Flex fillWidth horizontal="end" vertical="center">
            <Flex
              paddingRight="12"
              horizontal="end"
              vertical="center"
              textVariant="body-default-s"
              gap="20"
            >
              <Flex hide="s">{display.time && <TimeDisplay timeZone={company.location} />}</Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};
