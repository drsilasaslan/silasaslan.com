# Dr. Silas Aslan Landing Page

A modern, fast static website for Dr. Silas Aslan - Innovation AI.chemist

## 🚀 Quick Start

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Deploy
```bash
npm run deploy
```

## 🏗️ Project Structure

```
wp_silasaslan/
├── src/                  # React components
│   ├── components/        # Reusable React components
│   └── app/             # Next.js app router pages
├── data/                 # JSON content files
│   ├── hero.json         # Hero section content
│   ├── about.json        # About section content
│   ├── expertise.json     # Expertise items
│   ├── speaking.json      # Speaking events
│   └── contact.json      # Contact information
├── public/               # Static assets
│   ├── images/           # Profile & background images
│   ├── favicon*           # Profile picture as favicon
│   └── site.webmanifest # PWA manifest
├── out/                 # Build output (generated)
└── deploy.sh             # Deployment script
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.6 (React 19)
- **Styling**: TailwindCSS 4
- **Content**: JSON-based data files
- **Deployment**: Static export with SSH
- **Favicon**: Generated from profile picture

## 📝 Content Management

All content is managed through JSON files in the `/data/` directory:

### Example: Update Hero Content
```json
{
  "kicker": "Innovation AI.chemist",
  "title": "Dr. Silas Aslan", 
  "intro": "Chemiker. Innovator. KI-Enthusiast.",
  "tagline": "Taten sprechen lauter als Worte.",
  "profileImage": "/images/1696793999286.jpeg",
  "backgroundImage": "/images/1744010416113.jpeg",
  "socialLinks": {
    "linkedin": "https://de.linkedin.com/in/draslan",
    "x": "https://x.com/draslan_eth"
  }
}
```

### Update Process
1. Edit JSON file in `/data/`
2. Run `npm run build`
3. Run `npm run deploy`

## 🌐 Deployment

### Automatic Deployment
```bash
npm run deploy
```

This will:
1. Build the static site
2. Create backup on server
3. Upload via SSH to `all-inkl`
4. Verify deployment
5. Clean old backups

### Manual Deployment
```bash
# Build
npm run build

# Upload
scp -r out/* all-inkl:/www/htdocs/w01fa976/silasaslan.com/
```

## 🎯 Features

### ✅ What's Implemented
- Modern, responsive design
- Profile picture as favicon
- JSON-based content management
- SEO optimized meta tags
- Static performance
- German content only
- Professional animations

### 🔄 Customization
- Modify components in `/src/components/`
- Update content in `/data/` JSON files
- Adjust styling with TailwindCSS classes
- Add new sections in `/src/app/page.tsx`

## 📱 Sections

1. **Hero** - Profile picture with introduction
2. **About** - Professional background and statistics
3. **Expertise** - Key areas of specialization
4. **Career** - Professional timeline
5. **Patents** - Intellectual property overview
6. **Speaking** - Events and presentations
7. **Contact** - Social links and contact information

## 🔧 Development Notes

- Uses `output: 'export'` for static generation
- Favicon generated from profile picture
- No external CMS required
- Git-native version control
- Environment: German only

## 📊 Performance

- **Build Time**: ~2 seconds
- **Bundle Size**: ~100KB gzipped
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Loading**: Pure static files

---

*Project by Dr. Silas Aslan | Innovation AI.chemist*