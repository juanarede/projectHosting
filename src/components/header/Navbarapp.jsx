import React, { useState } from 'react';


import { AppBar, Typography, Toolbar, Tabs, Tab, Container,Button, Box } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import Logo from "../../assets/img/logo.png"

function Navbarapp() {

    const [navbarScroll, setNavbarScroll] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
          setNavbarScroll(true);
        } else {
          setNavbarScroll(false);
        }
      };
      window.addEventListener("scroll", changeBackground);

    
  return (
    <>
      <AppBar  sx={
            navbarScroll
              ? {
                  backgroundColor: "#000",
                  transition: "0.3s",
                  width: "100%",
                }
              : {
                  backgroundColor: "#000"
                    ? "transparent"
                    :'#000' ,
                  boxShadow: 0,
                  transition: "0.3s",
                  width: "100%",
                }
          }>
        <Container>
          <Toolbar >
          <Box xs={{paddingTop:"1.5rem" }}>
          <Typography  color="#fff" fontSize={24}><img width="150rem" src={Logo} alt=""/></Typography>
          </Box>
            
            <Tabs sx={{ marginLeft: "auto",paddingTop:"0.2rem"}} fontSize={24}  >
              <Tab  sx={{color:"#fff",fontWeight:"bold"}}  label="Hosting" />
              <Tab sx={{color:"#fff",fontWeight:"bold"}} label="Dominio" />
              <Tab sx={{color:"#fff",fontWeight:"bold"}}  label="Contacto" />
              <Button variant="contained" color="primary"><LoginIcon/>Ingresar</Button>
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbarapp;
