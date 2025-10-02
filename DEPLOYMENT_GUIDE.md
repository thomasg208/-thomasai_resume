# VERITAS AI LAB - Deployment Guide

## Automatic GitHub → Vercel Deployment Setup

This guide explains how to set up automatic deployments so that every time you push changes to GitHub, Vercel automatically deploys your updated website.

---

## Prerequisites

- Git installed on your system
- GitHub account: https://github.com/thomasg208
- Vercel account (sign up at https://vercel.com)

---

## Step 1: Initialize Git Repository (if not already done)

Navigate to your project directory:
```bash
cd thomas_resume/strikecell-portfolio
```

Initialize git:
```bash
git init
```

Check current status:
```bash
git status
```

---

## Step 2: Commit Your Code

Add all files to git:
```bash
git add .
```

Create your first commit:
```bash
git commit -m "Initial commit: VERITAS AI LAB portfolio with resume download"
```

---

## Step 3: Create GitHub Repository

1. Go to https://github.com/thomasg208
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Repository settings:
   - **Name**: `veritas-ai-lab` (or `thomas-portfolio`)
   - **Description**: "VERITAS AI LAB - Elite AI Systems Architect Portfolio"
   - **Visibility**: Public (or Private if you prefer)
   - **Do NOT** initialize with README, .gitignore, or license (you already have these)
5. Click **"Create repository"**

---

## Step 4: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/thomasg208/veritas-ai-lab.git
git branch -M main
git push -u origin main
```

Your code is now on GitHub!

---

## Step 5: Connect to Vercel

### 5.1 Sign Up/Login to Vercel
1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### 5.2 Import Your Project
1. On your Vercel dashboard, click **"Add New..."**
2. Select **"Project"**
3. Click **"Import Git Repository"**
4. Find your `veritas-ai-lab` repository
5. Click **"Import"**

### 5.3 Configure Build Settings
Vercel should auto-detect these settings:
- **Framework Preset**: Create React App
- **Root Directory**: `./` (leave as is)
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

If not auto-detected, enter them manually.

### 5.4 Environment Variables (if needed)
If you have any environment variables (API keys, etc.):
1. Click **"Environment Variables"**
2. Add your variables
3. For this project, you likely don't need any

### 5.5 Deploy!
1. Click **"Deploy"**
2. Wait 1-3 minutes for the build to complete
3. You'll get a live URL like: `https://veritas-ai-lab.vercel.app`

---

## Step 6: Automatic Deployments Are Now Active! 🎉

### How It Works:

Every time you make changes:

```bash
# 1. Make your code changes
# (edit files as needed)

# 2. Stage changes
git add .

# 3. Commit with a descriptive message
git commit -m "Update: Added new AI system to portfolio"

# 4. Push to GitHub
git push origin main
```

**Vercel automatically**:
- Detects the push to GitHub
- Starts a new build
- Deploys your changes (usually in 1-2 minutes)
- Updates your live website

### You'll receive:
- ✅ Email notification when deployment succeeds
- ❌ Email notification if deployment fails (with error logs)

---

## Step 7: Verify Your Deployment

After pushing to GitHub:
1. Go to https://vercel.com/dashboard
2. Click on your project
3. See the deployment in progress
4. Once complete, click the domain to view your live site
5. Test the "Download Resume" button to ensure it works!

---

## Advanced Features

### Custom Domain
1. In Vercel dashboard, go to your project
2. Click **"Settings" → "Domains"**
3. Add your custom domain (e.g., `thomasgaye.com`)
4. Follow DNS configuration instructions

### Preview Deployments
- Every Git branch gets its own preview URL
- Every pull request gets its own preview URL
- Perfect for testing changes before going live

### Rollback
- If something breaks, click **"Rollback"** in Vercel
- Instantly revert to a previous working deployment

---

## Quick Reference Commands

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub (triggers Vercel deployment)
git push origin main

# View git log
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## Troubleshooting

### Build Fails on Vercel
1. Check the build logs in Vercel dashboard
2. Look for error messages
3. Common issues:
   - Missing dependencies: Run `npm install` locally
   - Linting errors: Fix code issues
   - Environment variables: Add them in Vercel settings

### Resume PDF Not Downloading
- Ensure `Thomas_Gaye_AI_Engineer_Resume.pdf` is in the `public/` folder
- Check that you committed and pushed the PDF file
- Verify the file path in your code matches the actual filename

### Git Push Rejected
```bash
# Pull latest changes first
git pull origin main

# Then push again
git push origin main
```

---

## Your Deployment URLs

After setup, you'll have:

**Production URL**: `https://veritas-ai-lab.vercel.app` (or your custom domain)
**GitHub Repository**: `https://github.com/thomasg208/veritas-ai-lab`
**Vercel Dashboard**: `https://vercel.com/thomasg208/veritas-ai-lab`

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Git Docs**: https://git-scm.com/doc
- **GitHub Docs**: https://docs.github.com

---

## Summary Workflow

```
Local Changes → Git Commit → Git Push → GitHub → Vercel Auto-Deploy → Live Website ✨
```

**That's it!** Your portfolio is now set up for automatic deployments. Every push to GitHub will automatically update your live website.

---

**Last Updated**: October 2025
**Project**: VERITAS AI LAB Portfolio
**Developer**: Thomas Gaye
