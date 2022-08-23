import React from 'react'
import MyRoutes from "../routes/MyRoutes";
import NavBar from "../components/header/Navbarapp"
import Footer from "../components/footer/Footer"
import { useNavigate } from "react-router-dom";
import { Box, Fab } from '@mui/material';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

function UserMain() {

  const navigate = useNavigate();
  return (
    <>
      <main>
      <NavBar/>
      <Box
          sx={{
            "& > :not(style)": { m: 1 },
            position: "fixed",
            top: "75vh",
            right: "-11rem",
            zIndex: "100",
            transition: "0.3s",
            "&:hover": {
              transition: "0.3s",
              right: 0,
            },
          }}
          onClick={() => navigate("")}
        >
          <Fab variant="extended" color="primary" aria-label="add">
          <LiveHelpIcon sx={{ mr: 1 }} />
            ¿Necesitas Ayuda?
          </Fab>
        </Box>
      <MyRoutes/>
      <Footer/>
      </main>
    </>
 
    
  )
}

export default UserMain