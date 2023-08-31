# Project Folder Structure and Guidelines

## Introduction

This document outlines the recommended folder structure for the project, focusing on maintaining clarity, scalability, and maintainability. A well-organized structure is crucial for collaboration and the scaling of the project.

## Folder Structure

### `src`

The `src` folder serves as the root of the application's source code. This folder contains the following sub folders inside it

1. **`assets`**: This folder houses all the images, icons, and i18n files etc.
2. **`app`**: This folder contains the core components and logic of the application.
3. **`index.html`**: This file is the main HTML file of the app. Acts as the entry point for the application.
4. **`main.ts`**: This file is the main TypeScript file responsible for bootstrapping the entire application.

### `app`

The `app` folder represents the heart of the application, providing a clear structure for the different components, features, styles, etc. To keep the entire logic well defined we are dividing the folder to 4 sub folders.

1. **`core`**: Contains essential elements that define the foundation of the application.
2. **`features`**: Organizes the application's functionality into feature-specific modules.
3. **`shared`**: Hosts reusable components, directives, and pipes shared across the project.
4. **`styles`**: Centralizes global styles to ensure a consistent look and feel.

#### `core`

The `core` folder focuses on elements integral to the application's operation and maintenance.

1. **`constants`**: Holds core constants that drive the application's behavior. Segregating them enhances clarity and makes updates straightforward.
2. **`guards`**: Contains different guards for example route guards, which control navigation and access to certain routes.
3. **`interceptors`**: Hosts the core interceptors for example HTTP interceptors for processing requests and responses globally.
4. **`interfaces`**: Defines interfaces that represent core data structures.
5. **`services`**: Contains core services providing functionality shared across the application.
6. **`utils`**: Houses utility files and common functions to be used throughout the application.

#### `features`

The `features` folder embraces modularity by separating different application features into distinct modules.

Reference: [Angular Style Guide: Folders-by-feature structure](https://angular.io/guide/styleguide#folders-by-feature-structure)

1. **`components`**: Contains components specific to each feature. Isolating these components simplifies maintenance and reduces dependencies.
2. **`models`**: Houses models that encapsulate data structures unique to each feature.
3. **`pages`**: Holds feature-specific pages, enhancing clarity and maintainability.
4. **`services`**: Provides services tailored to each feature's requirements.

#### `shared`

The `shared` folder facilitates the reuse of components, directives, and pipes across different parts of the application.

Note: only put the components/directives/pipes that are reusable across different features and not specific to a particular feature/component.

Reference: [Angular Style Guide: Shared feature module](https://angular.io/guide/styleguide#shared-feature-module)

1. **`components`**: Contains reusable components that maintain consistency and minimize duplication.
2. **`directives`**: Hosts custom directives that can be applied across various features.
3. **`pipes`**: Contains pipes offering consistent data transformation and formatting.

#### `styles`

The `styles` folder centralizes styling to ensure a coherent visual identity across the application.

1. **`_mixins.styles.scss`**: Contains mixins, reusable style patterns aiding in consistent UI design.
2. **`_override.styles.scss`**: Houses style overrides to adapt third-party styles.
3. **`_reset.styles.scss`**: Contains styles for resetting default browser styles, promoting a consistent starting point.
4. **`_variables.styles.scss`**: Defines style variables such as colors, typography, and breakpoints.
5. **main.styles.scss**: Imports and organizes style partials to create a unified and manageable styling structure.

## Best Practices

- Organize the structure for clarity and ease of navigation.
- Embrace the [single responsibility](https://angular.io/guide/styleguide#single-responsibility) principle to ensure components have focused roles.
- Use feature modules to encapsulate related functionality.
- Prioritize reusability by placing components, directives, and pipes in the `shared` folder.
- Separate constants into different files for better organization.
- Keep styles structured and well-documented to maintain consistency.

## Maintenance Guidelines

- Create new feature modules with dedicated folders when adding new functionality.
- Utilize the `shared` folder for adding reusable components, directives, and pipes.
- Regularly remove unused code to prevent clutter and confusion.
- Maintain consistency in global styles to ensure a cohesive user experience.
- Update the documentation whenever significant changes to the folder structure are made.
