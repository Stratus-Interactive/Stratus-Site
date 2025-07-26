"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button, Input, Text, Heading, Column, Flex } from '@once-ui-system/core';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
    // Handle password reset token exchange
    const handlePasswordReset = async () => {
      try {
        // First, check if we have a valid session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        console.log('Session check:', { session: !!session, sessionError });
        
        if (session) {
          // User has a valid session, proceed with password reset
          setTokenValid(true);
          return;
        }

        // No session, check for URL parameters that might contain the reset token
        const token = searchParams.get('token') || 
                      searchParams.get('access_token') || 
                      searchParams.get('refresh_token');
        const type = searchParams.get('type');
        
        console.log('URL parameters:', { token: !!token, type, searchParams: Object.fromEntries(searchParams.entries()) });
        
        if (token && type === 'recovery') {
          // We have a recovery token, try to exchange it for a session
          console.log('Attempting to exchange recovery token for session...');
          
          const { data, error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'recovery'
          });
          
          console.log('Token exchange result:', { success: !!data, error });
          
          if (error) {
            console.error('Token exchange error:', error);
            setError('Invalid or expired reset link. Please request a new password reset.');
            return;
          }
          
          // Token exchange successful, proceed with password reset
          setTokenValid(true);
        } else {
          // No valid token found
          setError('Invalid or expired reset link. Please request a new password reset.');
        }
      } catch (error) {
        console.error('Password reset handling error:', error);
        setError('Invalid or expired reset link. Please request a new password reset.');
      }
    };

    handlePasswordReset();
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
      // Update password using Supabase client directly
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        console.error('Password update error:', error);
        setError(error.message || 'Failed to reset password. Please try again.');
      } else {
        setSuccess(true);
        setError('');
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