# Aung Kaung Satt - Portfolio

A modern, high-performance developer portfolio built with React 19, TypeScript, Tailwind CSS v4, and Motion.

## 🚀 Getting Started Locally

Running this project on your local machine requires only **two simple steps**. You **do NOT need** any API keys or `.env.local` files!

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```
(or the port shown in your terminal, typically `http://localhost:5173` or `http://localhost:3000`).

---

## 🛠️ Build & Production

To create an optimized production build for deployment:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages / Vercel

### Deploy on Vercel (Easiest & Free)
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository. Vercel will automatically detect Vite.
4. Click **Deploy**. Your portfolio will be live with a free custom SSL domain!

### Deploy on GitHub Pages
1. In `vite.config.ts`, add the `base` property with your repository name:
   ```ts
   export default defineConfig({
     base: '/<your-repo-name>/',
     // ...
   });
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** (Static HTML / Vite workflow).

---

## 💻 Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6 (Stable LTS)
- **Styling**: Tailwind CSS v4
- **Animation**: Motion

