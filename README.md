# Don't you mean react-redux-portfolio?

Nope. This app is a do-over of a [React-based portfolio site](https://github.com/ac3charland/React-Portfolio) I started about a year ago--hence, "react-portfolio-redux."


## To Develop:
- Install packages: `yarn`
- Start app: `yarn start`
- Start app in background using `pm2`: `yarn start-background`
- Kill background app process: `yarn kill-background`
- Run all tests (unit, visual, integration, and lint): `yarn test`
- Run CI-only tests (all except visual): `yarn test:ci`
- Run unit tests: `yarn jest`
- Run lint: `yarn lint`
- Run visual regression tests: `yarn backstop:test`
- Open integration tests: `yarn cypress:open`

## Project Structure
The app's JSX files are categorized into pages and components. The app's overall styles are set in `index.scss` and its style constants are defined in `globals.scss`. Each `.scss` file should import `globals.scss`.

## Technologies
0. **UI Framework**: [React](https://reactjs.org/) (using Create React App)
0. **State Manager**: [Redux](https://redux.js.org/)
0. **Package Manager**: [Yarn](https://yarnpkg.com/)
0. **Routing**: [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
0. **CSS Processor**: [SASS](https://sass-lang.com/)

## Testing Frameworks
0. **Unit Tests**: [Jest](https://jestjs.io/)/[Enzyme](https://github.com/enzymejs/enzyme)
0. **Linter**: [ESLint](https://eslint.org/)
0. **Visual Regression Tests**: [BackstopJS](https://garris.github.io/BackstopJS/)
0. **Integration Tests**: [Cypress](https://www.cypress.io/)
