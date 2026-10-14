# Ricardo Castaneda - Portfolio Website

A single-page portfolio for a senior QA automation engineer, built with Next.js 14, TypeScript and Tailwind CSS. The design reads like a quality-engineering document: a light "inspection report" look, a career timeline strip, and ledger-style experience and project lists.

## 🚀 Features

- **Tech Stack**: Next.js 14 (static export), TypeScript, Tailwind CSS
- **Typography**: Archivo (variable width axis) for structure and Source Serif 4 for reading text, loaded with `next/font`
- **Responsive and accessible**: skip link, visible keyboard focus, reduced-motion support
- **Three languages**: English, Spanish and French, typed so every dictionary must stay in sync
- **Content in the HTML**: no loading screen, so crawlers and slow connections see the full page
- **Contact form**: posts to Formspree, with an email button as a fallback
- **Sections**: Hero, About, Experience, Skills, Projects, Contact

## 🔐 Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID (the part after `/f/`). When empty, the contact section shows an email button instead of the form. Inlined at build time. |
| `GITHUB_TOKEN` | Optional. Raises the GitHub API rate limit when the prebuild step fetches pipeline runs. Without it the build falls back to `lib/data/ci-snapshot.json`. |
| `CI_API_BASE` | Testing only. Points the pipeline fetch at another host to force the snapshot fallback. |

Copy `.env.example` to `.env.local` for the Formspree ID. `GITHUB_TOKEN` is read from the shell or the Vercel project, not from `.env.local`.

## 🔁 CI and pipeline data

![CI](https://github.com/rcastaneda-dev/portfolio/actions/workflows/ci.yml/badge.svg)

- `npm run build` first runs `scripts/fetch-ci.mjs`, which fetches the latest GitHub Actions runs for the projects listed with a `ciRepo` in `lib/data/projects.ts` and for this repo, and writes `lib/data/ci-build.json` (gitignored). The page is static, so the panels refresh on each deploy.
- `npm run ci:snapshot` also refreshes the committed fallback, `lib/data/ci-snapshot.json`.
- `.github/workflows/ci.yml` type-checks, lints and builds every push and pull request to `main`. The footer shows the latest result on `main`.
- Release notes live in [`CHANGELOG.md`](CHANGELOG.md).

## ✏️ Editing content

- Role dates, locations and tech lists: `lib/data/career.ts` (the career strip reads the same data)
- Projects: `lib/data/projects.ts`
- Contact details and skill lists: `lib/data/profile.ts`
- All visible text: `lib/i18n/translations/` (`en.ts` is the source of truth; `es.ts` and `fr.ts` must match its shape)

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
