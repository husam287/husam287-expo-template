# husam287-expo-template
EXPO SDK 46 Template

> To use this template, make sure to have the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) installed and run:

```bash
expo init --template @husam287/expo-template
```

## ⚡ Stack and Dependencies

* [**React Navigation**](https://reactnavigation.org/docs/getting-started/): For navigating through screens, we are using react navigation's tab and stack navigators. Additionally, react navigation has [custom theming support](https://reactnavigation.org/docs/themes) built in, which is defined in *src/constants/theme*. 
* [**Redux Toolkit**](): We use redux toolkit to manage universal state. An introduction into redux toolkit can be found [here](https://www.youtube.com/watch?v=9zySeP5vH9c).
* [**Axios hooks**](): To use axios as react hook with the aim of [axios hook package](https://www.npmjs.com/package/axios-hooks)
* [**Icomoon**](): To use custom icons using icon component and files generated from [Icomoon website](https://icomoon.io/)
* **Absolute Imports:** To avoid annoying relative.
* **Form Validation:** We are using [react-hook-form](https://react-hook-form.com/) and [yup](https://www.npmjs.com/package/yup) to validate our user inputs, checking them in our form-input component while passing the yup schema in the screens 

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

