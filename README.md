# [mutasim.org](mutasim.org)

My personal website. The template was designed by good friend and mentor [Aaron Agarunov](https://agarun.com/) and I've simply changed it a bit for my use
case. Give him a look and see what other interesting work he's done! Below, are his instructions and comments, which still remain true with some comments.
I've decided to host mine using Vercel instead, but Netlify works just as well.

## Getting Started

The prerequisites are Yarn and Node >= 16. (I've updated from 14 to avoid SSL vulnerabilities and am currently using 18 myself.)

First, install the dependencies:

```bash
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Preview 🚀

To build the site:

```bash
yarn build
```

Then, to serve it locally:

```bash
yarn start
```

## Technologies 🧰

Hosted with [Netlify](https://www.netlify.com/). Built with React and [Next.js](https://nextjs.org/).

### Tooling

- [ESLint](https://eslint.org/)
  - The ESLint config (`.eslintrc.json`) extends the `create-react-app` config, Next.js config, and includes a few plugins
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
  - Pre-commit hooks that run tools like ESLint & Prettier on modified files via `lint-staged`
- [Lighthouse](https://github.com/GoogleChrome/lighthouse) to collect performance metrics about webpages
  - I use this locally and [on Netlify](https://www.netlify.com/blog/2021/03/26/netlify-build-plugin-of-the-week-lighthouse/), in addition to [web.dev/measure](https://web.dev/measure/)

### Styling

- Color modes and theming tokens are implemented with CSS variables (custom properties)
  - [Josh Comeau's dark mode guide](https://www.joshwcomeau.com/react/dark-mode/), [Theme UI](https://theme-ui.com/), [useDarkMode](https://github.com/donavon/use-dark-mode) were really useful resources to avoid FOUC.
- [Emotion](https://github.com/emotion-js/emotion) for writing style modules with JavaScript
- [Framer Motion](https://www.framer.com/motion/) for creating animated components

### Writing

- [https://github.com/unifiedjs/unified](Unified) libraries including remark & rehype to process HTML and markdown
- [MDX](https://mdxjs.com/) to use React components (like `next/image`, or custom ones) in Markdown files. I chose to use `next-mdx-remote` over `mdx-bundler` here.
- [Prism](https://github.com/PrismJS/prism) to theme code snippets (with `prism-theme-vars`!)
  - [Custom theme](https://github.com/agarun/agarun.com/blob/main/styles/prism.css) based on [Night Owl by Sarah Drasner](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)

### Testing

- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration tests
- [Cypress](https://www.cypress.io/) for integration and end-to-end tests
