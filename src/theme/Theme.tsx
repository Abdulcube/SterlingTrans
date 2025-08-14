import {
  CssBaseline,
  Experimental_CssVarsProvider as CSS_PROVIDER,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

export const Theme = ({ children }: { children: React.ReactNode }) => {
  let theme = createTheme({
    typography: {
      fontFamily: `'Product Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 500 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minHeight: "44px",
            minWidth: "44px",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            minHeight: "44px",
            minWidth: "44px",
          },
        },
      },
    },
    palette: {
      mode: "light", // 'light' | 'dark'
      primary: {
        main: "#000000", // Main color everything
        light: "#000000",
        contrastText: "#fff",
      },
      secondary: {
        main: "#c7c7c7", // used by <Button color="secondary" />
        contrastText: "#fff",
      },
      error: {
        main: "#d32f2f",
      },
      warning: {
        main: "#ed6c02",
      },
      info: {
        main: "#0b9cdd",
      },
      success: {
        main: "#2e7d32",
      },
      background: {
        default: "#fafafa", // page background
        paper: "#fff", // surfaces like <Paper>
      },
    },
  });
  // Apply responsive font sizes
  theme = responsiveFontSizes(theme);

  return (
    <CSS_PROVIDER theme={theme}>
      <CssBaseline enableColorScheme>{children}</CssBaseline>
    </CSS_PROVIDER>
  );
};
