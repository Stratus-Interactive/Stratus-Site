"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import {
  Button,
  Input,
  Text,
  Heading,
  Column,
  Flex,
  Icon,
  Line,
  Fade
} from '@once-ui-system/core';

function PasswordResetContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState<'token' | 'password'>('token');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Check if we have a token in URL params
    const urlToken = searchParams.get('token');
    const type = searchParams.get('type');
    
    console.log('URL parameters:', {
      token: !!urlToken,
      type,
      allParams: Object.fromEntries(searchParams.entries()),
      url: window.location.href,
      fullUrl: window.location.toString()
    });

    if (urlToken) {
      setToken(urlToken);
      setStep('password');
    }
  }, [searchParams]);

  const handleTokenSubmit = async () => {
    if (!token.trim()) {
      setError('Please enter your reset token');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Validate the token by attempting to verify it
      const response = await fetch('/api/auth/validate-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setStep('password');
        setError('');
      } else {
        setError(data.error || 'Invalid token. Please check and try again.');
      }
    } catch (error) {
      console.error('Token validation error:', error);
      setError('Failed to validate token. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async () => {
    if (!password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token.trim(), password }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setError('');
      } else {
        setError(data.error || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Password reset error:', error);
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackToToken = () => {
    setStep('token');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setSuccess(false);
  };

  if (success) {
    return (
      <Flex fillWidth fillHeight horizontal="center" vertical="center" padding="8">
        <Column gap="4" horizontal="center" style={{ maxWidth: '400px', textAlign: 'center' }}>
          <Icon name="check-circle" size="xl" color="success" />
          <Heading variant="heading-strong-l">Password Reset Successful!</Heading>
          <Text wrap="balance" onBackground="neutral-weak">
            Your password has been successfully reset. You can now log in with your new password.
          </Text>
          <Button 
            variant="primary" 
            onClick={() => router.push('/')}
            style={{ marginTop: '16px' }}
          >
            Return to Home
          </Button>
        </Column>
      </Flex>
    );
  }

  return (
    <Flex fillWidth fillHeight horizontal="center" vertical="center" padding="8">
      <Column gap="4" horizontal="center" style={{ maxWidth: '400px' }}>
        <Icon name="lock" size="xl" color="primary" />
        
        {step === 'token' ? (
          <>
            <Heading variant="heading-strong-l">Enter Reset Token</Heading>
            <Text wrap="balance" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
              Please enter the reset token from your email. This is the code you received in your password reset email.
            </Text>
            
            <Input
              id="token"
              type="text"
              placeholder="Enter your reset token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              style={{ width: '100%' }}
            />
            
            {error && (
              <Text color="danger" style={{ textAlign: 'center' }}>
                {error}
              </Text>
            )}
            
            <Button
              variant="primary"
              onClick={handleTokenSubmit}
              disabled={loading || !token.trim()}
              style={{ width: '100%' }}
            >
              {loading ? 'Validating...' : 'Continue'}
            </Button>
            
            <Button
              variant="tertiary"
              onClick={() => router.push('/')}
              style={{ width: '100%' }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Heading variant="heading-strong-l">Reset Your Password</Heading>
            <Text wrap="balance" onBackground="neutral-weak" style={{ textAlign: 'center' }}>
              Enter your new password below. Make sure it&apos;s secure and easy to remember.
            </Text>
            
            <Input
              id="new-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%' }}
            />
            
            <Input
              id="confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: '100%' }}
            />
            
            <Text variant="body-default-s" onBackground="neutral-weak">
              Password Requirements:
            </Text>
            <Text 
              variant="body-default-s" 
              color={password.length >= 6 ? 'success' : 'neutral-weak'}
            >
              • At least 6 characters long
            </Text>
            <Text 
              variant="body-default-s" 
              color={password === confirmPassword && confirmPassword ? 'success' : 'neutral-weak'}
            >
              • Passwords match
            </Text>
            
            {error && (
              <Text color="danger" style={{ textAlign: 'center' }}>
                {error}
              </Text>
            )}
            
            <Button
              variant="primary"
              onClick={handlePasswordSubmit}
              disabled={loading || !password || !confirmPassword || password !== confirmPassword || password.length < 6}
              style={{ width: '100%' }}
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </Button>
            
            <Button
              variant="tertiary"
              onClick={handleBackToToken}
              style={{ width: '100%' }}
            >
              Back to Token Entry
            </Button>
          </>
        )}
      </Column>
    </Flex>
  );
}

export default function PasswordResetPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PasswordResetContent />
    </Suspense>
  );
} 