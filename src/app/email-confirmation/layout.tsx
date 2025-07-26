import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confirm Email - Stratus Interactive',
  description: 'Confirm your email address to complete your account setup',
  robots: 'noindex, nofollow', // Prevent indexing of email confirmation pages
};

export default function EmailConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 