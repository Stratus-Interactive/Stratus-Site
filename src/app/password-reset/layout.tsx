import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password - Stratus Interactive',
  description: 'Reset your password securely',
  robots: 'noindex, nofollow', // Prevent indexing of password reset pages
};

export default function PasswordResetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 