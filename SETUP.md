# Quick Setup Guide

## 🎉 Your Portfolio is Ready!

Your portfolio website has been created in: `/Users/asyaangel/Downloads/portfolio-website/`

## 🚀 Next Steps

### 1. Test Locally

```bash
cd /Users/asyaangel/Downloads/portfolio-website
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

### 2. Customize Your Content

Update the following files with your information:

- **src/components/Home.jsx** - Your name, title, and introduction
- **src/components/About.jsx** - Experience, education, and skills
- **src/components/Projects.jsx** - Your projects and work
- **src/components/Contact.jsx** - Email and social media links

### 3. Deploy to GitHub

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-website/`

**Important**: Update `vite.config.js` to change `base: '/portfolio-website/'` to match your actual repository name.

## 📋 Customization Checklist

- [ ] Update name and title in Home.jsx
- [ ] Add your experience in About.jsx
- [ ] Add your projects in Projects.jsx
- [ ] Update contact links in Contact.jsx
- [ ] Replace resume PDF in public/ folder
- [ ] Change color scheme (optional)
- [ ] Add profile photo (optional)
- [ ] Update repository name in vite.config.js
- [ ] Test locally before deploying
- [ ] Push to GitHub and enable Pages

## 🎨 Pages Overview

Your portfolio includes 4 main pages:

1. **Home** - Landing page with your name and call-to-action
2. **About** - Your experience, education, and skills
3. **Projects** - Showcase of your work with filters
4. **Contact** - Ways to reach you and resume download

## 💡 Tips

- The site uses a purple/slate color scheme
- All navigation is smooth and animated
- Mobile responsive out of the box
- Resume PDF is ready to download
- GitHub Actions will auto-deploy on push

## 🆘 Need Help?

Check the full README.md for detailed documentation, troubleshooting, and more information.

---

**Enjoy your new portfolio! 🎊**
