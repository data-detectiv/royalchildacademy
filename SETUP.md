# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
# Email Configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@royalchildhome.com
CONTACT_EMAIL=nhinton@royalchildhome.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.royalchildhome.com
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Setup (Gmail Example)

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Use this password in `SMTP_PASSWORD`

## 🎨 Customization

### Update Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    blue: '#1a365d',  // Change this
    gold: '#d4af37',  // Change this
  }
}
```

### Update Content
- **Metadata**: Edit `app/layout.tsx`
- **Components**: Edit files in `components/` directory
- **Pages**: Add new pages in `app/` directory

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

## 📝 Build for Production

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### TypeScript Errors
```bash
npm run type-check
```

### Linting Issues
```bash
npm run lint
```




