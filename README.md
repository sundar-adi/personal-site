# Adi Sundar — Personal Website

Static personal website built with HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no monthly fees.

## Local Preview

Open `index.html` in your browser, or run a local server:

```bash
cd website
python3 -m http.server 8080
# Then open http://localhost:8080
```

## Deploy to GitHub Pages (Free)

### 1. Create a GitHub repository

Go to github.com → New Repository → name it `personal-site` (or `adisundar.github.io` for automatic GitHub Pages).

### 2. Push the code

```bash
cd website
git init
git add .
git commit -m "Initial site launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/personal-site.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose **main** branch, root folder (`/`)
4. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/personal-site/` within a few minutes.

### 4. Connect your custom domain (adisundar.com)

1. In your repo → **Settings** → **Pages** → **Custom domain**, enter `adisundar.com`
2. At your domain registrar, add these DNS records:

   **Option A — A records (recommended):**
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```

   **Option B — CNAME record:**
   ```
   CNAME  www  YOUR_USERNAME.github.io
   ```

3. Wait for DNS propagation (can take up to 24 hours)
4. Check "Enforce HTTPS" in GitHub Pages settings once DNS is verified

The `CNAME` file in this repo tells GitHub Pages to serve on your custom domain.

## File Structure

```
website/
├── index.html                 ← Main page (hero, about, case studies, timeline, advisory)
├── case-study-marble.html     ← Marble deep-dive case study
├── case-study-loftsmart.html  ← LoftSmart deep-dive case study
├── css/
│   └── style.css              ← All styles (design system, responsive, animations)
├── js/
│   └── main.js                ← Scroll animations, mobile nav, smooth scroll
├── CNAME                      ← Custom domain config for GitHub Pages
└── README.md                  ← This file
```

## Making Changes

Edit the HTML files directly — no build step required. Push changes to GitHub and they'll deploy automatically within minutes.
