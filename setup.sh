#!/bin/bash

echo "🚀 Setting up Ricardo Castaneda Portfolio..."
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm could not be found. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Customize the content in the components folder"
echo "4. Deploy to Vercel when ready"
echo ""
echo "📚 Check README.md for detailed deployment instructions"
