import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "Caveat",
        h1: {
            fontSize: "var(--font-size-large)"
        },
        h2: {
            fontSize: "var(--font-size-small)"
        }
    }
})

export default theme;