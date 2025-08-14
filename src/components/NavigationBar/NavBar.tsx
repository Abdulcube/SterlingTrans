import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
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
          <Stack
            direction="row"
            sx={{
              justifyContent: isMobile ? "space-between" : "flex-start",
              alignItems: "center",
              width: "100%",
              position: "relative",
            }}
            spacing={{ xs: 0, sm: 2 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 0,
                mr: { xs: 1, sm: 2, md: 4 },
                fontSize: { xs: "1rem", sm: "1.25rem" },
              }}
            >
              Sterling Trans
            </Typography>

            {!isMobile ? (
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MenuList items={menuItems} />
              </Box>
            ) : (
              <BasicMenu items={menuItems} />
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;
