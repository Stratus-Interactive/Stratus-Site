import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json();

    console.log('Password reset API called with:', { 
      hasToken: !!token, 
      tokenLength: token?.length,
      hasPassword: !!password,
      passwordLength: password?.length
    });

    // Validate input
    if (!token || !password) {
      console.log('Missing required fields:', { token: !!token, password: !!password });
      return NextResponse.json(
        { success: false, error: 'Token and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      console.log('Password too short:', password.length);
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    console.log('Attempting to verify token with Supabase...');
    
    // First, verify the reset token
    const { data: verifyData, error: verifyError } = await supabase.auth.verifyOtp({
      token_hash: token,
      type: 'recovery'
    });

    console.log('Token verification result:', { 
      success: !verifyError, 
      error: verifyError?.message,
      hasUser: !!verifyData?.user 
    });

    if (verifyError) {
      console.error('Token verification error:', verifyError);
      return NextResponse.json(
        { success: false, error: 'Invalid or expired reset token. Please request a new password reset.' },
        { status: 400 }
      );
    }

    if (!verifyData.user) {
      return NextResponse.json(
        { success: false, error: 'Invalid reset token. Please request a new password reset.' },
        { status: 400 }
      );
    }

    // Now update the user's password using admin API
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      verifyData.user.id,
      { password: password }
    );

    if (updateError) {
      console.error('Password update error:', updateError);
      return NextResponse.json(
        { success: false, error: updateError.message || 'Failed to reset password' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Password reset successfully'
    });

  } catch (error) {
    console.error('Password reset API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
} 