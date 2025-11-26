# How to Deploy Your Portfolio

## Option 1: Netlify (Recommended - Easiest & Free)

### Method A: Drag & Drop (Fastest)
1. Build your project: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder to the page
4. Your site will be live instantly with a URL like: `https://random-name-123.netlify.app`
5. You can customize the URL in site settings

### Method B: Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --prod --dir=dist`
4. Follow the prompts

### Method C: Connect to GitHub
1. Push your code to GitHub
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy!

## Option 2: Vercel (Also Free & Easy)

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be live at: `https://your-project.vercel.app`

Or use the web interface:
1. Go to https://vercel.com
2. Import your GitHub repository
3. It auto-detects Vite settings
4. Deploy!

## Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repository settings
5. Your site will be at: `https://yourusername.github.io/repository-name`

## Option 4: Temporary Share (ngrok - for testing)

1. Install ngrok: https://ngrok.com/download
2. Keep your preview server running: `npm run preview`
3. In another terminal: `ngrok http 4173`
4. Share the ngrok URL (expires when you close it)

## Quick Deploy Commands

### Netlify (Drag & Drop - Easiest)
```bash
npm run build
# Then drag the 'dist' folder to netlify.com/drop
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

