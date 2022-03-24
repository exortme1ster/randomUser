import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import useStyles from "./styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FDFDFD'
    } 
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
    <ThemeProvider theme={theme}>
    <AppBar >
      <Toolbar>
        <Typography variant="h6" color="inherit" >
          RandomUser.io
        </Typography>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  </div>
  )
}

export default Header
