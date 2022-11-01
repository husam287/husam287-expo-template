# husam287-expo-template

EXPO SDK 46 Template

> To use this template, make sure to have the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) installed and run:

```bash
expo init [name] --template @husam287/expo-template
```

## ⚡ Stack and Dependencies

- [**React Navigation**](https://reactnavigation.org/docs/getting-started/): For navigating through screens, we are using react navigation's tab and stack navigators with custom header created
- [**Redux Toolkit**](https://redux-toolkit.js.org/): We use redux toolkit to manage universal state. An introduction into redux toolkit can be found [here](https://www.youtube.com/watch?v=9zySeP5vH9c).
- [**Axios hooks**](https://www.npmjs.com/package/axios-hooks): To use axios as react hook with the aim of [axios hook package](https://www.npmjs.com/package/axios-hooks)
- [**Icomoon**](https://icomoon.io/): To use custom icons using icon component and files generated from [Icomoon website](https://icomoon.io/)
- [**Form Validation:**](https://react-hook-form.com/) We are using [react-hook-form](https://react-hook-form.com/) and [yup](https://www.npmjs.com/package/yup) to validate our user inputs, checking them in our form-input component while passing the yup schema in the screens
- [**Translations:**](https://www.npmjs.com/package/i18n-js) We are using [i18n-js](https://www.npmjs.com/package/i18n-js) and [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/) to translate the app (en - ar).
- [**EAS and live update configuration:**](https://docs.expo.dev/build/introduction/) EAS and expo publish configurations are ready to use (production and testing channels).
- [**Eslint with airbnb config:**](https://www.npmjs.com/package/eslint-config-airbnb) To keep your code more clean and improve its quality
- [**Husky:**](https://github.com/typicode/husky) To make pre-commit hooks
- [**Lint-staging:**](https://github.com/okonet/lint-staged#Configuration) Work with husky to prevent commit code without making linting
- **Absolute Imports:** To avoid annoying relative.

## 🔧 Usage

> Be sure to have the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) installed.

```bash
expo init [name] --template @husam287/expo-template
```

### 💻 **Development Practices**

1. **Responsive:** Make sure to utilize responsive color and screen sizes for components in constants folder.
2. **Lightweight Files:** Keep files under ~500 lines of code. If you much longer than this you should probably be creating a different component to import in.
3. **Compilation and Formatting:** Strongly type when possible to cut down on runtime errors while also linting code often to maintain strong formatting.
4. **Naming Conventions:**  
   _Directories:_ all lower case with - for spaces (ex. home-components)  
   _Files/Components:_ Capital first letter and CamelCase (ex. \<FormInput />)  
   _Variables:_ camelCase (ex. const isLoading)
   _Constant value:_ all upper case _ for spaces (ex. GLOBAL_STYLES)

## 📂 Organization

`src/components`: useful re-usable component library.  
`src/constants`: app constants, such as theme, that remain consistent throughout the app.  
`src/reducers`: redux features, organized using the slice pattern.  
`src/hooks`: useful hooks that can be re-used throughout the app.  
`src/routes`: react-navigation navigators, including stack and tab navigators.  
`src/screens`: the main screens of the app.  
`src/api`: apis using axios hooks; organized as endpoints, axios configuration
`src/assets`: all assets
