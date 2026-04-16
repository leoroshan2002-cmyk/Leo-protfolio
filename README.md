# Leo Prakash — MERN Stack Portfolio

Live URL: **https://leoroshan2002-cmyk.github.io/Leo-protfolio/**

---

## ⚡ Fix White Page — Step by Step

The white page happens when the **old `gh-pages` branch** still has files built
with the wrong base path. Follow these steps exactly:

### Step 1 — Delete the old gh-pages branch on GitHub

Go to your repo → **Branches** → find `gh-pages` → delete it.

Or run in terminal:
```bash
git push origin --delete gh-pages
```

### Step 2 — Push this updated code to main

```bash
git add .
git commit -m "fix: base path and GitHub Actions deploy"
git push origin main
```

### Step 3 — Deploy fresh

**Option A — GitHub Actions (auto, recommended):**
- Go to **Settings → Pages → Source → GitHub Actions**
- The workflow runs automatically on push to `main`
- Wait ~60 seconds → your site is live ✅

**Option B — Manual gh-pages deploy:**
```bash
npm install
npm run deploy
```

---

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## 📝 Edit Your Content

All your info is in `src/data/index.js`:
- Name, stats, skills
- Projects (add more here)
- Services
- Contact links

## 📁 File Structure

```
src/
├── components/        # All React components
│   ├── Navbar.jsx     # Top navbar with mobile menu
│   ├── Hero.jsx       # Landing section
│   ├── About.jsx      # About + profile photo
│   ├── Skills.jsx     # Skills grid
│   ├── Projects.jsx   # Project cards
│   ├── Services.jsx   # Services section
│   ├── Contact.jsx    # Contact info
│   ├── Footer.jsx     # Footer
│   └── ErrorBoundary.jsx  # Catches JS errors
├── styles/            # CSS per component
├── data/index.js      # ← YOUR CONTENT IS HERE
├── hooks/index.js     # Custom hooks
└── assets/            # profile.jpeg, img.jpeg
.github/
└── workflows/
    └── deploy.yml     # Auto-deploy on git push
```

## ⚙️ Config Files

| File | Setting |
|---|---|
| `vite.config.js` | `base: '/Leo-protfolio/'` |
| `package.json` | `homepage: '...github.io/Leo-protfolio/'` |

> If you rename your GitHub repo, update **both** of these.
