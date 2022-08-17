# @kernpunkt/ui-kit

[![pipeline status](https://gitlab.onlineprinters.io/kernpunkt/ui-kit/badges/main/pipeline.svg)](https://gitlab.onlineprinters.io/kernpunkt/ui-kit/-/commits/main)

![OP_Logo](src/assets/op_logo_black.png)

Online Printers React Component Library

## Development

Installing:

```bash
yarn
```

Run development server (access with `localhost:3000`):

```bash
yarn dev
```

Run the build:

```bash
yarn build
```

Run test runner:

```bash
yarn cypress open-ct
```

## Publishing

To publish the package manually:

```bash
npm config set @kernpunkt:registry https://gitlab.example.com/api/v4/projects/178/packages/npm/
```

then

```bash
npm config set -- '//gitlab.onlineprinters.io/api/v4/projects/178/packages/npm/:_authToken' <project_access_token>
```

finally run

```bash
npm publish
```

Access tokens can be generated in the GitLab project settings.
