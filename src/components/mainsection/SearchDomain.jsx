import { Box, Container, Typography } from '@mui/material'

import React from 'react'

import "./searchdomain.css"

function SearchDomain() {
  return (
    <Box className="bg-main">
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            noWrap
            sx={{
              fontFamily: "'Bebas Neue', cursive",
              color: "#fff",
              marginTop: "5rem",
              fontSize: { xs: "1rem", sm: "3rem" },
            }}
          >
            Busca tu dominio ideal
          </Typography>
        </Box>
        <Box paddingTop="2rem" paddingBottom="5rem">
        <Box className="search-box">
            <form  className="search-form" method="get">
              <input
                className="search-text search"
                name=""
                placeholder="Buscar Dominio"
                type="text"
              />
              <button className="search-button" type="submit">
                <span>Search</span>
              </button>
            </form>
          </Box>
        </Box>
          
        
      </Container>
    </Box>
  );
}

export default SearchDomain