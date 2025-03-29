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
    <Stack alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
      <ImageFormat
        imageSrc={image}
        imageAlt="test image"
      />
      <Typography variant="h6">{title}</Typography>
      <Button variant="contained" onClick={onButtonClick}>
        Click me
      </Button>
    </Stack>
  );
};
