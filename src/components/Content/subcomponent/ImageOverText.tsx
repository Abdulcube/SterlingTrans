import { Button, Stack, Typography } from "@mui/material";
import { ImageFormat } from "./ImageFormat";
import { useNavigate } from "react-router-dom";

export const ImageOverText = ({
  image,
  title,
  route,
}: {
  image: string;
  title: string;
  route: string;
}) => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(`/${route}`);
  };
  return (
    <Stack
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={{ xs: 1, sm: 1.5 }}
      sx={{ width: "100%" }}
    >
      <ImageFormat imageSrc={image} imageAlt="test image" />
      <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
        {title}
      </Typography>
      <Button
        variant="contained"
        onClick={onButtonClick}
        sx={{
          minHeight: "44px",
          minWidth: "88px",
          px: { xs: 2, sm: 3 },
        }}
      >
        Click me
      </Button>
    </Stack>
  );
};
