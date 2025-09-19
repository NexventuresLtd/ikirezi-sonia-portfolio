# Sonia's Leadership Portfolio 

## Overview

Nexventures developed a comprehensive leadership portfolio website for Ikirezi Hirwa Sonia, showcasing her professional experience, educational background, projects, and leadership reflection essay. This responsive web application serves as a digital portfolio that meets all the requirements of her leadership assignment.

## Features Developed

1. **Professional Portfolio Website** with multiple sections:
   - Home page with bio and mission statement
   - Portfolio section with artifacts and timeline
   - Interactive resume/CV
   - Leadership reflection essay

2. **Required Components**:
   - Updated CV/Resume integrated into the site
   - LinkedIn profile integration
   - Three professional artifacts from previous work
   - Timeline diagram of 5+ major entrepreneurial leadership events
   - 500-1000 word leadership reflection essay

3. **Technical Features**:
   - Responsive design that works on desktop, tablet, and mobile
   - Professional animations and transitions
   - Clean, modern UI with a color scheme that reflects professionalism
   - Easy navigation between sections
   - Interactive elements (timeline, artifact cards)

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Ready for deployment on any static hosting service

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project files to your local machine

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder, ready to be deployed.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer with contact info
│   ├── Timeline.tsx    # Interactive timeline component
│   ├── ArtifactCard.tsx # Project artifact cards
│   └── MissionStatement.tsx # Mission statement section
├── pages/              # Main page components
│   ├── Home.tsx        # Landing page with bio
│   ├── Portfolio.tsx   # Portfolio artifacts and timeline
│   ├── Resume.tsx      # Interactive resume/CV
│   └── Reflection.tsx  # Leadership reflection essay
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in the components
2. Replace placeholder image with your professional headshot
3. Modify the timeline events in `Timeline.tsx`
4. Update artifact information in `Portfolio.tsx`
5. Replace the reflection essay content in `Reflection.tsx`
6. Adjust color scheme by modifying Tailwind classes

## Deployment

The built application can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## Browser Support

This portfolio supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions about this portfolio implementation, please contact:
- Ikirezi Hirwa Sonia: soniahirwa@gmail.com
- Location: Kigali, Nyarugenge, Rwanda
---