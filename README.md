# PYLSA: Technology, Security and Comfort

Web application developed with [React.js](https://reactjs.org/) for [PYLSA](https://pylsa.tech/).

## Contents

- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Appendices](#appendices)
- [Authors](#Authors)

## Dependencies

![https://img.shields.io/badge/React-+17.0.1-red.svg](https://img.shields.io/badge/React-+17.0.1-red.svg)
![https://img.shields.io/badge/Redux-+7.2.2-black.svg](https://img.shields.io/badge/Redux-+7.2.2-black.svg)

## Configuration

Make sure that you have Node.js v12.18.0 and yarn v1.22.5 or above installed.

### Project structure

```bash
pylsa-react-app
├── README.md
├── src
│   ├── components
│   ├── containers
|   ├── i18n
│   ├── images
│   ├── styles
│   ├── utils
│   ├── index.js
│   ├── reducers.js
│   └── store.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── jsconfig.json
├── package.json
├── README.md
└── yarn.lock
```

### Development

```bash
yarn start
```

Starts the development server running on [`http://localhost:3000`](http://localhost:3000/)

## Appendices

### Appendix A - Execution

> Install the project dependencies:

```bash
yarn install
```

> To install a new dependency with the exact version flag:

```bash
yarn add dependency-name -E
```

> Run project

```bash
yarn start
```

### Appendix B - VSCODE auto-fix

To have all the development environment automated we have a [settings.json](./.vscode/settings.json) file with the following configuration:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.rulers": [80]
}
```

## Authors

- David Martinez - [Frontend Developer](mailto:davestringm@gmail.com)
