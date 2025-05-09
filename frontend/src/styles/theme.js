// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#41A650", // Verde principal
            light: "#66C274",
            dark: "#31883E", 
            contrastText: "#ffffff", 
        },
        secondary: {
            main: "#F46702", // Naranja principal
            light: "#FFA033",
            dark: "#D95204", 
            contrastText: "#ffffff",
        },
        tertiary: {
            main: "#6B70D0", // Naranja principal
            light: "#94a4e5",
            dark: "#4f53b3", 
            contrastText: "#ffffff",
        },
        background: {
            default: "#F2F2F2",
            paper: "#D8F2DC",
            glass: "rgba(242, 242, 242, 0.3)",
        },
        error: {
            main: "#d32f2f",
        },
        warning: {
            main: "#ffa000",
        },
        info: {
            main: "#0288d1",
        },
        success: {
            main: "#2e7d32",
        },
    },
    typography: {
        fontFamily: "Poppins, Arial, sans-serif", 
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.5,
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },
    breakpoints: {
        sm: 480,
        md: 768,
        lg: 1024,
    },
});

export default theme;