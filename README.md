# Portfolio

A minimal React + Vite developer portfolio. No routing, no state library, no backend.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Edit your content (one file)

Open **`src/data/content.js`**. It holds:

| Export       | What it controls                                    |
| ------------ | --------------------------------------------------- |
| `profile`    | Name, title, intro, profile photo                   |
| `about`      | About paragraphs (one string per paragraph)         |
| `projects`   | Project cards: name, description, tech, image, URLs |
| `experience` | Work history entries                                |
| `contact`    | Email, GitHub, LinkedIn                             |

- Add a project by copying one object in `projects`. Remove one by deleting it.
- Set `sourceUrl: ""` to hide the "Source code" link.
- Replace every `[PLACEHOLDER]` and every `your-...vercel.app` URL.
- Also update the `<title>` and description in `index.html`.

## Replace the images

1. Put your files in `src/assets/` (for example `me.jpg`, `shop-preview.png`).
2. In `src/data/content.js`, import them and use them:

```js
import profilePhoto from "../assets/me.jpg";
import shopPreview from "../assets/shop-preview.png";

export const profile = { /* ... */ photo: profilePhoto };
export const projects = [{ /* ... */ image: shopPreview }];
```

Tips: use a square profile photo (about 480x480). Use 16:10 screenshots
(about 1280x800), ideally `.webp` or `.png`.

## Deploy to Vercel

Push to GitHub and import the repo in Vercel. The Vite preset is detected
automatically (build: `npm run build`, output: `dist`).

## Structure

```
index.html
src/
  main.jsx
  App.jsx
  assets/            profile + project images
  data/content.js    ALL editable content
  components/        Hero, About, Projects, ProjectCard, Experience, Contact,
                     Section, ExternalLink
  styles/global.css  design tokens + all styles
```
