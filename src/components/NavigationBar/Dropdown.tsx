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
  const handleClose = (path: string) => {
    setAnchorEl(null);
    navigate(`/${path}`);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
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
        onClose={handleClose}
      >
        {items.map((item, key) => (
          <MenuItem
            key={key}
            onClick={() => {
              handleClose(item.path);
            }}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
