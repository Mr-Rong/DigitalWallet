import {Dimensions} from "react-native";
const {wedth, hight} = Dimensions.get("window");

export const COLORS ={
    //base colors
    primary: "#24c16b", //green
    secondary: "#0c381f", //dark green

    green: "#66d59a",
    lightGreen: "#e6fef0",

    lime: "#00ba63",
    emerald: "#2bc978",

    red: "#ff4134",
    lightRed: "#fff1f0",

    purple: "#6b3ce9",
    lightPurple: "#f3efff",

    yellow: "#ffc664",
    lightYellow: "#fff9ec",

    black: "#1e1f20",
    white: "#ffffff",

    lightGray: "#fcfbfc",
    gray: "#c1c3c5",
    darkgray: "#c3c6c7",

    transparent: "transparent",

};

export const SIZES = {
    //globle sizes
    base: 8,
    font: 14,
    radious: 30,
    padding: 10,
    padding2: 12,

    //font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    //app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamaly: "Roboto-regular", fontSize: SIZES.largeTitle, LineHeight: 40 },
    h1: { fontFamaly: "Roboto-Black", fontSize: SIZES.h1, LineHeight: 36 },
    h2: { fontFamaly: "Roboto-Bold", fontSize: SIZES.h2, LineHeight: 30 },
    h3: { fontFamaly: "Roboto-Bold", fontSize: SIZES.h3, LineHeight: 22 },
    h4: { fontFamaly: "Roboto-Bold", fontSize: SIZES.h4, LineHeight: 22 },
    body1: { fontFamaly: "Roboto-regular", fontSize: SIZES.body1, LineHeight: 36 },
    body2: { fontFamaly: "Roboto-regular", fontSize: SIZES.body2, LineHeight: 30 },
    body3: { fontFamaly: "Roboto-regular", fontSize: SIZES.body3, LineHeight: 22 },
    body4: { fontFamaly: "Roboto-regular", fontSize: SIZES.body4, LineHeight: 22 },
    body5: { fontFamaly: "Roboto-regular", fontSize: SIZES.body5, LineHeight: 22 },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;