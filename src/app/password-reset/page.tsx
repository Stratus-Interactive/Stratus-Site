"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button, Input, Text, Heading, Column, Flex } from '@once-ui-system/core';

function PasswordResetContent() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Check for any token parameters in the URL
    const token = searchParams.get('token') || 
                  searchParams.get('access_token') || 
                  searchParams.get('refresh_token') ||
                  searchParams.get('type');
    
    console.log('Password reset parameters:', { 
      searchParams: Object.fromEntries(searchParams.entries()),
      token 
    });
    
    // For now, let's allow the form to be shown even without tokens
    // The API will handle the actual validation
    setTokenValid(true);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!tokenValid) {
      setError('Invalid reset link. Please request a new password reset.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Get any token from URL parameters
      const token = searchParams.get('token') || 
                    searchParams.get('access_token') || 
                    searchParams.get('refresh_token');
      
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token || 'no-token', // Send a placeholder if no token
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setError('');
      } else {
        setError(data.error || 'Failed to reset password. Please try again.');
      }
    } catch (err) {
      console.error('Password reset error:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!tokenValid && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
        <div className="w-full max-w-md">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
            <Text className="mt-4 text-white">Validating reset link...</Text>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
        <div className="w-full max-w-md">
          <Column gap="l" horizontal="center" style={{ textAlign: 'center' }}>
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <Heading variant="heading-strong-l" style={{ color: 'white' }}>
              Password Reset Successful
            </Heading>
            <Text style={{ color: '#e2e8f0' }}>
              Your password has been successfully reset. You can now log in with your new password.
            </Text>
            <Button
              href="/"
              variant="primary"
              size="l"
              fillWidth
              style={{ marginTop: '24px' }}
            >
              Return to Home
            </Button>
          </Column>
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
              <Text style={{ fontSize: '24px', color: '#3b82f6' }}>🔒</Text>
            </div>
            
            <div>
              <Heading variant="heading-strong-l" style={{ color: 'white', marginBottom: '8px' }}>
                Reset Your Password
              </Heading>
              <Text style={{ color: '#94a3b8' }}>
                Enter your new password below. Make sure it&apos;s secure and easy to remember.
              </Text>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <Text style={{ color: '#ef4444', textAlign: 'left' }}>
                  {error}
                </Text>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <Column gap="4">
                {/* New Password */}
                <div>
                  <Text variant="label-strong-s" style={{ color: 'white', marginBottom: '8px', textAlign: 'left' }}>
                    New Password
                  </Text>
                  <Flex gap="2" style={{ position: 'relative' }}>
                    <Input
                      id="new-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      required
                      style={{ flex: 1 }}
                    />
                    <Button
                      type="button"
                      variant="tertiary"
                      size="s"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ 
                        position: 'absolute', 
                        right: '8px', 
                        top: '50%', 
                        transform: 'translateY(-50%)',
                        color: '#94a3b8'
                      }}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </Flex>
                </div>

                {/* Confirm Password */}
                <div>
                  <Text variant="label-strong-s" style={{ color: 'white', marginBottom: '8px', textAlign: 'left' }}>
                    Confirm Password
                  </Text>
                  <Flex gap="2" style={{ position: 'relative' }}>
                    <Input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      required
                      style={{ flex: 1 }}
                    />
                    <Button
                      type="button"
                      variant="tertiary"
                      size="s"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{ 
                        position: 'absolute', 
                        right: '8px', 
                        top: '50%', 
                        transform: 'translateY(-50%)',
                        color: '#94a3b8'
                      }}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </Button>
                  </Flex>
                </div>

                {/* Password Requirements */}
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <Text variant="label-strong-s" style={{ color: '#94a3b8', marginBottom: '8px' }}>
                    Password Requirements:
                  </Text>
                  <Column gap="2" style={{ textAlign: 'left' }}>
                    <Text variant="body-default-s" style={{ color: password.length >= 6 ? '#10b981' : '#6b7280' }}>
                      • At least 6 characters long
                    </Text>
                    <Text variant="body-default-s" style={{ color: password === confirmPassword && confirmPassword ? '#10b981' : '#6b7280' }}>
                      • Passwords match
                    </Text>
                  </Column>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="l"
                  fillWidth
                  loading={loading}
                  disabled={!password || !confirmPassword || password !== confirmPassword || password.length < 6}
                >
                  {loading ? "Resetting Password..." : "Reset Password"}
                </Button>
              </Column>
            </form>

            {/* Back to Login */}
            <Text style={{ color: '#94a3b8' }}>
              Remember your password?{' '}
              <Button
                href="/"
                variant="tertiary"
                style={{ color: '#3b82f6', padding: 0, textDecoration: 'underline' }}
              >
                Return to home
              </Button>
            </Text>
          </Column>
        </div>
      </div>
    </div>
  );
}

export default function PasswordResetPage() {
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
      <PasswordResetContent />
    </Suspense>
  );
} 