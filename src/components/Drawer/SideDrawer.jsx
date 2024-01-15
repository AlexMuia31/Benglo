import { Box, Drawer } from "@mui/material";
import React from "react";

const SideDrawer = ({ setOpen, open }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Drawer sx={{}} variant="temporary" anchor="top" open={open}>
        test
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
