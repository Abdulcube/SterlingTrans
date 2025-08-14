import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

export const BasicMenu = ({
  items,
}: {
  items: { path: string; text: string }[];
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  let navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path = "") => {
    setAnchorEl(null);
    if (!path) return;
    navigate(`/${path}`);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          minWidth: "44px",
          minHeight: "44px",
          mr: { xs: 1, sm: 2 },
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          sx: { display: "flex", flexDirection: "column" },
        }}
      >
        {items.map((item, key) => (
          <MenuItem
            key={key}
            onClick={() => {
              handleClose(item.path);
            }}
            sx={{
              minHeight: "44px",
              minWidth: "44px",
              padding: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
