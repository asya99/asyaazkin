# Portfolio Website

A modern, responsive portfolio website built with React and Vite, inspired by elegant design patterns. This portfolio showcases your work as a Data Scientist and AI Researcher.

## 🌟 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Single Page Application**: Smooth navigation without page reloads
- **Easy to Customize**: Simple component structure for easy personalization
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your portfolio

## 🎨 Customization

### Update Your Information

1. **Home Page** (`src/components/Home.jsx`)
   - Update your name, tagline, and description
   - Modify the decorative elements to match your style

2. **About Page** (`src/components/About.jsx`)
   - Add your experience, education, and skills
   - Update job titles, companies, and dates
   - Customize skills sections with your technologies

3. **Projects Page** (`src/components/Projects.jsx`)
   - Add your own projects to the `projects` object
   - Update project titles, descriptions, and technologies
   - Add links to GitHub repos or live demos
   - Customize categories (ml, data, research, etc.)

4. **Contact Page** (`src/components/Contact.jsx`)
   - Update email address and social media links
   - Modify the resume download link

### Color Scheme

The portfolio uses a purple gradient theme. To change colors:

- Primary color: `#7c3aed` (purple)
- Accent color: `#c084fc` (light purple)
- Background: Gradient from slate to purple

Update these in each component's inline styles or create a theme configuration.

### Add Your Resume

1. Place your PDF resume in the `public` folder as `asyaazkin_resume.pdf`
2. Or update the link in `Contact.jsx` to point to your resume location

## 📦 Building for Production

Build the optimized production version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Update the base path** in `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/YOUR-REPO-NAME/', // Change this to your repository name
   })
   ```

2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"

4. **The site will automatically deploy** on every push to the main branch
   - Visit `https://YOUR_USERNAME.github.io/YOUR-REPO-NAME/`

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Playfair Display & Inter fonts

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets
│   └── asyaazkin_resume.pdf
├── src/
│   ├── components/      # React components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## 🎯 Development Tips

### Adding New Pages

1. Create a new component in `src/components/`
2. Import it in `App.jsx`
3. Add a new case in the `renderPage()` switch statement
4. Add navigation link in each component's nav section

### Styling

- Use inline styles for component-specific styling
- Use Tailwind classes for utility styling
- Update `index.css` for global styles

### Performance

- Images are not included by default - add your own to `public/`
- Keep bundle size small by avoiding large dependencies
- Use lazy loading for images if needed

## 🐛 Troubleshooting

### Port already in use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Build fails
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages shows 404
- Check that the `base` path in `vite.config.js` matches your repo name
- Ensure GitHub Actions workflow has completed successfully
- Verify GitHub Pages is enabled in repository settings

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 💡 Inspiration

This portfolio was inspired by modern portfolio designs with a focus on:
- Clean, minimal aesthetics
- Smooth user experience
- Professional presentation
- Easy customization

---

**Made with ❤️ using React + Vite**

For questions or issues, please open an issue on GitHub.
