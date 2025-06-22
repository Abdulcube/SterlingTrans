import {
  CssBaseline,
  Experimental_CssVarsProvider as CSS_PROVIDER,
  createTheme,
} from "@mui/material";

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    typography: {
    fontFamily: `'Product Sans', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
    palette: {
      mode: 'light',           // 'light' | 'dark'
      primary: {
        main: '#000000',      // Main color everything
        light: '#000000',
        contrastText: '#fff',
      },
      secondary: {
        main: '#c7c7c7',       // used by <Button color="secondary" />
        contrastText: '#fff',
      },
      error: {
        main: '#d32f2f',
      },
      warning: {
        main: '#ed6c02',
      },
      info: {
        main: '#0b9cdd',
      },
      success: {
        main: '#2e7d32',
      },
      background: {
        default: '#fafafa',   // page background
        paper: '#fff',        // surfaces like <Paper>
      },
  }
  });
  return (
    <CSS_PROVIDER theme={theme}>
      <CssBaseline enableColorScheme>{children}</CssBaseline>
    </CSS_PROVIDER>
  );
};
