# Constructable GUI Core Module (scs-lib-concore)

The **Constructable GUI Core Module** provides foundational utilities and shared components for GUI
frameworks. It serves as a core module for various GUI libraries within the Constructable ecosystem, offering
essential modules and services for common tasks like data access, GUI modeling, internationalization (i18n),
and more.

## Key Features

- **Data Access (`dataaccess`)**: Core interfaces and implementations for flexible, hierarchical, and reactive
  data sources, including `DataSource` and `DataAdapter` components.
- **GUI Model (`guimodel`)**: Planned base components and interfaces for structuring and modeling UI elements
  and interactions.
- **Internationalization (`i18n`)**: Planned utilities and functions to support multi-language applications.
- **Tools and Configurations**: A collection of shared tools and configuration utilities used across
  Constructable GUI projects.

## Installation

Install the library via npm:

```bash
npm install scs-lib-concore
```

## Usage

Import and utilize the core modules as needed. Here’s a quick example using dataaccess:

```typescript
import { LocalDataSource } from 'scs-lib-concore/src/dataaccess/datasources';
import { DataAdapterDefault } from 'scs-lib-concore/src/dataaccess/dataadapter';

// Example of using LocalDataSource
const dataSource = new LocalDataSource({ name: 'Example', id: 1 });
const nameAdapter = dataSource.createDataAdapterBySelector((data) => data.name);

nameAdapter.bindData((data) => {
  console.log('Name:', data);
});
```

## Project Structure

- src/dataaccess: Core data access interfaces and classes (e.g., DataSource, DataAdapter).
- src/guimodel: Placeholder for GUI model components.
- src/i18n: Placeholder for internationalization utilities.
- src/tools: Helper utilities and shared tools.

## Development

To build, test, and document the module:

```bash
# Build the project
npm run build

# Run tests
npm run test

# Generate documentation
npm run docs
```

## Contributing

Contributions are welcome! Please submit issues and pull requests for any improvements, bug fixes, or feature
requests.

## License

This project is licensed under the MIT License.

