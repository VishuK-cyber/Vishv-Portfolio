# Vishv Ranjan Portfolio

A cinematic React + Three.js portfolio for Vishv Ranjan, built as a static site with procedural 3D models, a scroll-reactive portrait flip, resume download, and contact links.

## Run Locally

```powershell
& "C:\Users\vishv\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" .\server.py
```

Then open:

```text
http://127.0.0.1:5173
```

React, ReactDOM, and Three.js are vendored in `vendor/`, so the site can render locally without waiting on CDN module imports.

## Build for Production / Live Hosting

To create an optimized folder that can be hosted on live platforms like GitHub Pages, Netlify, or Vercel:

```powershell
python tools/build.py
```

This will create a `dist/` directory with a minified `styles.css` and all the necessary static files. You can upload the contents of the `dist/` folder to your web host.
