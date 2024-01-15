import { BannerTypo, BodyTypo, Header } from "@/components/CustomTypo";
import { Box, Container, Toolbar } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Toolbar />
      <Toolbar />
      <Container>
        <BannerTypo sx={{ fontSize: { xs: "25px", sm: "32px" } }}>
          About Us
        </BannerTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          BENGLO is a Kenyan incorporated and locally owned firm. It provides
          general supplies, engineering construction execution and consultant
          services.
        </BodyTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          BENGLO is a committed and dedicated organization to clients and
          parastatals seeking construction and supply services.
        </BodyTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          We provide supply, civil engineering and consultancy services to
          clients Mall walks, parastatals, municipalities, real estate,
          residential and public work agencies.
        </BodyTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          Our areas of proficiency and expertise include supply of all materials
          and goods, civil engineering works, structural engineering, building
          works, water works and civil construction consultancy.
        </BodyTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          The firm provides high quality structural and civil works through its
          technical experts with high regards to work and goal oriented
          personnel. We do work handy with our clients to ensure satisfaction in
          works executed and at an effective cost.
        </BodyTypo>
        <BannerTypo sx={{ fontSize: { xs: "25px", sm: "32px" } }}>
          Our Vision
        </BannerTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          To be a world class supplier of goods, construction and consultant
          depend and preferred firm.
        </BodyTypo>
        <BannerTypo sx={{ fontSize: { xs: "25px", sm: "32px" } }}>
          Our Mission
        </BannerTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          To promote a smooth and competitive growth in the supply and
          construction industry in the current rapid technological advancement.
        </BodyTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          We are committed to putting our clients on the forefront and build
          long term relationships within the private and public sector.
        </BodyTypo>
        <BannerTypo sx={{ fontSize: { xs: "25px", sm: "32px" } }}>
          Our Strategy
        </BannerTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          Our key objective is to provide optimal cost effective solutions that
          fulfill our clients desire, engineers and local authority
          specifications.
        </BodyTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          The success of BENGLO greatly depends on out proven capacity to civil
          works execution, goal oriented individuals and to adaptability to the
          changing economic times.
        </BodyTypo>
        <BannerTypo sx={{ fontSize: { xs: "25px", sm: "32px" } }}>
          Our Values
        </BannerTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          We believe in maintaining the highest standards of professionalism
          integrity to work, proficiency and client’s satisfaction at all times.
        </BodyTypo>
        <BannerTypo sx={{ fontSize: { xs: "25px", sm: "32px" } }}>
          Our Leaders
        </BannerTypo>
        <BodyTypo sx={{ mb: "2%" }}>
          Benglo was formed on the premise of these values: act with integrity,
          constant improving and deliver results. We have made sure to always
          have at the helm, people who told the same values and through their
          leadership and expertise do their part in ensuring that they are
          imbued throughout the organization. Our leaders are committed to
          propelling the company forward, an endeavor that’s evidenced by the
          continued growth of our company across boundaries, in line with our
          mission to achieve global reach.
        </BodyTypo>
      </Container>
    </Box>
  );
};

export default About;
