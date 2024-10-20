// import React from 'react'
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import CardMedia from "@mui/material/CardMedia"

import Info from '../../assets/Info.svg'
import LadyIMG from '../../assets/LadyIMG.svg'
import LadyIMG2 from '../../assets/LadyIMG2.svg'
import LadyIMG3 from '../../assets/LadyIMG3.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import ArrowDown from '../../assets/ArrowDown.svg'
import Carousel from "react-material-ui-carousel"
import { CardContent } from "@mui/material"


const DASHSTAT = [
  {
    title: 'Total Events',
    number: '500',
    percent: '5.0',
  },
  {
    title: 'Active Speakers',
    number: '25',
    percent: '5.0',
  },  {
    title: 'Total Registration',
    number: '300',
    percent: '5.0',
  },  {
    title: 'Total Revenue',
    number: '$500,000',
    percent: '5.0',
  },
]

const IMAGES = [
  {
    title: 'Total Events',
    Description: 'mkvg nofnndijijfjijifji f fjnndknfhhhfudi',
    pic: LadyIMG,
    alt: 'image 1'
  },
  {
    title: 'Total Events',
    Description: 'mkvg nofnndijijfjijifji f fjnndknfhhhfudi',
    pic: LadyIMG2,
    alt: 'image 1'
  },   {
    title: 'Total Events',
    Description: 'mkvg nofnndijijfjijifji f fjnndknfhhhfudi',
    pic: LadyIMG3,
    alt: 'image 1'
  },
]

function Dashboard() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      // gap: '40px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }}>
      <Typography variant="h5">
        Welcome! here is your summary
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {DASHSTAT.map((text,index) => (
          <Grid key={index} sm={12} item lg={3}>
            <Card elevation={0}  sx={{
              height: '80px',
              border: '1px solid black',
              padding: '12px',
              borderRadius: '0px',
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '12px,'
              }}>
                <Typography sx={{
                  color: '#64748B',
                  fontSize: '16px',
                  fontWeight: '600',
                }}>
                  {text.title}
                </Typography>
                <img src={Info} alt="icon" />
              </Box>
              <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
              }}>
                <Typography sx={{ fontWeight: 'bold' }} variant="h6">
                  {text.number}
                </Typography>
                {text.number < 100 ? (
                  <img src={ArrowDown} alt="arrow" />
                ) : (
                  <img src={ArrowUp} alt="arrow" />
                )}
                <Typography sx={{ 
                  fontSize: '12px', 
                  fontWeight: '600',
                  color: text.number <  100 ? '#F43F5E' : '#10B981',
                }}>
                  {text.percent}%
                </Typography>
              </Box>
            </Card>
          </Grid>
        )) }
      </Grid>

        <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: 5 }}>
          Event Registrations per month
        </Typography>
        <Grid container spacing={2}>
            <Grid sm={12} item lg={6}>
              <Card sx={{
                height: '320px',
                border: '1px solid black',
                padding: '8px',
              }}>
              </Card>
            </Grid>
            <Grid sm={12} item lg={6}>
              <Card  sx={{
                height: '320px',
              }}>
                <Carousel
                  autoPlay
                  indicators={false}
                  navButtonsAlwaysInvisible
                  animation="slide"
                  cycleNavigation
                >
                  {IMAGES.map((image, index) => (
                    <Box key={index} sx={{
                      height: '100%',
                      width: '100%',
                    }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image.pic}
                      sx={{ objectFit: 'cover'}}
                      alt={image.alt}
                    />
                    <CardContent 
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        color: 'white',
                      }}
                    >
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}>
                        <Typography>
                          {image.alt}
                        </Typography>
                      </Box>
                    </CardContent>
                    </Box>
                  ))}
              </Carousel>
              </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Dashboard