# Shreshth Kumar - Portfolio (Adobe EDS)

Professional portfolio website built with Adobe Experience Manager Edge Delivery Services (EDS) and document-based authoring using da.live.

## Features

- **Document-Based Authoring**: Author content in Google Docs or Microsoft Word
- **Instant Preview**: See changes live with the AEM Sidekick
- **Blazing Fast**: Edge Delivery Services for optimal performance
- **Custom Blocks**: Hero, Timeline, Projects, and more

## Quick Start

### 1. Prerequisites

- Google Drive or Microsoft SharePoint account
- Chrome browser (for AEM Sidekick extension)
- Node.js and npm installed

### 2. Install AEM CLI

```bash
npm install -g @adobe/aem-cli
```

### 3. Set Up Google Drive

1. Create a folder in Google Drive for your content
2. Share the folder with `helix@adobe.com` (Editor access)
3. Copy the folder URL (it should look like: `https://drive.google.com/drive/folders/FOLDER_ID`)

### 4. Update fstab.yaml

Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` in `fstab.yaml` with your actual folder ID from step 3.

```yaml
mountpoints:
  /: https://drive.google.com/drive/folders/YOUR_FOLDER_ID
```

### 5. Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: Adobe EDS Portfolio"
git branch -M main
git remote add origin git@github.com:shreshthkumar/portfolio-eds.git
git push -u origin main
```

### 6. Install AEM Code Sync

1. Go to: https://github.com/apps/aem-code-sync/installations/new
2. Select your `portfolio-eds` repository
3. Grant access

### 7. Install AEM Sidekick (Chrome Extension)

1. Install from: https://chrome.google.com/webstore/detail/helix-sidekick/ccfggkjabjahcjoljmgmklhpaccedipo
2. Pin the extension to your toolbar

## Creating Content in Google Docs

### Homepage Structure

Create a Google Doc named `index` in your Google Drive folder with the following content:

```
---
Hero
---
Senior Solution Architect
Architecting Digital Transformation at Scale
Leading solution design, architecture & delivery of complex enterprise engagements at Deloitte Digital
15+-Years Experience | 50+-Enterprise Projects | 10+-Fortune 500 Clients
#journey-Explore My Journey | #contact-Let's Connect
---

---
Timeline
---
2019 - Present|Senior Solution Architect|Deloitte Digital||Leading solution, architecture & delivery of complex digital transformation engagements. Unlocking new opportunities for private sector clients across retail, telco, media & tech. Managing globally distributed teams and delivering enterprise-scale Adobe Experience Cloud implementations.|Solution Architecture, Digital Transformation, Team Leadership|
2018 - 2019|DAM Technical Lead|Condé Nast||Led Digital Asset Management technical initiatives for one of the world's premier media companies, architecting solutions to manage and deliver digital content at scale.|DAM, Media, Technical Leadership|
2017 - 2018|Solution Lead|BOSE||Architected and delivered digital experience solutions for premium audio brand, focusing on ecommerce and customer engagement platforms.|Ecommerce, AEM, Solution Design|
2012 - 2017|Lead Architect & Consultant|Adobe Consulting||Led, architected, and delivered Adobe Experience Manager solutions for Fortune 500 clients.|AEM Architecture, Enterprise Consulting, Technical Leadership|Microsoft, Vodafone, Lenovo, Telegraph, PRH, HSBC, NIKE
2012|AEM Specialist|Sapient|milestone|First AEM Project: Harley Davidson - Delivered my first Adobe Experience Manager project, marking the beginning of a specialized career in digital experience platforms.|AEM, Milestone Project|
2010|Java Developer|CGI (Bell Canada)|milestone|Career Start - Began my professional journey as a Java Developer, building strong foundations in enterprise software development and telecommunications.|Java, Telecommunications, Career Foundation|
---

---
Projects
---
Deloitte Digital|Retail & Ecommerce|Enterprise Retail Digital Transformation|Led end-to-end solution architecture and delivery for a major retail client's digital transformation. Implemented retail media networks, microservices architecture, and AI-powered personalization across global markets.|AEM, Retail Media, Microservices, AWS, AI/ML|large
Telecommunications|Vodafone|Global Telco Platform Modernization|Architected and delivered Adobe Experience Manager implementation for Vodafone's global digital presence.|AEM Sites, Multi-Market, Enterprise Scale|
Financial Services|HSBC|Banking Digital Experience Platform|Designed and implemented secure, compliant digital banking experiences using Adobe Experience Cloud.|AEM, Security, Compliance|
Sports & Lifestyle|NIKE|Global Ecommerce Experience|Architected digital experience solutions for Nike's global ecommerce platform, focusing on performance, personalization, and seamless customer journeys.|Ecommerce, Personalization, Global Scale|
---
```

### Block Syntax

Each block is wrapped in `---` separators:

**Hero Block:**
```
---
Hero
---
Badge Text
Title Text
Subtitle Text
15+-Years | 50+-Projects | 10+-Clients
Link URL-Link Text | Link URL-Link Text
---
```

**Timeline Block:**
```
---
Timeline
---
Year|Title|Company|Type|Description|Tags|Clients
---
```

**Projects Block:**
```
---
Projects
---
Badge|Industry|Title|Description|Tags|Size
---
```

## Local Development

```bash
# Start local development server
aem up

# Your site will be available at:
# http://localhost:3000
```

## Using da.live for Authoring

1. Go to https://da.live
2. Connect your GitHub repository
3. Link your Google Drive folder
4. Start authoring in Google Docs
5. Use the Sidekick to preview and publish

### Using AEM Sidekick

1. Open your Google Doc
2. Click the Sidekick extension
3. Click "Preview" to see your changes
4. Click "Publish" to make them live

## Project Structure

```
portfolio-eds/
├── blocks/              # Custom EDS blocks
│   ├── hero/
│   │   ├── hero.js
│   │   └── hero.css
│   ├── timeline/
│   │   ├── timeline.js
│   │   └── timeline.css
│   └── projects/
│       ├── projects.js
│       └── projects.css
├── scripts/             # Core EDS scripts
│   ├── aem.js          # AEM core functionality
│   └── scripts.js       # Custom scripts
├── styles/              # Global styles
│   └── styles.css
├── fstab.yaml          # Content source configuration
├── head.html           # Document head metadata
└── README.md
```

## Custom Blocks

### Hero
Modern hero section with stats and call-to-action buttons.

### Timeline
Career journey timeline with milestones and client highlights.

### Projects
Project showcase with tags and industry categorization.

## Resources

- [Adobe EDS Documentation](https://www.aem.live/developer/tutorial)
- [AEM Sidekick](https://www.aem.live/developer/tutorial#previewing-and-publishing-content)
- [da.live Platform](https://da.live)
- [Block Collection](https://www.aem.live/developer/block-collection)

## Deployment

Your site will be automatically deployed to:
- **Preview**: `https://main--portfolio-eds--shreshthkumar.hlx.page/`
- **Live**: `https://main--portfolio-eds--shreshthkumar.hlx.live/`

## Support

For questions about Adobe EDS:
- [Adobe Experience League](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/overview)
- [Discord Community](https://discord.gg/adobe-dx-community)

---

Built with ❤️ using Adobe Experience Manager Edge Delivery Services
