// import React from 'react'
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import CardMedia from "@mui/material/CardMedia"

import Info from '../../assets/Info.svg'
import DarkInfo from '../../assets/DarkInfo.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import ArrowDown from '../../assets/ArrowDown.svg'

import Carousel from "react-material-ui-carousel"
import { CardContent } from "@mui/material"
import Chart from "../../components/Chart"
import TableComponent from "../../shared/Table/Table"
import { Minimize } from "@mui/icons-material"
import { DASHSTAT, data, IMAGES } from "../../constants/dummy"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

function Dashboard() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }}>
      <Typography 
        sx={{ 
          fontSize: { xs: '18px', sm: '22px' }, 
          fontWeight: { xs: 'bold', sm: '400' }, 
          lineHeight: '20px', 
        }}
      >
        Welcome! here is your summary
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {DASHSTAT.map((text,index) => (
          <Grid key={index} xs={12} md={6} item lg={3}>
            <Card elevation={0}  sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              height: '80px',
              border: darkMode ? '#484554' : '2px solid #F2F2F7',
              padding: '12px',
              borderRadius: '0px',
              backgroundColor: darkMode ? '#484554' : '#fff',
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '16px,'
              }}>
                <Typography sx={{
                  color: darkMode ? '#fff' : '#64748B',
                  fontSize: '16px',
                  fontWeight: '600',
                }}>
                  {text.title}
                </Typography>
                {darkMode ? (
                  <img src={DarkInfo} alt="icon" />
                ) : (
                  <img src={Info} alt="icon" />
                )}
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

        <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: 4 }}>
          Event Registrations per month
        </Typography>
        <Grid container spacing={2}>
            <Grid xs={12} item lg={6}>
              <Card sx={{
                // width: '100%',
                height: '350px',
                padding: { xs: '4px', md: '32px' },
                border: darkMode ? '#484554' : '2px solid #F2F2F7',
                backgroundColor: darkMode ? '#484554' : '#fff',
              }}>
                <Chart />
              </Card>
            </Grid>
            <Grid xs={12} item lg={6}>
              <Card  sx={{
                height: '350px',
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
                        // maxHeight="100%"
                        image={image.pic}
                        sx={{ height: '350px'}}
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

        <Typography sx={{ fontSize: '18px', fontWeight: '500', mt: 4 }}>
          Events History
        </Typography>
        <TableComponent data={data} />
    </Box>
  )
}

export default Dashboard
