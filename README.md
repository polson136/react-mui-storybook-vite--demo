# React + TypeScript + Vite with Storybook

## Steps to setup

### Installation
1. To get started, clone this repository to your local machine:
   `git clone https://github.com/ageolena/react-mui-storybook-vite--demo.git`
2. Install the dependencies
   `npm i` 
3. Run locally:
   `npm run dev`
4. Run Storybook
  `npm run storybook`

### Key Files and Directories

```js
src/: This directory contains all the source code for the React application.
    App.tsx: The main React component.
    index.tsx: The entry point of the application.
public/: Static assets such as images, fonts, etc., can be placed here.
vite.config.ts: Vite configuration file.
.storybook/: Storybook configuration directory.
     main.js: Storybook main configuration file.
     preview.js: Storybook preview configuration file.
stories/: Storybook stories directory.
```
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

## Additional Information
- Make sure you have Node.js and npm or yarn installed on your system.
- This project uses Vite for fast development and builds.
- React and TypeScript are used for building the UI components.
- Storybook is used for developing UI components in isolation. 
- Feel free to modify and extend the project according to your needs.

## Storybook Deployed
[https://ageolena.github.io/react-mui-storybook-vite--demo](https://ageolena.github.io/react-mui-storybook-vite--demo)

To deploy Storybook run:
`npm run deploy-storybook`
#
