import { Box, } from "@mui/material";

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
            padding: 2,
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>

  );
};


