import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuList from "./MenuList";
import { BasicMenu } from "./Dropdown";

const ElevationScroll = ({ children }: { children: React.ReactNode }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children as React.ReactElement, {
        elevation: trigger ? 4 : 0,
      })
    : null;
};

const NavBar = ({
  menuItems = [
    { text: "Home", path: "" },
    { text: "About", path: "about" },
    { text: "Locations", path: "locations" },
    { text: "Services", path: "services" },
    { text: "Contact", path: "contact" },
  ],
}: {
  menuItems?: { text: string; path: string }[];
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar
          variant="dense"
          sx={{
            padding: { xs: 1, sm: 2 },
            minHeight: { xs: "56px", sm: "64px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Left section - Always visible */}
            <Box sx={{ pl: { xs: 1, sm: 2, md: 3 } }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                }}
              >
                Sterling Trans
              </Typography>
            </Box>

            {/* Center section - Only visible on desktop */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                visibility: isMobile ? "hidden" : "visible",
                position: isMobile ? "absolute" : "relative", // Prevent taking space on mobile
              }}
            >
              <MenuList items={menuItems} />
            </Box>

            {/* Right section - BasicMenu on mobile, empty placeholder on desktop */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                minWidth: "48px", // Ensure consistent width even when hidden
              }}
            >
              <Box sx={{ visibility: isMobile ? "visible" : "hidden" }}>
                <BasicMenu items={menuItems} />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;
