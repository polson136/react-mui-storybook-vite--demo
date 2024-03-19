# React + TypeScript + Vite

## Steps to setup

### Tools
1. Create a new Vite-React-TS project
   `npm create vite@latest react-mui-storybook-vite--demo -- --template react-ts` 
2. Install Storybook
   `npx storybook@latest init` 
3. Install MUI
   `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material`
4. Add a11y add-on
  `npm i @storybook/addon-a11y`

### Components

Components could be found in `src/components` folder

Button component is a wrapper for MUI Button that follows flexible-restrictive pattern.

### Stories

Stories could be found in `src/stories` folder

Button story contains a story per variant, controls to showcase flexible-restrictive patterns, mapping for children control and a custom documentation template. 


## Template Notes
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
