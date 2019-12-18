# den-gamle-by-vue-2

## Getting started

### Install VSCode extensions

1. Vetur (syntax highlighting for `.vue` files)
2. EsLint (javascript linter, checks for errors in syntax https://eslint.org/)
3. Prettier (code formatting https://prettier.io/)

### Configure ESLint to work with `.vue` files

1. Open VSCode's command palette (`CMD + SHIFT + P` on Mac, `CTRL + SHIFT + P` on Windows)
2. Type in `Open Settings (JSON)`
3. Add this to the `settings.json` file:

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
        "language": "vue",
        "autoFix": true
    }
],
```

### Make Prettier your default formatter

1. Open your editor settings
2. Go to `Text Editor` → `Default Formatter` and select `esbenp.prettier-vscode` from the dropdown list

## Project setup

You only have to run this command after cloning the project or when someone else has added a ner package.

```
npm install
```

### Compiles and hot-reloads for development

Run this command everytime you want to start working on your app

```
npm start
```

### Compiles and minifies for production

Use this command to create a production-ready bundle, which you can deploy to your web server.

```
npm run build
```

### Lints and fixes files

Run this command to format your code.

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
