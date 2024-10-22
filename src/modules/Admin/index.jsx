// import React from 'react'
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import CardMedia from "@mui/material/CardMedia"

import Info from '../../assets/Info.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import ArrowDown from '../../assets/ArrowDown.svg'

import Carousel from "react-material-ui-carousel"
import { CardContent } from "@mui/material"
import Chart from "../../components/Chart"
import TableComponent from "../../shared/Table/Table"
import { Minimize } from "@mui/icons-material"
import { DASHSTAT, data, IMAGES } from "../../constants/dummy"

function Dashboard() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }}>
      <Typography variant="h5">
        Welcome! here is your summary
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {DASHSTAT.map((text,index) => (
          <Grid key={index} xs={12} md={6} item lg={3}>
            <Card elevation={0}  sx={{
              height: '80px',
              border: '2px solid #F2F2F7',
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
            <Grid xs={12} item lg={6}>
              <Card sx={{
                width: '100%',
                height: '320px',
                border: '2px solid #F2F2F7',
                padding: { xs: '4px', md: '32px' },
              }}>
                <Chart />
              </Card>
            </Grid>
            <Grid xs={12} item lg={6}>
              <Card  sx={{
                height: '320px',
                position: 'relative'
              }}>
                <Carousel
                  autoPlay
                  indicators
                  navButtonsAlwaysVisible
                  animation="slide"
                  cycleNavigation
                  indicatorIcon={() => <Minimize />}
                  indicatorContainerProps={{
                    style: {
                      position: 'absolute',
                      zIndex: 2,
                      bottom: 3,
                    },
                  }}
                  indicatorIconButtonProps={{
                    style: {
                      color: 'rgba(255, 255, 255, 0.7)',
                      padding: '2px',
                    },
                  }}
                  activeIndicatorIconButtonProps={{
                    style: {
                      color: '#ffffff',
                      border: '1px solid #fff'
                    },
                  }}
                  navButtonsProps={{
                    style: {
                      backgroundColor: '#fff',
                      color: 'black',
                    }
                  }}
                >
                  {IMAGES.map((image, index) => (
                    <Box key={index} sx={{
                      height: '100%',
                      width: '100%',
                      // position: 'relative'
                    }}>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image.pic}
                      // sx={{ objectFit: 'cover'}}
                      alt={image.alt}
                    />
                    <CardContent 
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        color: 'white',
                        mb: 0,
                      }}
                    >
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}>
                        <Typography>
                          {image.title}
                        </Typography>
                        <Typography>
                          {image.description}
                        </Typography>
                      </Box>
                    </CardContent>
                    </Box>
                  ))}
              </Carousel>
              </Card>
            </Grid>
        </Grid>

        <TableComponent data={data} />
    </Box>
  )
}

export default Dashboard
