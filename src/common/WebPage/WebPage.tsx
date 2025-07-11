import { Box, Container, Fab, Stack } from "@mui/material";
import { Footer } from "../../components/Footer";
import React from "react";
import NavBar from "../../components/NavigationBar/NavBar";
import { ScrollTop } from "../../components";
import { KeyboardArrowUp } from "@mui/icons-material";

export const WebPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box display={"flex"} height="100vh">
        <NavBar />
        <Stack component={"main"} flexGrow={1} alignItems={"center"}>
          <Container
            maxWidth={false}
            disableGutters
            sx={{
              width: "80%",
              margin: "0",
              backgroundColor: "#fafafa",
            }}
          >
            <Box paddingTop={10}>
              {children}
              <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                  <KeyboardArrowUp />
                </Fab>
              </ScrollTop>
            </Box>
          </Container>
          <Box
            display={"flex"}
            height="100vh"
            width={"100%"}
            sx={{ backgroundColor: "primary.main" }}
          >
            <Footer />
          </Box>
        </Stack>
      </Box>
    </>
  );
};
