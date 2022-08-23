import React from 'react';


import { Fab } from '@mui/material';
import { EditLocation } from '@mui/icons-material';
  
const App = () => {
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      
      <Fab color="secondary" aria-label="edit">
        <EditLocation/>
      </Fab>
    </div>
  );
}
  
export default App;