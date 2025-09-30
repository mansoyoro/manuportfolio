# Manuel Campano - Portfolio

A modern, responsive portfolio website showcasing mobile app development projects and professional background.

## Features

- **Modern Design**: Clean, professional interface with light/dark theme toggle
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Hover effects on project cards with blur and overlay descriptions
- **Video Support**: Embedded demo videos for projects
- **Fast Loading**: Built with Vite and optimized for performance

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router with HashRouter (GitHub Pages compatible)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Project Structure

```
src/
├── App.tsx              # Main app with routing and components
├── main.tsx             # App entry point
├── index.css            # Global styles with Tailwind imports
├── pages/
│   └── ProjectPage.tsx  # Individual project page component
└── assets/
    └── projects.json    # Project data and content
```

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Customization

### Adding/Updating Projects

Edit `src/assets/projects.json` to modify project information:

```json
{
  "projects": [
    {
      "title": "Project Name",
      "slug": "project-slug",
      "image": "/path/to/image.png",
      "blurb": "Short description for hover overlay",
      "long": "Detailed project description",
      "video": "/path/to/demo.mp4"
    }
  ]
}
```

### Adding Media Files

Place media files in the `public/` directory:
- Images: `public/project-screenshot.png`
- Videos: `public/project-demo.mp4`

Reference them in `projects.json` with leading slash: `/project-screenshot.png`

### Updating Content

- **Bio**: Edit the bio text in `src/App.tsx` (Hero and ProfileView components)
- **Contact Links**: Update URLs in the Navbar component
- **Styling**: Modify Tailwind classes throughout components

## Deployment

### GitHub Pages

1. **Create GitHub repository** named `manuportfolio`

2. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/manuportfolio.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `/ (root)`
   - Save

5. **Access your site**:
   - URL: `https://yourusername.github.io/manuportfolio/`
   - Custom domain: Add `CNAME` file in `public/` with your domain

### Custom Domain Setup

1. **Add CNAME file**:
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS**:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records: `@` → GitHub Pages IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)

3. **Enable HTTPS** (automatic via GitHub Pages)

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~230KB gzipped
- **Loading Time**: <2s on 3G

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- **Email**: mcastronomia@gmail.com
- **GitHub**: [mansoyoro](https://github.com/mansoyoro)
- **LinkedIn**: [manuel-campano2](https://linkedin.com/in/manuel-campano2)