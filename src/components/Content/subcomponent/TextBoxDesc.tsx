import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TextBoxDesc = ({
  title,
  description,
  route,
  button,
}: {
  title: string;
  description: string;
  route: string;
  button?: string;
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
      <Typography variant="h4" component="h2" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onButtonClick}
        sx={{ alignSelf: "flex-start", mt: 2 }}
      >
        {button ? button : route}
      </Button>
    </Box>
  );
};
