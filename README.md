<p align="center">
    <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ide">IDE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licence">Licence</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>
<p align="center">
    <a href="https://douglasdl.github.io/">
        <img alt="Tasks - To Do List App" src="https://douglasdl.github.io/images/Tasks.png" width="100%">
    </a>
</p>

## 🚀 Technologies

This project was developped using the following technologies:
<p alight="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://reactnative.dev/"><img height="40" src="https://douglasdl.github.io/images/ReactNative2.png"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://expo.dev/"><img height="40" src="https://douglasdl.github.io/images/Expo.png"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.typescriptlang.org/"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"></a>
</p>


## 📐 Project

This is a React Native project appling the basic fundamentals.
Check the finished App on [Apple Store](https://douglasdl.github.io/) or on [Google Play](https://douglasdl.github.io/).
To Do List is an app to create a list of tasks or other activities.
It's composed by the following items: Title, Date, Input component to type the task, Add Button to add the task into the list, and a list containing the added tasks. Each task component has a delete button to remove the task from the list.
When you add a new task, it's verified if the input is not blank and if the name is unique in the list.

# Tasks
To Do List App

1. Use the Node.js LTS version.
```sh
nvm use v16.16.0
```

2. Create the project
```sh
expo init tasks --npm
```

3. Start the project
```sh
expo start
```

4. Install the dependencies (CheckBox, Font)
```sh
expo install expo-checkbox
expo install expo-font @expo-google-fonts/inter
expo install react-native-svg
```

```sh
npm install styled-components --save
npm install @types/styled-components --save-dev
npm install @types/styled-components-react-native --save-dev
npm install react-native-svg --save
```


## 🔖 Layout

The basic layout project can be accessed in [this link](https://www.figma.com/file/d12UEXDZ9cAaZ5YQNZ5YwH/ToDo-List?node-id=0%3A1) in your [Figma](https://figma.com) account.

## 💻 IDE
This project was done using [Visual Studio Code](https://code.visualstudio.com/) IDE.

### 🧩 VS Code Extensions

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#:~:text=Prettier%20is%20an%20opinionated%20code,account%2C%20wrapping%20code%20when%20necessary.)

### ⚙ VS Code Configuration

-   CRTL + SHIFT + P
    -   settings.json

```javascript
{
    /* Define o tema do VS Code */
    "workbench.colorTheme": "Dracula",
    /*"workbench.colorTheme": "Omini", */
    "workbench.iconTheme": "material-icon-theme",

    /* Configura tamanho e família da fonte */
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "workbench.editor.tabSizing": "shrink",
    "explorer.compactFolders": false,

    /* Aplica linhas verticais para lembrar quabra de linha em códigos muito grandes */
    "editor.rulers": [80, 120],
    "editor.formatOnSave": false,
    "editor.minimap.enabled": false,

    "window.zoomLevel": -1,
    "explorer.confirmDelete": false,
    "terminal.integrated.shell.osx": "/bin/zsh",
    "tabnine.experimentalAutoImports": true,
    "python.languageServer": "Pylance",
    "explorer.confirmDragAndDrop": false,
    "editor.accessibilitySupport": "off",

    /* Formatter */
    "prettier.tabWidth": 4,
    "prettier.semi": false,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "none",
    "prettier.arrowParens": "avoid",
    "prettier.endOfLine": "auto",
    "editor.tabSize": 4,
    "editor.formatOnSave": true,

    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.doNotVerifyTags": true,

    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    }

    /*"eslint.packageManager": "yarn", */
    /*"eslint.autoFixOnSave": true, */
}
```

## 📝 Licence

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.

---

Done with ♥ by [Douglas Dias Leal](mailto:douglasdiasleal87@gmail.com)