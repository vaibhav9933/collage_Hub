# College Project Hub

A modern, lightweight, and attractive website for freelancing college projects. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Beautiful, responsive UI with gradient elements and smooth animations
- ⚡ **Lightweight** - Built with Vite for lightning-fast performance
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎯 **Multiple Services** - Web, Mobile, AI/ML, Database, Cloud, and Game Development
- 🏆 **Project Showcase** - Filter projects by technology
- 💬 **Contact Form** - Easy communication channel for clients
- 🌙 **Modern Stack** - React 18 + Tailwind CSS + Vite

## Technologies Used

- **React 18** - UI library
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - Browser compatibility

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "collage Project Hub"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Testimonials.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Sections

1. **Navbar** - Navigation with mobile menu
2. **Hero** - Eye-catching landing section with CTAs
3. **Services** - 6 main service categories
4. **Projects** - Filterable project portfolio
5. **Testimonials** - Student feedback and ratings
6. **About** - Company information and stats
7. **Contact** - Contact form and communication channels
8. **Footer** - Links and social media

## Customization

### Colors
Edit the Tailwind color classes in components or update `tailwind.config.js` for custom themes.

### Content
Update text and data directly in each component file.

### Images/Media
Replace placeholder emojis with actual images as needed.

## Deployment

This project is built as a static front-end website, making it ideal for deployment on Vercel, Netlify, GitHub Pages, or any static hosting provider. Because there is no backend or secret storage in the client code, the app remains simple, secure, and easy to deploy with HTTPS.

### Deploy to Vercel
1. Push this project to GitHub.
2. Open Vercel and import the repository.
3. Use the default Vite build settings.
4. Set the environment variable `VITE_FORMSUBMIT_EMAIL` in the Vercel dashboard.
5. Deploy.

### Email setup for the contact form
The contact form uses FormSubmit.co, which sends the form data as email to your address without a backend. It is free and works with static deployments.

1. Copy `.env.example` to `.env`
2. Set `VITE_FORMSUBMIT_EMAIL` to your email address
3. Restart the Vite server

Example `.env` values:
```env
VITE_FORMSUBMIT_EMAIL=your-email@example.com
```

This will send the filled form directly to your inbox when a user submits it.

### Build for Production
```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Performance

- **Lightweight Build** - ~50KB gzipped
- **Fast Load Times** - Optimized with Vite
- **Mobile Optimized** - Responsive CSS framework
- **SEO Friendly** - Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- Email: hello@collegehub.com
- Phone: +91 9876543210
- Website: www.collegehub.com

---

Built with ❤️ for College Project Hub
