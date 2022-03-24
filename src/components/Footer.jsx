import React from 'react'

import { Typography } from '@material-ui/core'

import useStyles from "./styles";


const Footer = () => {
  const classes = useStyles();
  return (
  <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom> 
            randomUser.io
    </Typography>
    <Typography variant="subtitle1" align="center" color = "textSecondary"> 
            Developed by Nikita Mashchenko
    </Typography>
  </footer>
  )
}

export default Footer