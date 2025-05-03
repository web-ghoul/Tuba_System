import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { CustomMenuTypes } from "../../types/components.types";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";

const CustomMenu = ({ children, button }: CustomMenuTypes) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {button || <CiMenuKebab className="rotate-[90deg]" />}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </div>
  );
};

export default CustomMenu;
