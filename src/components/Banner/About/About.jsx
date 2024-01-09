import { BannerTypo } from "@/components/CustomTypo";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const About = () => {
  return (
    <Box sx={{ mt: "7%", pb: "10%" }}>
      <BannerTypo
        sx={{ textAlign: "center", fontSize: { xs: "18px", sm: "28px" } }}
      >
        What we do
      </BannerTypo>
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mt: "5%", mb: "7%" }}>
          <Grid item xs={12} md={4}>
            <Box>
              <Box>
                <img
                  src="https://i.pinimg.com/564x/4f/98/5b/4f985b820ba0a4a29016311d9cd8e055.jpg"
                  alt="banner"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "18px", sm: "30px" },
                  color: "#000",
                  mb: "5%",
                }}
              >
                Office solutions powerhouse
              </BannerTypo>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Fueling your business efficiency with the right tools and expert
                guidance. We're not just your paperclip provider. We're your
                one-stop shop for office supplies, furniture, and technology,
                backed by expert consultants who optimize your workspace for
                productivity.
              </BannerTypo>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Box sx={{ mb: "30px" }}>
                <img
                  src="https://i.pinimg.com/564x/4c/2e/b6/4c2eb672f5b0290c7eda07688765f8ea.jpg"
                  alt="banner"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "18px", sm: "30px" },
                  color: "#000",
                  mb: "5%",
                }}
              >
                Industry-agnostic lifesavers
              </BannerTypo>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Whatever you need, whenever you need it, we'll make it happen.
                From lab equipment to construction materials, we source and
                deliver the supplies you need to keep your business humming, and
                our on-call consultants are ready to tackle any logistical
                challenge.
              </BannerTypo>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Box sx={{ mb: "30px" }}>
                <img
                  src="https://i.pinimg.com/564x/ee/ea/f3/eeeaf3165c140b1489780343f2728978.jpg"
                  alt="banner"
                  width="100%"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "18px", sm: "30px" },
                  color: "#000",
                  mb: "5%",
                }}
              >
                Small business champions
              </BannerTypo>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Big ambitions deserve big support. We're passionate about
                empowering startups and growing businesses with customized
                supply solutions and strategic advice. Let us be your growth
                partner, from day one to day done.
              </BannerTypo>
            </Box>
          </Grid>
        </Grid>
        <BannerTypo
          sx={{
            textAlign: "center",
            fontSize: { xs: "18px", sm: "28px" },
            mb: "5%",
          }}
        >
          What to expect from us
        </BannerTypo>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <GroupsIcon sx={{ height: "50px", width: "50px" }} />
              </Box>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "18px", sm: "25px" },
                  color: "#000",
                  mb: "3%",
                  fontWeight: 500,
                }}
              >
                Professional & Dedicated Team
              </BannerTypo>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                Personal service from a local company you can contact at any
                time and speak to someone to resolve an issue.
              </BannerTypo>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <LocalShippingIcon sx={{ height: "50px", width: "50px" }} />
              </Box>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "18px", sm: "25px" },
                  color: "#000",
                  mb: "3%",
                  fontWeight: 500,
                }}
              >
                Flexible Nationwide Delivery
              </BannerTypo>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                We have our own fleet of delivery vehicles that can deliver
                goods nationwide.
              </BannerTypo>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <MonetizationOnIcon sx={{ height: "50px", width: "50px" }} />
              </Box>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "18px", sm: "25px" },
                  color: "#000",
                  mb: "3%",
                  fontWeight: 500,
                }}
              >
                Free Expert, Cost-Reduction Service
              </BannerTypo>
              <BannerTypo
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", sm: "18px" },
                  color: "#000",
                  fontWeight: 400,
                }}
              >
                You will see dramatic cost reductions and huge time and process
                savings from the simplification of your supply chain.
              </BannerTypo>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <BannerTypo
              sx={{
                textAlign: "center",
                fontSize: { xs: "18px", sm: "28px" },
                mt: "5%",
                mb: "5%",
              }}
            >
              PRODUCT SOURCING
            </BannerTypo>
          </Box>
          <Grid item xs={12} md={6}>
            <BannerTypo
              sx={{
                fontSize: { xs: "14px", sm: "18px" },
                color: "#000",
                fontWeight: 400,
                mb: "3%",
              }}
            >
              We’ve build up a huge range of manufacturers and distributors over
              the years, so you can rest assured that your staff won’t have to
              spend hours looking for obscure items.
            </BannerTypo>
            <BannerTypo
              sx={{
                fontSize: { xs: "14px", sm: "18px" },
                color: "#000",
                fontWeight: 400,
              }}
            >
              If a product exists, we will source it for you! This allows you to
              get on with your core business leading, to less administration,
              and more control.
            </BannerTypo>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src="https://www.suppliesweb.com/wp-content/uploads/2022/06/Supplies-web-web-hero-images-22.png"
                alt="banner"
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
