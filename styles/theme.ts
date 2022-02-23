import { DefaultTheme } from "styled-components";
import ButtonType from "../src/features/common/domain/ButtonType";
import flex from "./styleSet/flex";

const palette = {
  main: "#7b9acc",
  sub: "#FCF6F5",
  lightGray: '#CCCCCC',
  gray: "#888888",
  grey: "#888888",
  darkGray: '#444444',
  light: "#FFFFFF",
  dark: "#000000",
}

const buttonPalette = {
  main: "#7b9acc",
  sub: "#FCF6F5",
  primary: "#0000FF",
  secondary: palette.lightGray,
  success: "#008000",
  warning: "#FFFF00",
  danger: "#FF0000",
  info: "#5bc0de",
  light: palette.light,
  dark: palette.dark,
}

const fontColor = {
  main: "#FCF6F5",
  sub: "#7b9acc",
  primary: "#FFFFFF",
  secondary: "#000000",
  success: "#FFFFFF",
  warning: "#000000",
  danger: "#FFFFFF",
  info: "#FFFFFF",
  light: "#000000",
  dark: "#FFFFFF",
}

const styleSet = {
  buttons : Object.keys(buttonPalette).map((keyName, index, array) => {
    const className = <ButtonType>keyName
    return `
      &.${className} {
        background-color: ${ buttonPalette[className] };
        color: ${ fontColor[className] };
        ${
          ['light', 'sub', 'warning'].includes(className) && `
            border-style: solid;
            border-color: rgb(200,200,200, 0.5);
          `
        }
      }
    `
  }),
  flex,
}

const theme: DefaultTheme = {
  basicWidth: "320px",
  ...palette,
  buttonPalette,
  fontColor,
  styleSet,
  shadowMedium: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
};

const nextTheme: DefaultTheme = {
  basicWidth: "320px",

  color: {
    main: "#1c1f25",
    sub: "#fff"
  }
};

export { theme, nextTheme };