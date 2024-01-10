import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import { BannerTypo, Header, SubHeader } from "../CustomTypo";

const Footer = () => {
  return (
    <Box sx={{ background: "#F5F8FB", pb: "4%" }}>
      <Container maxWidth="xl">
        <Divider sx={{ mb: "4%" }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Header>BENGLO</Header>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <SubHeader>Company</SubHeader>
              <BannerTypo
                sx={{
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Benglo Consultants And Supplies Limited,
                <br /> PO Box:21101 <br />
                90200-Kitui
              </BannerTypo>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <SubHeader>Contact Us</SubHeader>
              <BannerTypo
                sx={{
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Tel : +254790891677
                <br /> Email: benjaminmwangi60@gmail.com <br />
              </BannerTypo>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
