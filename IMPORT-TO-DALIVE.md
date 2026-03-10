# How to Import Google Doc to da.live

## Step 1: Create Google Doc (5 minutes)

1. Go to [Google Docs](https://docs.google.com)
2. Click **"Blank document"**
3. **Rename** it to: `portfolio-index`

## Step 2: Copy Content

1. Open the file: `GOOGLE-DOC-TEMPLATE.txt` (I just created it)
2. Copy the entire content
3. Paste into your Google Doc

## Step 3: Format Tables in Google Docs

### Hero Table
1. Select the 5 lines under "Hero":
   ```
   Hero
   Senior Solution Architect
   Architecting Digital Transformation at Scale
   Leading solution design...
   15+ Years Experience...
   Explore My Journey...
   ```
2. Click **Insert → Table** → Choose **1 column, 6 rows**
3. Paste each line into a separate cell

### Timeline Table
1. Find the "TIMELINE TABLE" section
2. Select all the table data (including headers)
3. Click **Insert → Table**
4. Choose **7 columns, 7 rows** (6 data rows + 1 header)
5. Copy-paste each cell's content

   Or easier: Copy as tab-separated and paste directly - Google Docs will create the table

### Projects Table
1. Find the "PROJECTS TABLE" section
2. Select all the table data
3. Click **Insert → Table**
4. Choose **6 columns, 7 rows** (6 data rows + 1 header)
5. Copy-paste the content

### Horizontal Lines
- Replace each `---` with: **Insert → Horizontal line**

## Step 4: Share (if using Google Drive content source)

1. Click **Share** button
2. Add: `helix@adobe.com`
3. Give **Editor** access
4. Click **Send**

## Step 5: Get Google Doc URL

1. Click **Share** → **Copy link**
2. The URL will look like: `https://docs.google.com/document/d/ABC123.../edit`

## Step 6: Import to da.live

### Option A: Using da.live Importer

1. Go to: https://da.live/import
2. Paste your Google Doc URL
3. Select organization: `shreshthkumar`
4. Select site: `portfolio-eds`
5. Name the page: `index`
6. Click **Import**

### Option B: Direct in da.live Editor

1. Go to: https://da.live/edit#/shreshthkumar/portfolio-eds/main/
2. Click the **Import** button (if available)
3. Paste Google Doc URL
4. Click **Import**

### Option C: Manual Copy-Paste

1. Open your Google Doc
2. Select all content (Cmd+A / Ctrl+A)
3. Copy (Cmd+C / Ctrl+C)
4. Go to da.live: https://da.live/edit#/shreshthkumar/portfolio-eds/main/
5. Create new doc: `index`
6. Paste content (Cmd+V / Ctrl+V)
7. da.live will preserve tables and formatting

## Step 7: Publish

1. In da.live, click **Preview** to see your site
2. Click **Publish** to make it live

## Your Live URLs

- **Preview**: https://main--portfolio-eds--shreshthkumar.hlx.page/
- **Live**: https://main--portfolio-eds--shreshthkumar.hlx.live/

---

## Troubleshooting

**Tables not importing correctly?**
- In Google Docs, make sure content is actually in table cells
- Try copying table-by-table instead of all at once

**Content not showing in da.live?**
- Make sure you're signed in to da.live with GitHub
- Verify repository access is granted
- Refresh the da.live page

**Site not loading?**
- Wait 1-2 minutes after publishing
- Check that AEM Code Sync is installed on your GitHub repo
- Clear browser cache

---

## Alternative: Skip Google Docs

If Google Docs is too much work, I can create the content directly in markdown files in GitHub and we skip da.live entirely. The site will work exactly the same!

Just let me know if you want to go that route instead.
