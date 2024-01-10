import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";
import { Header, SubHeader } from "./CustomTypo";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar sx={{ background: "#F5F8FB" }}>
      <Toolbar>
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Header sx={{ fontSize: { md: "48px", xs: "12px", sm: "48px" } }}>
              Benglo
            </Header>
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
              <SubHeader>About</SubHeader>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <SubHeader>Services</SubHeader>
              </Link>
              <SubHeader>Contact</SubHeader>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
