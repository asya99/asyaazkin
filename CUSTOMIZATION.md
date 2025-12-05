# 🎨 Customization Guide

This guide shows you exactly what to change to make this portfolio yours.

## 🏠 Home Page (`src/components/Home.jsx`)

### Your Name (Line 55-58)
```jsx
<h1 style={{...}}>
  Asya Azkin  // ← Change this to your name
</h1>
```

### Your Title (Line 62-69)
```jsx
<p style={{...}}>
  Data Scientist & AI Researcher  // ← Change to your title
</p>
```

### Your Description (Line 73-82)
```jsx
<p style={{...}}>
  Passionate about leveraging machine learning...  // ← Write your intro
</p>
```

## 👤 About Page (`src/components/About.jsx`)

### Experience (Lines 38-81)
Replace each `<li>` with your own experience:
```jsx
<li style={{...}}>
  <strong>Your Job Title</strong> @ <em>Company Name</em>
  <div>Start Date - End Date</div>
</li>
```

### Education (Lines 96-109)
```jsx
<li style={{...}}>
  <strong>Your University</strong>
  <div>Your Degree & Major</div>
  <div>GPA: X.X/4.0 | Years</div>
</li>
```

### Skills (Lines 123-189)
Update the technology lists:
```jsx
<p style={{...}}>
  Python, R, SQL...  // ← Add your languages
</p>
```

### Research Interests (Lines 200-211)
```jsx
<p style={{...}}>
  I'm passionate about...  // ← Your research interests
</p>
```

## 💼 Projects Page (`src/components/Projects.jsx`)

### Your Projects (Lines 5-48)
Replace the sample projects in each category:

```jsx
const projects = {
  ml: [
    {
      title: 'Your Project Name',
      description: 'What it does and why it matters',
      tech: ['Technology', 'Stack', 'Used'],
      link: 'https://github.com/you/project' // or '#' if none
    },
    // Add more projects...
  ],
  data: [
    // Your data science projects...
  ],
  research: [
    // Your research projects...
  ]
};
```

### Category Labels (Lines 51-57)
Customize category names if needed:
```jsx
const categoryLabels = {
  all: 'All Projects',
  ml: 'Machine Learning',      // ← Change if needed
  data: 'Data Science',         // ← Change if needed
  research: 'Research'          // ← Change if needed
};
```

## 📧 Contact Page (`src/components/Contact.jsx`)

### Email (Lines 66-87)
```jsx
<a href="mailto:asya.azkin@example.com"  // ← Your email
```

### LinkedIn (Lines 89-110)
```jsx
<a href="https://linkedin.com/in/asyaazkin"  // ← Your LinkedIn
```

### GitHub (Lines 112-133)
```jsx
<a href="https://github.com/asyaazkin"  // ← Your GitHub
```

### Twitter/X (Lines 135-156)
```jsx
<a href="https://twitter.com/asyaazkin"  // ← Your Twitter
```

## 🎨 Optional Customizations

### Change Color Scheme

Find and replace these color codes throughout the components:

- **Primary Purple**: `#7c3aed` → Your color
- **Light Purple**: `#c084fc` → Your accent
- **Purple Background**: `#f3e8ff` → Your light shade
- **Dark Background**: `#0f172a` → Your dark color

### Change Fonts

In `index.html` (lines 22-24):
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

Then update in components:
- `fontFamily: "'Playfair Display', serif"` → Your heading font
- `fontFamily: "'Inter', sans-serif"` → Your body font

### Add Your Photo

1. Add your photo to `public/` folder (e.g., `profile.jpg`)
2. In `Home.jsx`, add an image element:

```jsx
<img
  src="/profile.jpg"
  alt="Your Name"
  style={{
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '2rem'
  }}
/>
```

### Update Page Titles

In `index.html` (lines 6-16):
```html
<title>Asya Azkin - Portfolio</title>  <!-- ← Your name -->
<meta property="og:title" content="Asya Azkin's Portfolio" />  <!-- ← Your name -->
<meta property="og:description" content="Data Scientist & AI Researcher..." />  <!-- ← Your title -->
```

## 📄 Update Resume

1. Replace `public/asyaazkin_resume.pdf` with your resume PDF
2. Keep the same filename, or update in `Contact.jsx`:

```jsx
<a href="/your-resume-name.pdf" download>
  Download PDF →
</a>
```

## 🔧 Configuration Files

### Repository Name (`vite.config.js`)

**IMPORTANT** - Update this before deploying:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',  // ← Change to YOUR repo name
})
```

### Package Name (`package.json`)

Optional, but recommended:

```json
{
  "name": "portfolio-website",  // ← Your portfolio name
  "version": "1.0.0",
  ...
}
```

## ✅ Pre-Launch Checklist

Before deploying, make sure you've updated:

- [ ] Your name in Home.jsx
- [ ] Your title/tagline in Home.jsx
- [ ] Your description in Home.jsx
- [ ] Experience in About.jsx
- [ ] Education in About.jsx
- [ ] Skills in About.jsx
- [ ] All projects in Projects.jsx
- [ ] Email in Contact.jsx
- [ ] Social media links in Contact.jsx
- [ ] Resume PDF in public/
- [ ] Repository name in vite.config.js
- [ ] Page titles in index.html
- [ ] Meta descriptions in index.html

## 🎯 Quick Replace Guide

Use your code editor's "Find and Replace" feature:

1. **Find**: `Asya Azkin` → **Replace**: Your Name
2. **Find**: `Data Scientist & AI Researcher` → **Replace**: Your Title
3. **Find**: `asya.azkin@example.com` → **Replace**: Your Email
4. **Find**: `asyaazkin` → **Replace**: Your Username

## 💡 Pro Tips

1. **Test after each change** - Run `npm run dev` to see your updates
2. **Commit frequently** - Save your progress with git commits
3. **Keep it professional** - This is your public portfolio
4. **Proofread everything** - Check for typos and grammar
5. **Get feedback** - Ask friends to review before launching

## 🆘 Need Help?

- Check the README.md for troubleshooting
- Review the PROJECT_SUMMARY.md for an overview
- Look at the SETUP.md for deployment steps

---

**Happy customizing! Make it uniquely yours! 🌟**
