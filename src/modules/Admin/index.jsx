// import React from 'react'
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import CardMedia from "@mui/material/CardMedia"

import Home from '../../assets/Home.svg'
import LadyIMG from '../../assets/LadyIMG.svg'

const DASHSTAT = [
  {
    title: 'Total Events',
    number: '500',
  },
  {
    title: 'Active Speakers',
    number: '25',
  },  {
    title: 'Total Registration',
    number: '300',
  },  {
    title: 'Total Revenue',
    number: '$500,000',
  },
]

function Dashboard() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }}>
      <Typography variant="h5">
        Welcome! here is your summary
      </Typography>
      <Grid container spacing={2}>
        {DASHSTAT.map((text,index) => (
          <Grid key={index} sm={12} item lg={3}>
            <Card elevation={0}  sx={{
              height: '80px',
              // width: '260px',
              border: '1px solid black',
              padding: '8px',
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px,'
              }}>
                <Typography variant="h6">{text.title}</Typography>
                <img src={Home} alt="icon" />
              </Box>
              <Typography sx={{ fontWeight: 'bold' }} variant="h6">{text.number}</Typography>
            </Card>
          </Grid>
        )) }
      </Grid>
      <Grid container spacing={2}>
          <Grid sm={12} item lg={6}>
            <Card sx={{
              height: '320px',
              // width: '260px',
              border: '1px solid black',
              padding: '8px',
            }}>
            </Card>
          </Grid>
          <Grid sm={12} item lg={6}>
            <Card sx={{
              height: '320px',
            }}>
              <CardMedia
                component="img"
                height="320"
                image={LadyIMG}
                sx={{ objectFit: 'cover'}}
              />
            </Card>
          </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard