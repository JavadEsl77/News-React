import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: "#000000",
            white: "#ffffff",
        },
        primary: {
            dark: "#097AE9",
            main: "#0383FF",
            light: "#3a9af6",
            contrastText: "#FAFAFA",
        },
        secondary: {
            dark: "#cce6ff",
            main: "#DDEEFF",
            light: "#ecf6ff",
            contrastText: "#0383FF",
        },
        info: {
            dark: "#3B3F43",
            main: "#72797E",
            light: "#8D959C",
            contrastText: "#FAFAFA",
        },
        success: {
            dark: "#0EC080",
            main: "#0EC080",
            contrastText: "#FAFAFA",
        },
        error: {
            dark: "#ff5a00",
            main: "#FF640F",
            light: "#FDE1D2",
            contrastText: "#FAFAFA",
        },
        grey: {
            50: "#FAFAFA",
            100: "#F1F2F3",
            200: "#DFE2E4",
            300: "#ABB0B6",
            400: "#8D959C",
            500: "#72797E",
            600: "#3B3F43",
        },
        text: {
            primary: "#3B3F43",
            secondary: "#72797E",
            disabled: "#8D959C",
        },
    },
    typography: {
        fontFamily: ["BYekanBold", "BYekan"].join(","),
        fontSize: 14,
    },
});
