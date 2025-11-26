# Ricardo Castaneda - Portfolio Website

A modern, animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features subtle anime-inspired animations and a professional design showcasing QA Automation and Full Stack development expertise.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Anime-Inspired Animations**: Subtle and professional animations throughout
- **Performance Optimized**: Server-side rendering with Next.js
- **Dark Theme**: Modern dark theme with gradient accents
- **Interactive Sections**: Hero, About, Experience, Skills, Projects, Contact

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/rcastaneda-dev/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment to Vercel

### Method 1: Deploy with Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. Follow the prompts to link your project

### Method 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings (defaults work fine)
6. Click "Deploy"

## 🌐 Connecting Your Cloudflare Domain

### Step 1: Get Vercel's DNS Records

1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your custom domain (e.g., `ricardocastaneda.dev`)
4. Vercel will provide you with DNS records

### Step 2: Configure Cloudflare DNS

1. Log into your Cloudflare dashboard
2. Select your domain
3. Go to DNS settings
4. Add the following records:

#### For apex domain (ricardocastaneda.dev):

- **Type**: A
- **Name**: @
- **Value**: 76.76.21.21
- **Proxy status**: DNS only (gray cloud)

#### For www subdomain:

- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com
- **Proxy status**: DNS only (gray cloud)

### Step 3: Configure SSL/TLS in Cloudflare

1. Go to SSL/TLS → Overview
2. Set encryption mode to "Full"
3. Go to SSL/TLS → Edge Certificates
4. Enable "Always Use HTTPS"
5. Enable "Automatic HTTPS Rewrites"

### Step 4: Page Rules (Optional)

Create a page rule for www to non-www redirect:

1. Go to Page Rules
2. Create a rule for `www.ricardocastaneda.dev/*`
3. Add setting: "Forwarding URL" (301 redirect)
4. Destination: `https://ricardocastaneda.dev/$1`

### Step 5: Verify Deployment

1. Wait for DNS propagation (5-30 minutes)
2. Visit your domain
3. Check SSL certificate is working
4. Verify both www and non-www work correctly

## 📝 Environment Variables

Create a `.env.local` file for any environment variables:

```env
# Add any API keys or environment variables here
NEXT_PUBLIC_SITE_URL=https://ricardocastaneda.dev
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  'primary': '#00D9FF',
  'secondary': '#7928CA',
  'accent': '#FF0080',
  'dark': '#0A0E27',
  'darker': '#060815',
}
```

### Content

Update your information in:

- `components/Hero.tsx` - Main introduction
- `components/About.tsx` - About section
- `components/Experience.tsx` - Work experience
- `components/Skills.tsx` - Technical skills
- `components/Projects.tsx` - Portfolio projects
- `components/Contact.tsx` - Contact information

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

- **Email**: hi@rcastaneda.dev
- **LinkedIn**: [rcastaneda-dev](https://www.linkedin.com/in/rcastaneda-dev/)
- **GitHub**: [rcastaneda-dev](https://github.com/rcastaneda-dev)
- **Location**: San Salvador, El Salvador

---

Built with ❤️ by Ricardo Castaneda
