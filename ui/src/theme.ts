import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#3F8AE0'
        },
    },
    custom: {
        text: {
            addressColorLightGray: '#777575',
            errorColor: "firebrick"
        },
        background: {
            backgroundColorLightGray: '#ebebeb'
        },
    }
} as any)