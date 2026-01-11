# Ragini Nursing Bureau - Next.js Migration

This is the Next.js version of the Ragini Nursing Bureau website, migrated from React.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Copy Assets**
   - Copy all files from `NursingBearue/src/assets/` to `nursingByCursor/public/assets/`
   - Copy `NursingBearue/public/favicon.ico` to `nursingByCursor/public/favicon.ico`
   - Copy `NursingBearue/public/manifest.json` to `nursingByCursor/public/manifest.json`
   - Copy `NursingBearue/public/robots.txt` to `nursingByCursor/public/robots.txt`

3. **Copy CSS Files**
   - Copy all CSS files from `NursingBearue/src/pages/*.css` to `nursingByCursor/components/pages/`
   - Copy `NursingBearue/src/components/landing-page/landing-page.css` to `nursingByCursor/components/landing-page/landing-page.css`
   - Copy `NursingBearue/src/pages/*.css` files to corresponding component directories

4. **Create Page Components**
   - All page components need to be created in `nursingByCursor/components/pages/`
   - Convert React Router imports to Next.js Link/useRouter
   - Convert image imports to use `/assets/` paths from public folder
   - Add 'use client' directive to components using hooks

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## Migration Notes

### Key Changes Made:
- Converted React Router to Next.js App Router
- Changed `react-router-dom` imports to `next/navigation` and `next/link`
- Updated image imports to use public folder paths
- Added 'use client' directive to client components
- Created App Router structure in `app/` directory
- Migrated contexts to use Next.js patterns
- Updated API calls to work with Next.js

### Remaining Tasks:
1. Copy all CSS files from original project
2. Copy all assets to public folder
3. Create remaining page components in `components/pages/`:
   - LandingPage.jsx (home page)
   - AboutUs.jsx
   - AllServices.jsx
   - ContactPage.jsx
   - VideosPage.jsx
   - AdminDashboard.jsx
   - Login.jsx
   - PrivacyPolicy.jsx
   - TermsConditions.jsx
   - PaymentPolicy.jsx
   - HelpfulLinks.jsx

4. Update image paths in all components to use `/assets/` prefix
5. Test all routes and functionality

## Project Structure

```
nursingByCursor/
├── app/                    # Next.js App Router pages
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Home page
│   ├── about-us/
│   ├── services/
│   ├── contact/
│   ├── videos/
│   ├── login/
│   └── admindashboard/
├── components/            # React components
│   ├── navbar/
│   ├── footer/
│   ├── landing-page/
│   ├── pages/             # Page components
│   ├── AuthContext.jsx
│   └── NotificationContext.js
├── public/                # Static assets
│   └── assets/            # Images and media files
├── util/                  # Utility functions
│   ├── api.js
│   └── serviceList.js
└── package.json
```

## Environment Variables

Create a `.env.local` file if needed for API endpoints:
```
NEXT_PUBLIC_API_URL=http://localhost:9090/api/v1
```

## Build for Production

```bash
npm run build
npm start
```

