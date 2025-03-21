import {
  CssBaseline,
  Experimental_CssVarsProvider as CSS_PROVIDER,
  createTheme,
} from "@mui/material";

export const Theme = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#EDE8D0", // Change this to your desired primary color
          },
          background: {
            default: "#EDE8D0", // Change this to your desired background color
          },
        
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#90caf9", // Change this to your desired primary color for dark mode
          },
          background: {
            default: "#121212", // Change this to your desired background color for dark mode
          },
        },
      },
    },
  });
  return (
    <CSS_PROVIDER theme={theme}>
      <CssBaseline enableColorScheme>{children}</CssBaseline>
    </CSS_PROVIDER>
  );
};
