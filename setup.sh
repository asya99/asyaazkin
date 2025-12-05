#!/bin/bash

# Portfolio Website Setup Script
# This script helps you get started with your portfolio

echo "🎨 Portfolio Website Setup"
echo "=========================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the portfolio-website directory"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Next steps:"
echo ""
echo "1. Start development server:"
echo "   npm run dev"
echo ""
echo "2. Build for production:"
echo "   npm run build"
echo ""
echo "3. Preview production build:"
echo "   npm run preview"
echo ""
echo "📝 Don't forget to:"
echo "   - Update your information in src/components/"
echo "   - Add your resume to public/"
echo "   - Change the base path in vite.config.js"
echo ""
echo "📚 Check SETUP.md and README.md for more details"
echo ""
