# Royal Child Care Center - Modern Next.js Website

A modern, SEO-optimized website built with Next.js 14, TypeScript, and Tailwind CSS for Royal Child Care Center Inc., providing exceptional residential group home services for children with disabilities in Charlotte, North Carolina.

## 🚀 Features

### Modern Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Design & UX
- ✨ Modern, professional design with dark blue and gold theme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- ♿ Accessible design following WCAG guidelines
- 🎯 Optimized for performance and SEO

### SEO Optimization
- Comprehensive meta tags and Open Graph
- Structured data (JSON-LD) for Organization and LocalBusiness
- XML sitemap support
- robots.txt configuration
- Semantic HTML5 structure
- Fast loading times

## 📁 Project Structure

```
royalchild/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Homepage
├── components/
│   ├── About.tsx                 # About section
│   ├── Contact.tsx               # Contact section
│   ├── ContactForm.tsx           # Contact form component
│   ├── Focus.tsx                 # Focus section
│   ├── Footer.tsx                # Footer component
│   ├── Header.tsx                # Header/Navigation
│   ├── Hero.tsx                  # Hero section
│   ├── ScrollToTop.tsx           # Scroll to top button
│   ├── Services.tsx              # Services section
│   └── WhyRoyalCare.tsx          # Why Royal Care section
├── public/                       # Static assets
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore file
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_FROM=noreply@royalchildhome.com
   CONTACT_EMAIL=nhinton@royalchildhome.com
   ```

3. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Type check without emitting files

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  primary: {
    blue: '#1a365d',
    'dark-blue': '#0f2027',
    'medium-blue': '#2c5282',
  },
  gold: {
    DEFAULT: '#d4af37',
    light: '#f4d03f',
  },
}
```

### Content
- Update metadata in `app/layout.tsx`
- Modify components in `components/` directory
- Add new pages in `app/` directory

## 📧 Contact Form Configuration

The contact form uses Nodemailer to send emails. Configure your email service in `.env.local`:

### Gmail Setup
1. Enable 2-Step Verification
2. Generate an App Password
3. Use the app password in `SMTP_PASSWORD`

### Other Email Services
Update `SMTP_HOST` and `SMTP_PORT` for your provider:
- **SendGrid**: `smtp.sendgrid.net:587`
- **Mailgun**: `smtp.mailgun.org:587`
- **Outlook**: `smtp-mail.outlook.com:587`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
- **Netlify**: Connect GitHub repo, build command: `npm run build`
- **AWS Amplify**: Connect repo, build settings: Next.js
- **Custom Server**: Run `npm run build` and `npm start`

## 🔍 SEO Checklist

- [x] Meta tags optimized
- [x] Structured data (JSON-LD)
- [x] Semantic HTML structure
- [x] Mobile-responsive design
- [x] Fast loading times
- [x] Accessible design
- [ ] Add sitemap.xml (can be generated)
- [ ] Add robots.txt (can be added to public/)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© Copyright 2025 Royal Child Care Center Inc. All Rights Reserved.

## 🤝 Support

For questions or issues:
- Email: nhinton@royalchildhome.com
- Phone: 704-606-9243

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
