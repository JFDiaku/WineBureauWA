import React, { createContext, useContext, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  const showSnackbar = (newMessage, newSeverity = 'info') => {
    setMessage(newMessage);
    setSeverity(newSeverity);
    setOpen(true);
  };

  const hideSnackbar = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={hideSnackbar}
        sx={{fontFamily:`var(--font)`, fontWeight:'500'}}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        ContentProps={{
          sx: {
         fontFamily:'inherit',
         fontWeight: '600'
          },
        }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={hideSnackbar}
          severity={severity}
          color='secondary'
          sx={{fontFamily:`var(--font)`, fontWeight:'500'}}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};