import { BannerTypo } from "@/components/CustomTypo";
import { Box, Container, Toolbar } from "@mui/material";
import React from "react";

const Portfolio = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Toolbar />
      <Toolbar />
      <Container>
        <Box sx={{ display: "flex", gap: 2 }}>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            I.
          </BannerTypo>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            Construction of a one stream classroom at Kingingo Primary school in
            Mwingi North constituency, Kyuso ward (FY 2020/2021 By NG-CDF.
          </BannerTypo>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: "2%" }}>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            II.
          </BannerTypo>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            Construction of 180-student capacity dormitory in KANDWIA secondary
            school in Mwingi North constituency, kamuwongo ward (FY 2020/2021 by
            NG-CDF.
          </BannerTypo>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: "2%" }}>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            III.
          </BannerTypo>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            Construction of 7.5M residential Bungalow for private client S.
            kasina in Mwingi central Endui ward.
          </BannerTypo>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: "2%" }}>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            IV.
          </BannerTypo>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            Construction of a 13M residential Mansionette in partnership with
            Marigold innovation limited as a subcontractor.
          </BannerTypo>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: "2%" }}>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            V.
          </BannerTypo>
          <BannerTypo
            sx={{
              fontSize: { xs: "14px", sm: "18px" },
              color: "#000",
              fontWeight: 400,
            }}
          >
            Construction and installation of 2.5M water supply system in
            conjunction with VUJU supplies as a subcontractor.
          </BannerTypo>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
