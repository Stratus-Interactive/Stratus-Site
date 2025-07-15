#!/bin/bash

# Script to convert Stratus Interactive logo to favicon formats
# Usage: ./setup-favicon.sh

echo "Setting up Stratus Interactive logo as favicon..."

# Check if the logo file exists
if [ ! -f "Light-Logo.png" ]; then
    echo "Error: Light-Logo.png not found in current directory"
    echo "Please save the attached Light-Logo.png file to the project root and run this script again"
    exit 1
fi

# Create favicon.ico (32x32 and 16x16 sizes combined)
echo "Creating favicon.ico..."
convert Light-Logo.png -resize 32x32 -background transparent favicon-32.png
convert Light-Logo.png -resize 16x16 -background transparent favicon-16.png
convert favicon-32.png favicon-16.png src/app/favicon.ico

# Create icon.png (used by Next.js for app icons)
echo "Creating icon.png..."
convert Light-Logo.png -resize 192x192 -background transparent src/app/icon.png

# Create apple-icon.png (Apple touch icon)
echo "Creating apple-icon.png..."
convert Light-Logo.png -resize 180x180 -background transparent src/app/apple-icon.png

# Clean up temporary files
rm -f favicon-32.png favicon-16.png

echo "✅ Favicon setup complete!"
echo "The following files have been created:"
echo "  - src/app/favicon.ico (browser favicon)"
echo "  - src/app/icon.png (app icon)"
echo "  - src/app/apple-icon.png (Apple touch icon)"
echo ""
echo "Your Stratus Interactive logo is now set as the website favicon!" 