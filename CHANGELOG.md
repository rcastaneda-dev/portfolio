# Changelog

All notable changes to this site are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-10-14

### Added
- Career branch graph with versioned releases, and an Experience section written as a changelog with Added, Changed and Fixed groups.
- Pipeline panels for projects that have GitHub Actions runs, fetched before each build with a committed snapshot as fallback.
- Contact form through Web3Forms, with an email button as the fallback.
- GitHub Actions workflow that type-checks, lints and builds every push and pull request to `main`.
- Site version and latest build status in the footer.

### Changed
- Redesigned the site in a light document style with Archivo and Source Serif 4, and dark panels for the graph and pipeline runs.
- Content renders in the static HTML, with no loading screen.
- Rewrote the copy in English, Spanish and French.
- Updated the profile from LinkedIn: the current WillDom role, the Senior SDET headline, company names, languages, and education and certifications.

### Removed
- Neon theme, particle background, typing animation and scroll-to-top button.
- The framer-motion, react-icons, react-social-icons, react-type-animation and jimp dependencies.

## [0.1.0] - 2025-11-26

### Added
- First version of the portfolio: dark animated theme, experience timeline, skills, projects, contact section, résumé download, and English, Spanish and French translations.
