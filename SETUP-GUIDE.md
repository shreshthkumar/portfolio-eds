# Adobe EDS Portfolio Setup Guide

Complete step-by-step guide to set up your portfolio with Adobe Edge Delivery Services and da.live.

## Phase 1: Google Drive Setup (5 minutes)

### Step 1: Create Content Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder named `portfolio-content`
3. Open the folder and copy the URL from your browser
4. The URL will look like: `https://drive.google.com/drive/folders/1ABC...XYZ`
5. Extract the folder ID (the part after `/folders/`)

### Step 2: Share with Adobe

1. Click "Share" on your folder
2. Add `helix@adobe.com` as an **Editor**
3. Click "Send"

## Phase 2: GitHub Setup (10 minutes)

### Step 1: Initialize Repository

```bash
cd /Users/shreskumar/portfolio-eds
git init
git add .
git commit -m "Initial commit: Adobe EDS Portfolio

- Custom EDS blocks for portfolio
- Hero, Timeline, Projects blocks
- Document-based authoring ready
- Configured for da.live integration

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git branch -M main
```

### Step 2: Create GitHub Repository

```bash
# Using SSH
git remote add origin git@github.com:shreshthkumar/portfolio-eds.git
git push -u origin main
```

Or manually:
1. Go to https://github.com/new
2. Repository name: `portfolio-eds`
3. Public repository
4. Don't initialize with README
5. Click "Create repository"
6. Push your code using the commands above

### Step 3: Install AEM Code Sync

1. Visit: https://github.com/apps/aem-code-sync/installations/new
2. Select "Only select repositories"
3. Choose `shreshthkumar/portfolio-eds`
4. Click "Install"

## Phase 3: Update Configuration (2 minutes)

### Update fstab.yaml

1. Open `fstab.yaml` in your editor
2. Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` with the ID from Phase 1
3. Save and commit:

```bash
git add fstab.yaml
git commit -m "Configure Google Drive folder"
git push
```

## Phase 4: Install Tools (5 minutes)

### AEM CLI

```bash
npm install -g @adobe/aem-cli
```

### AEM Sidekick (Chrome Extension)

1. Open Chrome
2. Visit: https://chrome.google.com/webstore/detail/helix-sidekick/ccfggkjabjahcjoljmgmklhpaccedipo
3. Click "Add to Chrome"
4. Pin the extension to your toolbar

## Phase 5: Create Content in Google Docs (15 minutes)

### Create index.docx

1. In your Google Drive `portfolio-content` folder
2. Create a new Google Doc named `index`
3. Copy this template:

---

**Hero**

```
Senior Solution Architect

Architecting Digital
Transformation at Scale

Leading solution design, architecture & delivery of complex enterprise engagements at Deloitte Digital

15+-Years Experience | 50+-Enterprise Projects | 10+-Fortune 500 Clients

#journey-Explore My Journey | #contact-Let's Connect
```

---

**Timeline**

Create a table with 7 columns:

| Year | Title | Company | Type | Description | Tags | Clients |
|------|-------|---------|------|-------------|------|---------|
| 2019 - Present | Senior Solution Architect | Deloitte Digital | | Leading solution, architecture & delivery of complex digital transformation engagements. | Solution Architecture, Digital Transformation | |
| 2018 - 2019 | DAM Technical Lead | Condé Nast | | Led Digital Asset Management technical initiatives. | DAM, Media | |
| 2012 | AEM Specialist | Sapient | milestone | First AEM Project: Harley Davidson | AEM, Milestone | |
| 2010 | Java Developer | CGI (Bell Canada) | milestone | Career Start as Java Developer | Java, Telecommunications | |

---

**Projects**

Create a table with 6 columns:

| Badge | Industry | Title | Description | Tags | Size |
|-------|----------|-------|-------------|------|------|
| Deloitte Digital | Retail & Ecommerce | Enterprise Retail Digital Transformation | Led end-to-end solution architecture... | AEM, Retail Media, AWS | large |
| Telecommunications | Vodafone | Global Telco Platform | Architected Adobe Experience Manager implementation... | AEM Sites, Multi-Market | |

---

### Important Google Docs Formatting

- Use `---` on a new line to separate blocks
- Use tables for structured data (Timeline, Projects)
- Use `|` to separate multiple items in a cell
- Link format: `url-Link Text`
- For milestone markers: add "milestone" in the Type column

## Phase 6: Preview & Publish (5 minutes)

### Local Preview

```bash
cd /Users/shreskumar/portfolio-eds
aem up
```

Open: http://localhost:3000

### Use Sidekick in Google Docs

1. Open your `index` Google Doc
2. Click the AEM Sidekick extension
3. Configure project:
   - GitHub Org: `shreshthkumar`
   - GitHub Repo: `portfolio-eds`
   - GitHub Branch: `main`
4. Click "Preview" - Opens your preview URL
5. Click "Publish" - Publishes to live

## Phase 7: Access Your Sites

After setup, your portfolio will be available at:

- **Preview**: `https://main--portfolio-eds--shreshthkumar.hlx.page/`
- **Live**: `https://main--portfolio-eds--shreshthkumar.hlx.live/`

## Using da.live (Alternative to Google Docs)

1. Go to https://da.live
2. Sign in with GitHub
3. Select your `portfolio-eds` repository
4. Start editing content visually
5. da.live provides a visual editor similar to Medium

## Troubleshooting

### Sidekick not showing

- Refresh the page
- Check extension is installed and pinned
- Verify you're signed into GitHub in Chrome

### Content not updating

- Clear browser cache
- Check fstab.yaml is correct
- Verify Google Drive folder is shared with helix@adobe.com

### Preview shows 404

- Wait 1-2 minutes after first push
- Check AEM Code Sync is installed
- Verify GitHub repository is public or AEM Code Sync has access

## Next Steps

1. ✅ Complete all phases above
2. 📝 Create additional pages (about, contact, etc.)
3. 🎨 Customize blocks in `blocks/` folder
4. 🚀 Add custom domain via GitHub Pages or Cloudflare

## Support Resources

- **Discord**: https://discord.gg/adobe-dx-community
- **Documentation**: https://www.aem.live/docs
- **Block Collection**: https://www.aem.live/developer/block-collection
- **Tutorial**: https://www.aem.live/developer/tutorial

---

Need help? Create an issue in your GitHub repo or ask in the Adobe EDS Discord community!
