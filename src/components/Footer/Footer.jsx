import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import { BannerTypo, Header, SubHeader } from "../CustomTypo";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ background: "#F5F8FB", pb: "4%" }}>
      <Container maxWidth="xl">
        <Divider sx={{ mb: "4%" }} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box>
              <Image alt="" src="/logo.jpeg" width={150} height={100} />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <SubHeader>Head office</SubHeader>
              <BannerTypo
                sx={{
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Central trade Centre, <br />
                kilungya street building 1st floor <br /> p.o Box 21101, Kitui{" "}
              </BannerTypo>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <SubHeader>Contact Us</SubHeader>
              <BannerTypo
                sx={{
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Call/ SMS/ WhatsApp +254790891677
                <br /> Email: beng@lo.co.ke
              </BannerTypo>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <SubHeader>Branches</SubHeader>
              <BannerTypo
                sx={{
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Benglo consultancy office, <br />
                Zamani business park
                <br /> Karen
              </BannerTypo>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
