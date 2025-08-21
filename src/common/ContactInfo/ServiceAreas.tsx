import React from "react";
import { Box, Typography, SxProps, Theme } from "@mui/material";

interface ServiceAreasProps {
  areas: string[];
  title?: string;
  sx?: SxProps<Theme>;
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({
  areas,
  title = "SERVICE AREAS",
  sx = { mb: 2.5 },
}) => {
  return (
    <Box sx={sx}>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Box component="ul" sx={{ pl: 2, m: 0 }}>
        {areas.map((area, index) => (
          <Typography key={index} component="li" variant="body2">
            {area}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceAreas;
