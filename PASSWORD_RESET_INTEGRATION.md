# Password Reset Integration Guide

## Overview

This guide provides everything needed to integrate the password reset functionality with your existing website. The password reset feature uses Supabase's built-in authentication system and is only accessible via email verification links.

## Files Created

### 1. `src/app/password-reset/page.tsx`
- **Purpose**: Password reset page component
- **Features**: 
  - Modern, responsive design matching your site theme
  - Password visibility toggle
  - Form validation
  - Loading states
  - Error handling
  - Mobile-friendly
  - Token validation

### 2. `src/app/api/auth/reset-password/route.ts`
- **Purpose**: API endpoint for password reset
- **Features**:
  - Supabase integration
  - Input validation
  - Error handling
  - Security best practices

### 3. `src/app/password-reset/metadata.ts`
- **Purpose**: SEO metadata
- **Features**:
  - Prevents indexing of password reset pages
  - Proper page titles

## Integration Steps

### Step 1: Environment Variables

Ensure these environment variables are set in your `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Step 2: Configure Supabase Redirect URLs

In your Supabase project dashboard:

1. Go to **Authentication** → **URL Configuration**
2. Add your password reset page URL to **Redirect URLs**:
   ```
   https://yourdomain.com/password-reset
   https://yourdomain.com/reset-password
   https://yourdomain.com/auth/reset
   ```

### Step 3: Update Email Templates

In Supabase dashboard:

1. Go to **Authentication** → **Email Templates**
2. Edit the **Password Reset** template
3. Update the **Action URL** to point to your password reset page:
   ```
   https://yourdomain.com/password-reset?token={{ .Token }}&type=recovery
   ```

### Step 4: Update Mobile App Configuration

In your mobile app's `AuthContext.tsx`, update the `resetPassword` function:

```typescript
const resetPassword = async (email: string) => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: 'https://yourdomain.com/password-reset',
    });

    if (error) {
      return { error };
    }

    return { error: null };
  } catch (error) {
    return { error };
  }
};
```

## Security Features

### 1. Token Validation
- Validates `token` and `type=recovery` parameters
- Invalid tokens show an error message
- Expired tokens are handled gracefully

### 2. Password Requirements
- Minimum 6 characters
- Client-side validation
- Server-side validation
- Password confirmation matching

### 3. Security Headers
- Page is marked as `noindex, nofollow`
- Prevents search engine indexing
- Protects against unauthorized access

## Design Features

### 1. Branding
- Matches your existing site design
- Uses your color scheme
- Consistent with your UI components

### 2. Responsive Design
- Works on desktop and mobile
- Adaptive layout
- Touch-friendly interface

### 3. User Experience
- Clear instructions
- Real-time validation
- Loading states
- Success confirmation
- Error handling

## Testing

### 1. Test the Complete Flow
1. Request password reset from mobile app
2. Check email for reset link
3. Click link to open password reset page
4. Enter new password
5. Verify password is updated

### 2. Test Error Cases
- Invalid/expired tokens
- Password mismatch
- Short passwords
- Network errors
- Missing parameters

### 3. Test Responsive Design
- Desktop browsers
- Mobile browsers
- Different screen sizes

## Troubleshooting

### Common Issues

1. **Reset link not working**
   - Check Supabase redirect URLs
   - Verify email template configuration
   - Check token expiration

2. **Page not loading**
   - Verify environment variables
   - Check API endpoint
   - Test with different browsers

3. **API errors**
   - Check server logs
   - Verify Supabase credentials
   - Test API endpoint directly

### Debug Information

The page includes console logging for debugging:
```javascript
console.error('Password reset error:', error);
```

## Customization

### 1. Styling
The page uses your existing design system:
- **Components**: Button, Input, Text, Heading, Column, Flex
- **Theme**: Matches your dark theme
- **Colors**: Uses your brand colors

### 2. Content
Update text content as needed:
- Page title
- Instructions
- Button text
- Error messages
- Password requirements

### 3. Branding
Update the logo and colors:
```tsx
// Logo
<div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto">
  <Text variant="heading-strong-l" style={{ color: 'white' }}>S</Text>
</div>
```

## Security Considerations

### 1. Token Expiration
- Supabase tokens expire after 1 hour
- Users must request new reset links after expiration

### 2. Rate Limiting
- Consider implementing rate limiting on the API endpoint
- Prevent brute force attacks

### 3. HTTPS
- Ensure your site uses HTTPS in production
- Required for secure password transmission

## Deployment

### 1. Environment Setup
- Set production environment variables
- Configure Supabase production settings
- Update redirect URLs for production domain

### 2. Testing
- Test the complete flow in production
- Verify email delivery
- Check mobile app integration

### 3. Monitoring
- Monitor API endpoint usage
- Track error rates
- Set up alerts for failures

## Support

For technical support:
- Check Supabase documentation
- Review browser console for errors
- Test with different email providers
- Verify all configuration steps

## Files Summary

| File | Purpose | Status |
|------|---------|--------|
| `src/app/password-reset/page.tsx` | Password reset page | ✅ Ready |
| `src/app/api/auth/reset-password/route.ts` | API endpoint | ✅ Ready |
| `src/app/password-reset/metadata.ts` | SEO metadata | ✅ Ready |
| `PASSWORD_RESET_INTEGRATION.md` | Integration guide | ✅ Ready |

## Next Steps

1. **Deploy the files** to your website
2. **Configure Supabase** redirect URLs
3. **Update mobile app** configuration
4. **Test the complete flow**
5. **Monitor and maintain**

---

**Note**: This integration uses Supabase's built-in authentication system, which provides enterprise-grade security and reliability. The password reset tokens expire after 1 hour for security. 