# Production Blog

I aim to align this project's structure and development processes as closely as possible with those typically found in a production environment

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Scripts](#scripts)
- [Testing](#testing)
- [Storybook](#storybook)
- [Cypress](#cypress)
- [Architecture](#architecture)
- [Internationalization](#internationalization)
- [Bundling](#bundling)
- [CI Pipeline](#ci-pipeline)
- [Feature Flags](#feature-flags)
- [Fetching Data](#fetching-data)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Webpack (setup from scratch)](https://webpack.js.org/)
- [Vite (for dev server)](https://webpack.js.org/)
- [Storybook (setup from scratch)](https://storybook.js.org/)
- [SCSS](https://sass-lang.com/)
- [i18n](https://www.i18next.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Loki](https://loki.js.org/)
- [Husky](https://typicode.github.io/husky/)
- [Github Actions](https://github.com/features/actions)
- [Stylelint](https://stylelint.io/)
- [Eslint](https://eslint.org/)
- [JSON Server (for backend)](https://github.com/typicode/json-server)

## Features

- **Configuration**: Setup project infrastructure from scratch, including Webpack configuration with support for React, TypeScript, Babel, SCSS, CSS modules, Vite, Prettier, and more.
- **UI Development**: Created a library of over 20 UI components, incorporating advanced features like portals, dropdowns, modals, lazy loading, and semantic markup.
- **Architecture**: Used **[Feature-Sliced Design](https://feature-sliced.design/)**, decomposition, reusability, and real-world examples of architectural patterns.
- **Optimization**: Techniques for optimizing performance, handling re-renders, analyzing bundle size, asynchronous module loading, and isolation.
- **Real-world Tasks**: Solving a variety of real-world development challenges, including filters, search, sorting, infinite scrolls, multi-block pages, and comments.
- **Themes and Styles**: Implementation of CSS modules, theming, and structured styling with support for multiple color themes.
- **Testing**: Setup and execution of unit tests, component tests using React Testing Library, and end-to-end tests with Cypress.
- **Linting and Formatting**: Configuration of ESLint and Stylelint for code quality, including custom rules and automatic fixes.
- **Error Handling**: Proper error handling techniques, including the implementation of ErrorBoundary.
- **Routing**: Implementation of routing using React Router v6 with considerations for page chunking.
- **Internationalization (i18n)**: Integration of multi-language support with considerations for performance and pluralization.
- **TypeScript Integration**: Setup and integration of TypeScript with Webpack, covering advanced TypeScript features and patterns.
- **Babel Plugins**: Configuration and usage of Babel plugins for extracting translation keys and optimizing production builds.
- **CI/CD and Pre-commit Hooks**: Implementation of CI pipeline for automated testing and deployment, along with pre-commit hooks using Husky.
- **Data Normalization**: Introduction to data normalization concepts and practical implementation with EntityAdapter.
- **Virtualization**: Usage of virtual lists for performance optimization when dealing with large datasets.
- **Infrastructure Setup**: Configuration of the development environment, testing environment, and Storybook to seamlessly integrate all features and functionalities.
- **TypeScript Generic Components**: Flexible components that can adapt to different data structures and enforce type safety throughout your codebase.

## Scripts

- `dev`: Start the development environment.
- `dev:vite`: Start the Vite development server.
- `dev:client`: Start the Webpack development server.
- `dev:server`: Start the JSON server.
- `build:prod`: Build the project for production.
- `build:start`: Start the production build.
- `build:analyze`: Analyze the production build.
- `build:dev`: Build the project for development.
- `lint:ts`: Lint TypeScript files.
- `lint:ts:fix`: Fix TypeScript linting issues.
- `lint:scss`: Lint SCSS files.
- `lint:scss:fix`: Fix SCSS linting issues.
- `prepare`: Prepare Husky.
- `test:ts`: Run unit tests.
- `test:ui`: Run screenshot tests.
- `test:ui:ok`: Approve screenshot tests.
- `test:ui:json`: Generate JSON report.
- `test:ui:html`: Generate HTML report.
- `test:ui:report`: Generate and open HTML report.
- `storybook`: Start Storybook.
- `storybook:build`: Build Storybook.

## Testing

![alt text](public/images//tests.png 'Title')

1. Run unit tests: `npm run test:ts`.
2. Run screenshot tests: `npm run test:ui`.
3. Open reports: `npm run test:ui:report`.
4. Approve UI tests: `npm run test:ok`.

## Storybook

The project currently has 21 stories

1. Run storybook environment: `npm run storybook`.
2. Build storybook: `npm run storybook:build`.

## Cypress

I used [aliases](https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Aliases), [fixtures](https://docs.cypress.io/api/commands/fixture), [sessions](https://docs.cypress.io/api/commands/session). Also I've wrote [custom commands](cypress/support/commands.ts) for the project.

The project currently has [three e2e tests](cypress/e2e/)

To run cypress environment: `npm run cy:open`

## Architecture

The project is structured using the **[Feature-Sliced Design](https://feature-sliced.design/)** methodology.

## Internationalization

The project currently supports two languages: **English** and **Ukrainian**.
The feature is implemented using the **[i18next library](https://react.i18next.com/)**.

## Bundling

The project uses **Webpack** for bundling and **Vite** for the development server.
Webpack configuration is set up from scratch and includes support for React, TypeScript, Babel, SCSS, CSS modules, Prettier, and more.
The configuration files for webpack is located in the **`config/webpack`** directory and in **`webpack.config.ts`**.
The configuration files for Vite is located in **`vite.config.ts`**.

## CI Pipeline

The project uses **Github Actions** for the CI pipeline.
The configuration file is located in the **`.github/workflows`** directory.
Pre-commit hooks are located in **`.husky`**.

## Feature Flags

The use of feature flags is only possible with **[toggleFeature](/src/shared/lib/features/toggleFeature.ts)** helper.
To automatically enable or disable features throughout the project, you can use **[script](/scripts/ts-morph.js)** built with [ts-morph](https://ts-morph.com/).

## Fetching Data

[RTK Query](https://redux-toolkit.js.org/rtk-query/overview) and [Redux async thunks](https://redux-toolkit.js.org/api/createAsyncThunk) are used for fetching and posting data.
The project uses [DynamicSliceLoader](/src/shared/lib/components/dymanic-loader/DynamicSliceLoader.tsx) to load slices asynchronously.
The project uses [JSON Server](https://www.npmjs.com/package/json-server) as a backend.

## Entities

The project uses the following entities:

- [Article](/src/entities/Article/model/types/article.ts)
- [Comment](/src/entities/Comment/model/types/comment.ts)
- [User](/src/entities/User/model/types/user.ts)
- [Notification](/src/entities/notification/model/types/notification.ts)
- [Profile](/src/entities/profile/model/types/profile.ts)
- [Rating](/src/entities/rating/model/types/rating.ts)

## Contributing

Explain how others can contribute to your project.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

Specify the license under which your project is released.

This project is licensed under the [MIT License](LICENSE).
