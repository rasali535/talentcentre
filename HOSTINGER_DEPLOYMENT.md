# Hostinger Deployment Guide

This project is now configured for **Hostinger Node.js Hosting**.

## 1. Project Configuration

- **Node Version**: 16.x
- **Entry File**: `server.js`
- **Package Manager**: npm

## 2. Generate the Build

Run the following command in your local terminal:

```bash
npm run build
```

This will create a `dist` folder with your production-ready frontend assets.

## 3. Upload to Hostinger

1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** -> **Manage** -> **Node.js**.
3. Create/Configure the Node.js application:
   - **Node.js Version**: Select **16**
   - **Entry File**: `server.js`
   - **App Domain**: Your domain
4. Use the **File Manager** to upload your project files. You must upload:
   - `dist/` (the entire folder)
   - `server.js`
   - `package.json`
   - `package-lock.json`
5. After uploading, return to the Node.js dashboard:
   - Click **npm install** to install dependencies.
   - Click **Start** or **Restart** to run the app.

## 4. Verification

Once uploaded and running, visit your domain. The site should load, and navigation between pages (Landing, Login, Signup, Portal) should work smoothly via the Express server.

### Troubleshooting

- **404 on subpages**: Ensure the `.htaccess` file is present in `public_html`.
- **CSS not loading**: Check that the `assets` folder was correctly uploaded.
- **Images missing**: Ensure the image paths are correct (Hostinger is case-sensitive).
