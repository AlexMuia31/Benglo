import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { Header, SubHeader } from "./CustomTypo";
import Link from "next/link";
import SideDrawer from "./Drawer/SideDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState();

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar sx={{ background: "#F5F8FB" }}>
        <Toolbar>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                justifyContent: { xs: "space-between", md: "" },
              }}
            >
              <Link href="/">
                <Box>
                  <Image alt="" src="/logo.jpeg" width={150} height={100} />
                </Box>
              </Link>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Link href="/" style={{ textDecoration: "none" }}>
                  <SubHeader>Home</SubHeader>
                </Link>
                <Link href="/about" style={{ textDecoration: "none" }}>
                  <SubHeader>About</SubHeader>
                </Link>
                {/* <Link href="/services" style={{ textDecoration: "none" }}>
                  <SubHeader>Services</SubHeader>
                </Link> */}
                <SubHeader>Contact</SubHeader>
                <Link href="/portfolio" style={{ textDecoration: "none" }}>
                  <SubHeader>Portfolio</SubHeader>
                </Link>
              </Box>
              <Box sx={{ display: { md: "none" } }}>
                <IconButton onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <SideDrawer
        setOpen={setOpen}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
    </>
  );
};

export default Navbar;
