# husam287-expo-template

EXPO SDK 46 Template

> To use this template, make sure to have the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) installed and run:

```bash
expo init [name] --template @husam287/expo-template
```

## ⚡ Stack and Dependencies

-   [**React Navigation**](https://reactnavigation.org/docs/getting-started/): For navigating through screens, we are using react navigation's tab and stack navigators with custom header created
-   [**Redux Toolkit**](https://redux-toolkit.js.org/): We use redux toolkit to manage universal state. An introduction into redux toolkit can be found [here](https://www.youtube.com/watch?v=9zySeP5vH9c).
-   [**Axios hooks**](https://www.npmjs.com/package/axios-hooks): To use axios as react hook with the aim of [axios hook package](https://www.npmjs.com/package/axios-hooks)
-   [**Icomoon**](https://icomoon.io/): To use custom icons using icon component and files generated from [Icomoon website](https://icomoon.io/)
-   [**Form Validation:**](https://react-hook-form.com/) We are using [react-hook-form](https://react-hook-form.com/) and [yup](https://www.npmjs.com/package/yup) to validate our user inputs, checking them in our form-input component while passing the yup schema in the screens
-   [**Translations:**](https://www.npmjs.com/package/i18n-js) We are using [i18n-js](https://www.npmjs.com/package/i18n-js) and [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization/) to translate the app (en - ar).
-   [**EAS and live update configuration:**](https://docs.expo.dev/build/introduction/) EAS and expo publish configurations are ready to use (production and testing channels).
-   [**React native community eslintrc config:**](https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native-community#readme) To keep your code more clean and improve its quality
-   **Absolute Imports:** To avoid annoying relative.

## 🔧 Usage

> Be sure to have the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) installed.

```bash
expo init [name] --template @husam287/expo-template
```

## 📂 Organization

`src/components`: useful re-usable component library.  
`src/constants`: app constants, such as theme, that remain consistent throughout the app.  
`src/reducers`: redux features, organized using the slice pattern.  
`src/hooks`: useful hooks that can be re-used throughout the app.  
`src/routes`: react-navigation navigators, including stack and tab navigators.  
`src/screens`: the main screens of the app.  
`src/api`: apis using axios hooks; organized as endpoints, axios configuration
`src/assets`: all assets
