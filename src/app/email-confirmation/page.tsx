"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button, Input, Text, Heading, Column, Flex } from '@once-ui-system/core';

function EmailConfirmationContent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const token = searchParams.get('token');
  const type = searchParams.get('type');

  useEffect(() => {
    // Validate token and type parameters
    if (!token || type !== 'signup') {
      setError('Invalid or missing confirmation link. Please check your email and try again.');
      return;
    }
    
    setTokenValid(true);
  }, [token, type]);

  const handleConfirmEmail = async () => {
    if (!token) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/confirm-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to confirm email. Please try again.');
      }
    } catch (error) {
      console.error('Email confirmation error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!tokenValid) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <Column gap="4" style={{ textAlign: 'center' }}>
              <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <Text style={{ fontSize: '24px', color: '#ef4444' }}>⚠️</Text>
              </div>
              
              <div>
                <Heading variant="heading-strong-l" style={{ color: 'white', marginBottom: '8px' }}>
                  Invalid Link
                </Heading>
                <Text style={{ color: '#94a3b8' }}>
                  {error}
                </Text>
              </div>

              <Button
                href="/"
                variant="primary"
                size="l"
                fillWidth
              >
                Return to Home
              </Button>
            </Column>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <Column gap="4" style={{ textAlign: 'center' }}>
              <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <Text style={{ fontSize: '24px', color: '#10b981' }}>✓</Text>
              </div>
              
              <div>
                <Heading variant="heading-strong-l" style={{ color: 'white', marginBottom: '8px' }}>
                  Email Confirmed!
                </Heading>
                <Text style={{ color: '#94a3b8' }}>
                  Your email has been successfully confirmed. You can now access all features of your account.
                </Text>
              </div>

              <Button
                href="/"
                variant="primary"
                size="l"
                fillWidth
              >
                Continue to App
              </Button>
            </Column>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <Column gap="4" style={{ textAlign: 'center' }}>
            <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Text style={{ fontSize: '24px', color: '#3b82f6' }}>✉️</Text>
            </div>
            
            <div>
              <Heading variant="heading-strong-l" style={{ color: 'white', marginBottom: '8px' }}>
                Confirm Your Email
              </Heading>
              <Text style={{ color: '#94a3b8' }}>
                Please confirm your email address to complete your account setup and access all features.
              </Text>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <Text style={{ color: '#ef4444', textAlign: 'left' }}>
                  {error}
                </Text>
              </div>
            )}

            <Button
              onClick={handleConfirmEmail}
              variant="primary"
              size="l"
              fillWidth
              loading={loading}
            >
              {loading ? "Confirming..." : "Confirm Email"}
            </Button>

            <Text style={{ color: '#94a3b8' }}>
              Having trouble?{' '}
              <Button
                href="/"
                variant="tertiary"
                style={{ color: '#3b82f6', padding: 0, textDecoration: 'underline' }}
              >
                Contact support
              </Button>
            </Text>
          </Column>
        </div>
      </div>
    </div>
  );
}

export default function EmailConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
        <div className="w-full max-w-md">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
            <Text className="mt-4 text-white">Loading...</Text>
          </div>
        </div>
      </div>
    }>
      <EmailConfirmationContent />
    </Suspense>
  );
} 