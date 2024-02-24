# Turborepo, Next, and NextUI Starter with yarn

This repository contains a template for creating a turborepo using Next.js with NextUI. A turborepo is a monorepo that uses workspaces to manage multiple projects in a single repository. This makes it easier to share code and dependencies between projects, and it also makes it easier to manage updates to multiple projects at the same time.

This template includes everything you need to get started with a turborepo, including:

- A Next.js project for the front-end
- A turborepo configuration file
- A README file with instructions on how to get started

## What's inside?

This Turborepo template uses [yarn](https://classic.yarnpkg.com/lang/en/) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `utils`: a stub React component library which can be shared by all applications
- `ui`: a stub Next component library shared by both `web` and `docs` applications, this contains NextUI - a React UI Framework.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tailwind-config`: `tailwind` configurations used by `ui`, `web` and `docs` applications/packages.
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Setup

To install packages of every workspace

```bash
yarn install
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework packed with classes that can be composed to build any design.
- [NextUI](https://nextui.org/), a UI library for React that helps you build beautiful and accessible user interfaces.

### Build

To build all apps and packages, run the following command:

```bash
yarn build
```

### Develop

To develop all typescript apps and packages, run the following command:

```bash
yarn dev
```

To add packages:

```bash
yarn <workspace> add <package-name>
```

To remove packages:

```bash
yarn <workspace> remove <package-name>
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```bash
npx turbo link
```

### Contributing

We love your contributions and we will do our best to provide you with mentorship and support.

Get more details in our [Contributing Guide](https://github.com/godkingjay/turbo-nextui-starter/blob/master/CONTRIBUTING.md).


## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
