import React from "react";
import { Box, Typography, Container, Button, Grid, Divider } from "@mui/material";
import "./mainsection.css";

import CardPlan from "./CardPlan"
import SearchDomain from "./SearchDomain"


import lapTop from "../../assets/img/laptop.png";
import tecno from "../../assets/img/tecnology.png"


function MainSection() {
  return (
    <section>
      <Box className="headerimg ">
        <img className="headerimg2" src={tecno} alt=""/>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "43rem",
                  width: "130%",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                className="title-text"
              >
                <Typography
                  variant="h1"
                  noWrap
                  sx={{
                    fontFamily: "'Bebas Neue', cursive",
                    color: "white",
                    fontSize: { xs: "1rem", sm: "3rem" },
                  }}
                >
                  Estamos para alojar tus sueños!!!
                </Typography>

                <Box sx={{ paddingTop: "1rem" }}>
                  <Typography
                    variant="h4"
                    noWrap
                    sx={{
                      fontFamily: " 'Dosis', sans-serif",
                      color: "white",
                      fontSize: { xs: "1rem", sm: "1.3rem" },
                    }}
                  >
                    Tenemos el mejor servicios personalizado para tu proximo
                    sitio web
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "2rem" }}>
                  <Button variant="contained" className="buttonHeader">
                    Quiero empezar!
                  </Button>
                </Box>
                <Box paddingTop="3rem">
                  <Divider color="#fff" width="500rem"></Divider>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "46rem",
                  width: "110%",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img src={lapTop} alt=""></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#8a2be2 "
          fill-opacity="1"
          d="M0,224L120,192C240,160,480,96,720,90.7C960,85,1200,139,1320,165.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <CardPlan />
      <Box paddingTop="4rem" paddingBottom="4rem">
        <SearchDomain />
      </Box>
    </section>
  );
}

export default MainSection;
