# Project
This project was generated with [Pruvious](https://pruvious.com) CLI version 3.11.2.

Documentation: [https://pruvious.com/docs](https://pruvious.com/docs)

## Environment
|Variable|Default value|Explanation|
|-|-|-|
| | | |


## Setup
Make sure to install the dependencies:

```bash
pnpm i
```

## Development
### Setup
When developing the `pruvious-base` layer, use the following command to symlink to the base layer instead of downloading the package from git:

```bash
pnpm link <path-to-repo>

# E.g.:
pnpm link ../pruvious-base
```

This will overwrite the `pruvious-base` package with your local version. HMR is not guaranteed.

### Serve
Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the website for production:

```bash
pnpm build
```

Check out the [deployment documentation](https://pruvious.com/docs/deployment) for more information.
