import React, { ReactNode } from "react";
import { Container, Paper, Grid, SxProps, Theme } from "@mui/material";
import ContactItem from "./ContactItem";

interface ContactInfo {
  icon: ReactNode;
  label: string;
  value: string;
  linkType?: "phone" | "email" | "map" | "none";
  url?: string;
}

interface ContactInfoStripProps {
  items: ContactInfo[];
  containerSx?: SxProps<Theme>;
  paperSx?: SxProps<Theme>;
  containerMaxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const ContactInfoStrip: React.FC<ContactInfoStripProps> = ({
  items,
  containerSx = { my: { xs: 3, sm: 4 } },
  paperSx = { p: { xs: 2, sm: 3 }, borderRadius: 2 },
  containerMaxWidth = "lg",
}) => {
  const itemsToRender = items.slice(0, 3); // Limit to 3 items for the strip layout
  const columnWidth = 12 / Math.min(itemsToRender.length, 3); // Calculate column width

  return (
    <Container maxWidth={containerMaxWidth} sx={containerSx}>
      <Paper elevation={1} sx={paperSx}>
        <Grid container spacing={3}>
          {itemsToRender.map((item, index) => (
            <Grid item xs={12} sm={columnWidth === 4 ? 4 : 6} key={index}>
              <ContactItem
                icon={item.icon}
                label={item.label}
                value={item.value}
                linkType={item.linkType}
                url={item.url}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactInfoStrip;
