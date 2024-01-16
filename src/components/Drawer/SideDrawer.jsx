import { Box, Drawer, Icon, IconButton } from "@mui/material";
import React from "react";
import { SubHeader } from "../CustomTypo";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const SideDrawer = ({ setOpen, open }) => {
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Drawer
        variant="temporary"
        anchor="top"
        open={open}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: "20px",
            mt: "20px",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 5,
            p: "10%",
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            onClick={handleDrawerClose}
          >
            <SubHeader>Home</SubHeader>
          </Link>
          <Link
            href="/about"
            style={{ textDecoration: "none" }}
            onClick={handleDrawerClose}
          >
            <SubHeader>About</SubHeader>
          </Link>
          <Link
            href="/portfolio"
            style={{ textDecoration: "none" }}
            onClick={handleDrawerClose}
          >
            <SubHeader>Portfolio</SubHeader>
          </Link>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
