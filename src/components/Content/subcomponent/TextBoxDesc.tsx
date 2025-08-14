import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TextBoxDesc = ({
  title,
  description,
  route,
  button,
}: {
  title?: string;
  description: string;
  route?: string;
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
        gap: { xs: 1, sm: 2 },
        padding: { xs: 1.5, sm: 2, md: 3 },
      }}
    >
      {title && (
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" } }}
        >
          {title}
        </Typography>
      )}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          fontSize: { xs: "0.875rem", sm: "1rem" },
          lineHeight: { xs: 1.5, sm: 1.6 },
        }}
      >
        {description}
      </Typography>
      {(route || button) && (
        <Button
          variant="contained"
          color="primary"
          onClick={onButtonClick}
          sx={{
            alignSelf: "flex-start",
            mt: { xs: 1.5, sm: 2 },
            minHeight: "44px",
            minWidth: "44px",
            px: { xs: 2, sm: 3 },
          }}
        >
          {button ? button : route}
        </Button>
      )}
    </Box>
  );
};
