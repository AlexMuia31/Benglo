import { BannerTypo } from "@/components/CustomTypo";
import { Box, Container, Toolbar } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Box sx={{ minHeight: "100vh", background: "#F5F8FB" }}>
      <Container maxWidth="sm">
        <Toolbar />
        <BannerTypo
          sx={{
            fontSize: { xs: "14px", sm: "18px", md: "30px" },
            textAlign: "center",
            mt: "4%",
          }}
        >
          IT Supplies
        </BannerTypo>
        <BannerTypo
          sx={{
            textAlign: "center",
            fontSize: { xs: "14px", sm: "18px" },
            color: "#000",
            fontWeight: 400,
          }}
        >
          Most IT products are commodities, with prices changing all the time
          inline with global exchange rates. We make this work to our advantage
          with our internal sourcing tools which scan all the main distributors
          for the best price, so we can guarantee you value every time.
        </BannerTypo>
        <BannerTypo
          sx={{
            textAlign: "center",
            fontSize: { xs: "14px", sm: "18px" },
            color: "#000",
            fontWeight: 400,
            mt: "20px",
          }}
        >
          We benchmark prices for you, using our well-established supply chain,
          whilst you get on with core business tasks! Your staff may shop around
          online for prices, but administration and time is wasted doing this,
          for the level of savings achieved. We offer best of both worlds
          offering competitive prices and fantastic service.
        </BannerTypo>
        <BannerTypo
          sx={{
            fontSize: { xs: "14px", sm: "18px", md: "30px" },
            textAlign: "center",
            mt: "4%",
          }}
        >
          Office Furniture
        </BannerTypo>
        <BannerTypo
          sx={{
            textAlign: "center",
            fontSize: { xs: "14px", sm: "18px" },
            color: "#000",
            fontWeight: 400,
            mt: "20px",
          }}
        >
          Whether you are looking for office furniture for a reception area, an
          open plan office, breakout areas, canteen furniture or even student
          accommodation, we work with carefully selected manufacturers to ensure
          you get the best value products for your budget and requirements.
        </BannerTypo>
        <BannerTypo
          sx={{
            fontSize: { xs: "14px", sm: "18px", md: "30px" },
            textAlign: "center",
            mt: "4%",
          }}
        >
          Office Supplies
        </BannerTypo>
        <BannerTypo
          sx={{
            textAlign: "center",
            fontSize: { xs: "14px", sm: "18px" },
            color: "#000",
            fontWeight: 400,
            mt: "20px",
          }}
        >
          With 25000+ different standard products in office supplies alone,
          knowing which items should be part of your core list can be daunting.
          At Supplies Web we analyse your monthly office spend, simplifying your
          processes and saving you time, money and hassle.
        </BannerTypo>
        <BannerTypo
          sx={{
            textAlign: "center",
            fontSize: { xs: "14px", sm: "18px" },
            color: "#000",
            fontWeight: 400,
            mt: "20px",
          }}
        >
          Whether you are restocking your office supplies or providing
          stationery for your teams to work from home, we have years of
          experience in doing what we do, and we’re passionate about giving our
          customers a great experience every time. <br /> If a product exists,
          we will source it for you!
        </BannerTypo>
      </Container>
    </Box>
  );
};

export default Services;
