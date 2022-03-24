import React from 'react'
import {Container, Box, Card, CardContent, CardMedia, Typography, Grid, Button} from '@material-ui/core'

import useStyles from "./styles";

import { useState } from "react";

const API_URL = "https://randomuser.me/api/"

const Middle = () => {
  const[user, setUser] = useState([]);

  const getUserData = async () => {
    try{
        const res = await fetch(API_URL);
        const data = await res.json();
        setUser(data.results[0])
        console.log(data.results[0])
    } catch {
        console.error("Error")
    }

}
  const classes = useStyles();
  return (
    <>
    <div className = {classes.container}>
    <Container maxWidth="sm">
        <Typography variant="h3" color="textPrimary" align="center" gutterBottom>
            Thanks to that app you can find data about random user!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Just click the button to fetch!
        </Typography>
    <div className={classes.button}>
    <Grid container justifyContent="center">
       <Button variant="contained" color="primary" onClick={() => getUserData()}>
           Fetch Data
       </Button>
    </Grid>
    </div>
    </Container>
    </div>
    

    <Container maxWidth="sm">
    <Card className={classes.card}>
      <CardMedia
          className = {classes.cardMedia}
          image= {Object.keys(user).length === 0 ? 'http://via.placeholder.com/400' : user.picture.large}
          title="Image title"
      />

      <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
             {Object.keys(user).length === 0 ? 'Waiting for data' : user.name.first} {Object.keys(user).length === 0 ? ' ' : user.name.last}
          </Typography>

          <Typography>
          Phone: {Object.keys(user).length === 0 ? ' No data ' : user.phone}
          </Typography>

          <Typography>
          Age: {Object.keys(user).length === 0 ? ' No data ' : user.dob.age}
          </Typography>

          <Typography>
          Location: {Object.keys(user).length === 0 ? ' No data ' : user.location.street.name + " "} 
          {Object.keys(user).length === 0 ? ' ' : user.location.street.number + " "} 
          {Object.keys(user).length === 0 ? ' ' : user.location.country}
          </Typography>
      </CardContent>
    </Card>
    </Container>

    </>
  )
}

export default Middle