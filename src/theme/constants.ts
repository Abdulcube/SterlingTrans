import { createTheme } from '@mui/material/styles';

// White theme for forms and inputs
export const whiteTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#2D2D2D", // Dark text for contrast with white background
          backgroundColor: "#FFFFFF",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.5)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2", // Primary color for focus state
          }
        },
        input: {
          color: "#2D2D2D" // Dark text for contrast with white background
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FFFFFF", // Keep labels white
          "&.Mui-focused": {
            color: "#FFFFFF"
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#FFFFFF", // Keep helper text white
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#2D2D2D" // Dark dropdown icon for visibility on white background
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#2D2D2D", // Dark text for dropdown items
          backgroundColor: "#FFFFFF",
          "&:hover": {
            backgroundColor: "rgba(25, 118, 210, 0.08)" // Light blue hover state
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // For dropdown menus
          "&.MuiMenu-paper": {
            backgroundColor: "#FFFFFF"
          }
        }
      }
    }
  }
});