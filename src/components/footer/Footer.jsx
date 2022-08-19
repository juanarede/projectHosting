import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

import "./footer.css"
import Word from "../../assets/img/word.png"


import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      label="cosopum"
      padding="5rem"
      paddingBottom="2rem"
      bgcolor="#000000"
      color="#fff"
      sx={{ mt: "auto" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box textAlign="left" variant="h1" marginBottom={3}>
              <Typography variant="h4">LOGO</Typography>
            </Box>
            <Box textAlign="left">
              <Typography
                variant="subtitle1"
                sx={{
                  cursor: "pointer",
                  fontWeight: "100",
                  textDecoration: "none",
                  
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Typography>
              <img className='word-img' src={Word} alt=""></img>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2.4}>
            <Typography
              variant="subtitle1"
              borderBottom={0}
              textAlign="left"
              color="primary"
              fontWeight={700}
              sx={{fontFamily:"'Bebas Neue', cursive"}}
            >
              HOSTING
            </Typography>
            <Box marginTop={1}>
              <Box color="inherit" textAlign="left">
                P. Sherman, calle Wallaby,
                <span style={{ fontFamily: "number" }}> 42</span>
              </Box>
            </Box>
            <Box>
              <Box href="" color="inherit" textAlign="left">
                Open: <span style={{ fontFamily: "number" }}> 9:00-18:00 </span>
              </Box>
            </Box>

            <Box marginTop={2}>
              <Box href="" color="inherit" textAlign="left">
                <span style={{ fontFamily: "number" }}>742 </span> Evergreen
                Terrace
              </Box>
            </Box>
            <Box>
              <Box href="" color="inherit" textAlign="left">
                Open:<span style={{ fontFamily: "number" }}> 9:00-18:00</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2.4}>
            <Typography
              variant="subtitle1"
              borderBottom={0}
              textAlign="left"
              color="primary"
              fontWeight={700}
              sx={{fontFamily:"'Bebas Neue', cursive"}}
            >
              DOMINIO
            </Typography>
            <Box>
              <Box href="" color="inherit" textAlign="left" marginTop={1}>
                loremipsum@ha.com
              </Box>
            </Box>
            <Box>
              <Box href="" color="inherit" textAlign="left">
                Cel:<span style={{ fontFamily: "number" }}>55523156</span>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
          <Typography
              variant="subtitle1"
              borderBottom={0}
              textAlign="left"
              color="primary"
              fontWeight={700}
              sx={{fontFamily:"'Bebas Neue', cursive"}}
            >
              CONTACTO
            </Typography>
            <Box marginTop={1}>
              <Box color="inherit" textAlign="left">
                P. Sherman, calle Wallaby,
                <span style={{ fontFamily: "number" }}> 42</span>
              </Box>
            </Box>
            <Box>
              <Box href="" color="inherit" textAlign="left">
                Open: <span style={{ fontFamily: "number" }}> 9:00-18:00 </span>
              </Box>
            </Box>

            <Box marginTop={2}>
              <Box href="" color="inherit" textAlign="left">
                <span style={{ fontFamily: "number" }}>742 </span> Evergreen
                Terrace
              </Box>
            </Box>
            <Box>
              <Box href="" color="inherit" textAlign="left">
                Open:<span style={{ fontFamily: "number" }}> 9:00-18:00</span>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: "2rem" }} />

        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box textAlign="left">&reg;2022 undefined</Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center">
              <Link to="/" className="footerLink">
                <InstagramIcon color="secondary" />
              </Link>
              <Link to="/" className="footerLink">
                <GitHubIcon color="secondary" />
              </Link>
              <Link to="/" className="footerLink">
                <TwitterIcon color="secondary" />
              </Link>
              <Link to="/" className="footerLink">
                <LinkedInIcon color="secondary" />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer