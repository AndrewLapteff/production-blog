# Production Blog

I aim to align this project's structure and development processes as closely as possible with those typically found in a production environment

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Testing](#testing)
- [Storybook](#storybook)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Webpack (setup from scratch)](https://webpack.js.org/)
- [Storybook (setup from scratch)](https://storybook.js.org/)
- [SCSS](https://sass-lang.com/)
- [i18n](https://www.i18next.com/)
- [Jest](https://jestjs.io/)
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
- **Architecture**: Used [Feature-Sliced Design](https://feature-sliced.design/), decomposition, reusability, and real-world examples of architectural patterns.
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

## Contributing

Explain how others can contribute to your project.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

Specify the license under which your project is released.

This project is licensed under the [MIT License](LICENSE).
