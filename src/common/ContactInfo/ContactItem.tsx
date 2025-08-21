import React, { ReactNode } from "react";
import { Box, Typography, Link, SxProps, Theme } from "@mui/material";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  linkType?: "phone" | "email" | "map" | "none";
  url?: string;
  sx?: SxProps<Theme>;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  label,
  value,
  linkType = "none",
  url,
  sx = {},
}) => {
  // Generate the correct href based on linkType
  const getHref = () => {
    if (url) return url;

    switch (linkType) {
      case "phone":
        return `tel:${value}`;
      case "email":
        return `mailto:${value}`;
      case "map":
        return `https://maps.google.com/?q=${encodeURIComponent(value)}`;
      default:
        return undefined;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        minHeight: "44px",
        ...sx,
      }}
    >
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          color: "primary",
          sx: { mr: 1.5, fontSize: 24 },
        })}

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          {label}
        </Typography>

        {linkType !== "none" ? (
          <Link
            href={getHref()}
            variant="body1"
            sx={{
              fontWeight: "medium",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
            }}
            target={linkType === "map" ? "_blank" : undefined}
            rel={linkType === "map" ? "noopener noreferrer" : undefined}
          >
            {value}
          </Link>
        ) : (
          <Typography variant="body1" sx={{ fontWeight: "medium" }}>
            {value}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContactItem;
