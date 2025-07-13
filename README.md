# Stratus Interactive Website

The official website for Stratus Interactive, a future-focused technology company building AI-first software and hardware that enhances how people think, plan, and execute.

## About Stratus Interactive

Stratus Interactive is centered around improving human productivity through intelligent tools that feel intuitive, emotionally resonant, and deeply personal. Our mission is to make technology that serves people — not overwhelms them.

We began with Stratus Productivity, a unified app that merges tasks, notes, events, goals, and intelligent AI support into a cohesive system. But Stratus Interactive's broader goal is to evolve into a full-stack AI ecosystem — spanning apps, devices, and personal cloud infrastructure — empowering users to live and work better.

## Website Features

- **Homepage**: Company overview, mission, and innovation pillars
- **Stratus Productivity**: Detailed showcase of our flagship AI-powered productivity app
- **Our Vision**: Future roadmap and long-term vision for AI ecosystem
- **About**: Company information, team, and core technologies
- **Blog**: Insights and updates about our products and vision
- **Beta Signup**: Early access registration for Stratus Productivity

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Once UI Design System + Tailwind CSS
- **Deployment**: Vercel-ready

## Getting Started

1. **Install dependencies**
```bash
npm install
```

2. **Run development server**
```bash
npm run dev
```

3. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Development

- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── productivity/      # Stratus Productivity page
│   ├── vision/           # Vision and roadmap page
│   ├── about/            # About page
│   ├── beta/             # Beta signup page
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
├── resources/           # Content and configuration
└── utils/              # Utility functions
```

## Content Management

The website content is managed through configuration files in `src/resources/`:

- `content.js` - Main content configuration
- `config.js` - Site settings and metadata
- `style.js` - Design system configuration

## Design System

This website uses the Once UI design system, providing:

- Consistent typography and spacing
- Responsive design patterns
- Dark/light theme support
- Accessible components
- Modern animations and transitions

## Deployment

The website is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

## Contact

- **Email**: hello@stratusinteractive.com
- **Website**: https://stratusinteractive.com

## License

This project is proprietary to Stratus Interactive.