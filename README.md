# Esha Reddy Vangala - Portfolio Website

A modern, professional portfolio website showcasing my skills, projects, and experience as a Full Stack Developer and Computer Vision Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark theme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle transitions and hover effects
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Contact Form**: Functional contact form for inquiries
- **Performance Optimized**: Built with Vite for fast loading times

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd esha-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## 📝 Customization

- Update contact information in `src/components/Contact.jsx`
- Modify project details in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`
- Change colors in `tailwind.config.js`
- Update social links in `src/components/Hero.jsx` and `src/components/Footer.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- Email: eshavangala26@gmail.com
- Phone: +91-9703688815
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
