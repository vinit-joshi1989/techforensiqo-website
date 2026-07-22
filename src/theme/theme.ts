import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8b5cf6",
      light: "#a78bfa",
    },
    secondary: {
      main: "#22d3ee",
    },
    background: {
      default: "#070b17",
      paper: "#101827",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#b8c1d1",
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 22,
          paddingBlock: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage:
            "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
          boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
        },
      },
    },
  },
});

export default theme;
