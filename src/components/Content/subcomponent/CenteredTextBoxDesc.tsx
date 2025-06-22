import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CenteredTextBoxDesc = ({
  title,
  description,
  route,
}: {
  title: string;
  description: string;
  route: string;
}) => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(`/${route}`);
  };
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
      }}
    >
      <Stack
        direction="column"
        spacing={3}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h4" component="h2" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          onClick={onButtonClick}
          // sx={{ alignSelf: "flex-start", mt: 2 }}
        >
          Explore
        </Button>
      </Stack>
    </Box>
  );
};
