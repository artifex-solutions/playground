# Project
This project was generated with [Pruvious](https://pruvious.com) CLI version 3.11.2.

Documentation: [https://pruvious.com/docs](https://pruvious.com/docs)

## Environment
|Variable|Default value|Explanation|
|-|-|-|
|PRUVIOUS_BASE_PATH|	|Setting this to a local path in development will symlink the base layer into this project. Omitting the value will download the base layer from github instead.|


## Setup
Make sure to install the dependencies:

```bash
bun i
```

Installing dependencies will also symlink (for development) or download (for production) the base layer to the project based on the presence of the environment variable `PRUVIOUS_BASE_PATH`.

## Development server

Start the development server on `http://localhost:3000`:

```bash
bun dev
```

## Production

Build the website for production:

```bash
bun run build
```

Check out the [deployment documentation](https://pruvious.com/docs/deployment) for more information.
