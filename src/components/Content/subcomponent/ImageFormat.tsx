import { Box } from "@mui/material";

export const ImageFormat = ({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: { xs: 1, sm: 2 },
        maxWidth: { xs: "100%", sm: "50%" },
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt={imageAlt}
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
};
