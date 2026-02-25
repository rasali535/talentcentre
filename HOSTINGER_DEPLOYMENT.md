# Hostinger Deployment Guide

This project is a React application built with Vite and Tailwind CSS. To deploy it to Hostinger (Shared Hosting or Cloud Hosting), follow these steps.

## 1. Build the Project Locally

Before uploading, you need to generate the production-ready files:

```bash
npm run build
```

This will create a `dist` folder in your project root containing all static assets (`index.html`, Javascript, CSS, and images).

## 2. Prepare for Upload

### SPA Routing Support

We have already included a `.htaccess` file in the `public` folder. Vite automatically copies this to the `dist` folder during the build. This file ensures that if a user refreshes the page on a sub-route (like `/portal`), Hostinger's Apache server correctly serves `index.html`.

### Gemini API Key

If you are using the Gemini AI features, ensure your API key is correctly handled. In `vite.config.ts`, we use `process.env.GEMINI_API_KEY`.

**Option A: Hardcoded (Easiest, but less secure)**
Create a `.env` file in the root directory before running `npm run build`:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

The key will be bundled into the Javascript files.

**Option B: Environment Variables (Recommended)**
If you use CI/CD (like GitHub Actions), set the secret in your repository settings and it will be used during the build.

## 3. Upload to Hostinger

1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** -> **Manage** for your domain.
3. Open the **File Manager**.
4. Navigate to the `public_html` directory.
5. Delete any existing files (like `default.php` or `index.php` if they aren't yours).
6. Upload the **contents** of the `dist` folder (not the `dist` folder itself) to `public_html`.
   - *Pro tip: Zip the contents of `dist`, upload the zip file, and extract it inside `public_html`.*

## 4. Verification

Once uploaded, visit your domain. The site should load, and navigation between pages (Landing, Login, Signup, Portal) should work smoothly.

### Troubleshooting

- **404 on subpages**: Ensure the `.htaccess` file is present in `public_html`.
- **CSS not loading**: Check that the `assets` folder was correctly uploaded.
- **Images missing**: Ensure the image paths are correct (Hostinger is case-sensitive).
