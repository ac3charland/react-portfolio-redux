# React Template App

This app is meant to serve as the basis for my future React apps. It has my preferred technologies, testing frameworks, and project structure pre-configured so that I don't have to set up the same boilerplate with every project. If you're curious about my opinions and preferences when it comes to frontend development, this is a great place to look!

## To Copy*:

0. Clone this project if it is not already on your machine.
0. When you want to create a new app based on this template, create a new directory for the project with `mkdir [new-project-name-here]`
0. Copy/paste this repo's files & folders into the new directory.
0. Install packages with `yarn`
0. Confirm everything is working as expected by running `yarn run test`
0. Setup the new project's git repo with `git init`
0. Create an initial commit with `git add . && git commit -m "Initial commit from template app"`.
0. Create a new remote repository for the app on your preferred host (GitHub, Bitbucket, etc.)
0. Add the remote origin with `git remote add origin [url-provided-by-repo]`
0. Commit to remote with `git push -u origin master`
0. Begin development!

<sup>*If these instructions seem patronizingly specific, it's not because I don't trust your capabilities--I don't trust my own. I've burned myself one too many times by telling myself "Surely I'll remember how to do *this* forever!"</sup>

## To Customize:
There are several fields which will be different for every app, like site title, footer copyright owner, site icon, etc. Find these by searching for `CHANGE_ME` across the entire app directory, including file names. Change these fields/files.

## To Develop:
- Install packages: `yarn`
- Start app: `yarn start`
- Start app in background using `pm2`: `yarn start-background`
- Kill background app process: `yarn kill-background`
- Run all tests (unit, visual, integration, and lint): `yarn test`
- Run CI-only tests (all except visual): `yarn test:ci`
- Run unit tests: `yarn run jest`
- Run lint: `yarn run lint`
- Run visual regression tests: `yarn run backstop:test`
- Open integration tests: `yarn run cypress:open`

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
