# Physical Intelligence Clone

A modern recreation of the Physical Intelligence company website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Export**: Optimized for GitHub Pages deployment
- **TypeScript**: Full type safety
- **SEO Optimized**: Meta tags and OpenGraph support

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: JetBrains Mono (monospace), Times (serif)
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/physical-intelligence-clone.git
cd physical-intelligence-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build and Deploy

### Local Build
```bash
npm run build
npm start
```

### GitHub Pages Deployment

1. Push your code to the `main` branch
2. Go to your repository settings
3. Navigate to "Pages" section
4. Set source to "GitHub Actions"
5. The workflow will automatically build and deploy your site

Your site will be available at: `https://YOUR_USERNAME.github.io/physical-intelligence-clone`

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx               # Homepage
│   ├── blog/
│   │   ├── page.tsx           # Blog list
│   │   └── [slug]/
│   │       └── page.tsx       # Blog post details
│   └── join-us/
│       └── page.tsx           # Careers page
├── components/
│   ├── Header.tsx             # Navigation
│   └── Footer.tsx             # Footer
└── globals.css                # Global styles
```

## 🎨 Design System

### Colors
- **Background**: `#FFFEF7`
- **Foreground**: `#111111`
- **Accent**: `#F0BE25` (yellow)
- **Muted**: `#A8A179`
- **Border**: `#E6E0CB`

### Typography
- **Monospace**: JetBrains Mono (primary)
- **Serif**: Times (headings and brand)

## 🔧 Customization

### Adding New Blog Posts

Edit `src/app/blog/[slug]/page.tsx` and add your post to the `blogPosts` object:

```typescript
const blogPosts = {
  'your-post-slug': {
    title: 'Your Post Title',
    date: 'YYYY-MM-DD',
    authors: 'Author Names',
    content: `Your content here...`
  }
};
```

### Modifying the Team

Edit the `teamMembers` array in `src/app/page.tsx`.

### Updating Colors

Modify the color palette in `tailwind.config.ts`.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔗 Links

- [Original Physical Intelligence Website](https://physicalintelligence.company)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
