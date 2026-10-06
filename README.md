# Emmanuel Uchenna Opara — Portfolio

A React + Vite + Tailwind CSS portfolio site for a Statistics / Data
Analytics / AI & Automation background. Fully static, free to host, no
paid APIs or backend required.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- lucide-react (icons)

## 1. Run it locally

```bash
npm install
npm run dev
```

This starts a dev server (usually at `http://localhost:5173`) with hot
reload.

## 2. Build for production

```bash
npm run build
```

This outputs a static, production-ready site into the `dist/` folder.
Preview the production build locally with:

```bash
npm run preview
```

## 3. Deploy to Vercel (free)

**Option A — via the Vercel dashboard**
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import
   the repository.
3. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a free `*.vercel.app` URL.

**Option B — via the CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts; subsequent deploys are just `vercel --prod`.

## 4. Deploy to GitHub Pages (free, alternative)

1. In `vite.config.js`, set `base` to your repo name:
   ```js
   base: '/your-repo-name/',
   ```
2. Build the site: `npm run build`
3. Deploy the `dist/` folder to the `gh-pages` branch, e.g. using the
   `gh-pages` package:
   ```bash
   npm install -D gh-pages
   npx gh-pages -d dist
   ```
4. In your GitHub repo settings → Pages, set the source to the
   `gh-pages` branch.

## 5. Replacing placeholder contact information

Open `src/data/site.js` and replace:

```js
linkedin: 'https://linkedin.com/in/your-profile-here',
email: 'your.email@example.com',
```

with your real LinkedIn URL and email. The GitHub link is already set to
`https://github.com/ucheemmanuel995-jpg`.

### Adding your CV

Drop your CV file into `public/cv/` and name it
`Emmanuel-Opara-CV.pdf` (or update the `href` in `Navbar.jsx` and
`Hero.jsx` if you use a different filename).

### Wiring up the contact form

The contact form currently opens the visitor's email client via a
`mailto:` link (`src/components/Contact.jsx`) — this keeps the site
fully static and free. If you'd rather collect submissions directly,
swap `handleSubmit` for a POST request to a free form backend such as
[Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
— both have free tiers and need no server of your own.

### Replacing GitHub repository placeholders

The **Log Automation** project currently links to a placeholder GitHub
URL (marked with `githubIsPlaceholder: true` in `src/data/projects.js`).
Once that repository is public, update its `github` field and remove
the `githubIsPlaceholder` flag.

## 6. Adding future projects

All project data lives in one file: `src/data/projects.js`. To add a
new project, append another object to the `projects` array following
the existing shape (`title`, `category`, `tags`, `summary`, `tech`,
`highlights`, `detail`, `github`, `demo`). It will automatically appear
in the Projects grid, the filters, and the detail modal — no other file
needs to change.

## Project structure

```
src/
├── components/     UI sections (Navbar, Hero, Projects, etc.)
├── data/           projects.js, site.js — edit content here
├── hooks/          useTheme.js — light/dark mode
├── App.jsx
├── main.jsx
└── index.css
public/
├── favicon.svg
└── cv/             put your CV PDF here
```

## Notes

- No employment history, certifications, or fabricated statistics are
  included, per the brief — the site is project- and research-focused.
- Reduced-motion is respected (`prefers-reduced-motion`).
- Light and dark themes are both fully styled, toggled from the navbar
  and persisted in `localStorage`.
