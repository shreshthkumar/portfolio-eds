# da.live Content Creation Guide

Quick 10-minute guide to create your portfolio content in da.live.

## Step 1: Access da.live (Already Open)

URL: https://da.live/edit#/shreshthkumar/portfolio-eds/main/

If not signed in:
1. Click "Sign in with GitHub"
2. Authorize da.live to access your repository

## Step 2: Create Homepage

### Create New Document

1. Click the **"+"** button or **"New Document"**
2. Name it: **`index`** (no file extension needed)
3. Click "Create"

### Add Content to index

Copy and paste each section below into your da.live editor:

---

## HERO SECTION

**To create the Hero block:**

1. Type the heading: `Hero`
2. Press Enter
3. Insert a **Table** (use the toolbar or type `/table`)
4. Make it **1 column, 5 rows**
5. Fill in the cells with this content:

| Hero |
|------|
| Senior Solution Architect |
| Architecting Digital **Transformation** at Scale |
| Leading solution design, architecture & delivery of complex enterprise engagements at Deloitte Digital |
| 15+ Years Experience │ 50+ Enterprise Projects │ 10+ Fortune 500 Clients |
| [Explore My Journey](#journey) │ [Let's Connect](#contact) |

---

## ABOUT SECTION

After the Hero table, add regular paragraphs:

**About Me**

Senior Solution Architect (Technical Specialist) at Deloitte Digital with a proven track record of delivering complex digital transformation programs from conception to delivery.

I specialize in architecting and solutioning end-to-end digital transformations for private sector clients across retail, telecommunications, media, and technology industries. My expertise lies in Adobe Experience Cloud (primarily AEM), AWS, AI, Ecommerce, Retail Media, and Microservices architecture.

Working with globally distributed teams, I lead development initiatives using agile methodologies while maintaining the highest quality standards. I've successfully delivered customer-facing digital marketing engagements and complex enterprise solutions for Fortune 500 companies.

---

## TIMELINE SECTION

**To create the Timeline block:**

1. Type the heading: `Timeline`
2. Press Enter
3. Insert a **Table**
4. Make it **7 columns** with the headers and data below:

| Year | Title | Company | Type | Description | Tags | Clients |
|------|-------|---------|------|-------------|------|---------|
| 2019 - Present | Senior Solution Architect | Deloitte Digital | | Leading solution, architecture & delivery of complex digital transformation engagements. Unlocking new opportunities for private sector clients across retail, telco, media & tech. Managing globally distributed teams and delivering enterprise-scale Adobe Experience Cloud implementations. | Solution Architecture, Digital Transformation, Team Leadership | |
| 2018 - 2019 | DAM Technical Lead | Condé Nast | | Led Digital Asset Management technical initiatives for one of the world's premier media companies, architecting solutions to manage and deliver digital content at scale. | DAM, Media, Technical Leadership | |
| 2017 - 2018 | Solution Lead | BOSE | | Architected and delivered digital experience solutions for premium audio brand, focusing on ecommerce and customer engagement platforms. | Ecommerce, AEM, Solution Design | |
| 2012 - 2017 | Lead Architect & Consultant | Adobe Consulting | | Led, architected, and delivered Adobe Experience Manager solutions for Fortune 500 clients. Worked on high-profile engagements across multiple industries. | AEM Architecture, Enterprise Consulting, Technical Leadership | Microsoft, Vodafone, Lenovo, Telegraph, PRH, HSBC, NIKE |
| 2012 | AEM Specialist | Sapient | milestone | First AEM Project: Harley Davidson - Delivered my first Adobe Experience Manager project, marking the beginning of a specialized career in digital experience platforms. | AEM, Milestone Project | |
| 2010 | Java Developer | CGI (Bell Canada) | milestone | Career Start - Began my professional journey as a Java Developer, building strong foundations in enterprise software development and telecommunications. | Java, Telecommunications, Career Foundation | |

---

## PROJECTS SECTION

**To create the Projects block:**

1. Type the heading: `Projects`
2. Press Enter
3. Insert a **Table**
4. Make it **6 columns** with this data:

| Badge | Industry | Title | Description | Tags | Size |
|-------|----------|-------|-------------|------|------|
| Deloitte Digital | Retail & Ecommerce | Enterprise Retail Digital Transformation | Led end-to-end solution architecture and delivery for a major retail client's digital transformation. Implemented retail media networks, microservices architecture, and AI-powered personalization across global markets. | AEM, Retail Media, Microservices, AWS, AI/ML | large |
| Telecommunications | Vodafone | Global Telco Platform Modernization | Architected and delivered Adobe Experience Manager implementation for Vodafone's global digital presence. Led technical teams in creating a scalable, multi-market platform supporting millions of customers. | AEM Sites, Multi-Market, Enterprise Scale | |
| Financial Services | HSBC | Banking Digital Experience Platform | Designed and implemented secure, compliant digital banking experiences using Adobe Experience Cloud. Delivered mission-critical customer-facing applications with stringent security requirements. | AEM, Security, Compliance | |
| Sports & Lifestyle | NIKE | Global Ecommerce Experience | Architected digital experience solutions for Nike's global ecommerce platform, focusing on performance, personalization, and seamless customer journeys across digital touchpoints. | Ecommerce, Personalization, Global Scale | |
| Technology | Microsoft | Enterprise Content Platform | Led AEM architecture and implementation for Microsoft's enterprise content management needs, establishing best practices and scalable patterns. | AEM, DAM, Integration | |
| Media & Publishing | Telegraph & PRH | Publishing Platform Solutions | Delivered content management and digital publishing platforms for major media organizations, enabling efficient content creation, management, and distribution. | Publishing, AEM, Content Workflow | |

---

## CONTACT SECTION

Add regular paragraphs at the end:

**Get In Touch**

Ready to transform your digital experience? Whether you're looking for solution architecture expertise, digital transformation guidance, or just want to discuss innovative ideas, I'd love to hear from you.

- [LinkedIn](https://www.linkedin.com/in/shreshthkumar/)
- [Email](mailto:shreshthvicky@gmail.com)
- [GitHub](https://github.com/shreshthkumar)

---

## Step 3: Save & Preview

1. **Save**: Content auto-saves, or click Save icon
2. **Preview**: Click the Preview button in da.live toolbar
3. **Publish**: When ready, click Publish

Your site will be live at:
- **Preview**: https://main--portfolio-eds--shreshthkumar.hlx.page/
- **Live**: https://main--portfolio-eds--shreshthkumar.hlx.live/

---

## Tips for da.live Editing

### Creating Tables (Blocks)
- Tables become EDS "blocks"
- Table name (first row) = block name (e.g., "Hero", "Timeline", "Projects")
- Custom blocks in your GitHub repo will style these automatically

### Formatting Text
- **Bold**: Select text → Ctrl+B (or Cmd+B)
- *Italic*: Select text → Ctrl+I (or Cmd+I)
- Links: Select text → Click link icon → paste URL

### Table Structure
- First row = block name
- Column headers define the block data structure
- Each row = one item (timeline entry, project, etc.)

### Separators
- Use `---` (horizontal rule) to separate sections
- Or just use headings (##) between sections

---

## Creating Additional Pages

To create more pages (about, contact, etc.):

1. Click **"+"** in da.live
2. Name the document (e.g., `about`, `contact`)
3. Add content
4. Save and publish
5. Pages will be available at: `your-site.com/about`, `your-site.com/contact`

---

## Navigation & Footer (Optional)

### Create nav Document

1. Create new doc: `nav`
2. Add:

```
- [Home](/)
- [About](#about)
- [Journey](#journey)
- [Projects](#projects)
- [Contact](#contact)
```

### Create footer Document

1. Create new doc: `footer`
2. Add:

```
© 2026 Shreshth Kumar. All rights reserved.

Built with Adobe Experience Manager Edge Delivery Services

[LinkedIn](https://www.linkedin.com/in/shreshthkumar/) | [GitHub](https://github.com/shreshthkumar)
```

---

## You're Done! 🎉

Once you've created the `index` document in da.live with the content above:

1. Click **Preview** to see your site
2. Click **Publish** to make it live
3. Visit: https://main--portfolio-eds--shreshthkumar.hlx.page/

The custom blocks (Hero, Timeline, Projects) will automatically style your content beautifully with the CSS and JavaScript we created in GitHub!

---

## Troubleshooting

**Content not showing?**
- Make sure you clicked "Publish" (not just Save)
- Wait 1-2 minutes for deployment
- Clear browser cache

**Blocks not styled?**
- Check that AEM Code Sync is installed on your GitHub repo
- Verify fstab.yaml points to: `https://content.da.live/shreshthkumar/portfolio-eds`

**Need help?**
- Check browser console for errors
- Visit: https://discord.gg/adobe-dx-community

---

**Estimated time to complete: 10-15 minutes**
