# Stratus Interactive Logo Favicon Setup

## Quick Setup (Recommended)

1. **Save the logo**: Save the attached `Light-Logo.png` file to the project root directory
2. **Run the script**: Execute the setup script:
   ```bash
   ./setup-favicon.sh
   ```

## Manual Setup

If you prefer to do it manually:

### Step 1: Save the Logo
Save the attached `Light-Logo.png` file to your project root directory.

### Step 2: Convert to Favicon Formats

**Create favicon.ico:**
```bash
# Create 32x32 and 16x16 versions
convert Light-Logo.png -resize 32x32 -background transparent favicon-32.png
convert Light-Logo.png -resize 16x16 -background transparent favicon-16.png
convert favicon-32.png favicon-16.png src/app/favicon.ico
```

**Create icon.png (192x192 for app icon):**
```bash
convert Light-Logo.png -resize 192x192 -background transparent src/app/icon.png
```

**Create apple-icon.png (180x180 for Apple touch icon):**
```bash
convert Light-Logo.png -resize 180x180 -background transparent src/app/apple-icon.png
```

### Step 3: Clean Up
```bash
rm -f favicon-32.png favicon-16.png
```

## Files Created

After running the setup, these files will be created in your `src/app/` directory:

- `favicon.ico` - Standard browser favicon (16x16 and 32x32)
- `icon.png` - App icon (192x192)
- `apple-icon.png` - Apple touch icon (180x180)

## How It Works

Next.js 13+ with App Router automatically detects these files in the `src/app/` directory:

- `favicon.ico` - Used as the browser tab icon
- `icon.png` - Used for PWA app icons and bookmarks
- `apple-icon.png` - Used for Apple touch icons when users add to home screen

## Verification

After setup, you can verify the favicon is working by:

1. **Local Development**: Start your dev server (`npm run dev`) and check the browser tab
2. **Production**: Deploy and check the live site
3. **Developer Tools**: Check the Network tab to see if favicon requests are successful

## Troubleshooting

- **Logo not showing**: Clear browser cache and hard refresh (Cmd+Shift+R)
- **Wrong size**: Ensure the logo converts properly to square dimensions
- **Background issues**: The script uses transparent background, but you can adjust if needed

## Next.js Favicon Documentation

For more details, see: [Next.js Favicon and Icons Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons) 