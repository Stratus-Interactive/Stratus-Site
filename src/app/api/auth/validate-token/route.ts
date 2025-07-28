import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    console.log('Token validation API called with:', { 
      hasToken: !!token, 
      tokenLength: token?.length
    });

    // Validate input
    if (!token) {
      console.log('Missing token');
      return NextResponse.json(
        { success: false, error: 'Token is required' },
        { status: 400 }
      );
    }

    console.log('Attempting to verify token with Supabase...');
    
    // Verify the reset token
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
        { success: false, error: 'Invalid or expired token. Please request a new password reset.' },
        { status: 400 }
      );
    }

    if (!verifyData.user) {
      return NextResponse.json(
        { success: false, error: 'Invalid token. Please request a new password reset.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Token is valid',
      user: {
        id: verifyData.user.id,
        email: verifyData.user.email
      }
    });

  } catch (error) {
    console.error('Token validation API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
} 