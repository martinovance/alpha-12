// import React from 'react'
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import CardMedia from "@mui/material/CardMedia"

import Info from '../../assets/Info.svg'
import Slide1 from '../../assets/Slide1.svg'
import Slide2 from '../../assets/Slide2.svg'
import Slide3 from '../../assets/Slide3.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import ArrowDown from '../../assets/ArrowDown.svg'
import Carousel from "react-material-ui-carousel"
import { CardContent } from "@mui/material"
import Chart from "../../components/Chart"
import TableComponent from "../../shared/Table/Table"

const data = [
  { eventName: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
  { eventName: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
  { eventName: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'In Progress' },
  { eventName: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'Completed' },
  { eventName: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed' },
  { eventName: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'Completed' },
  { eventName: 'Web3 Interfaces Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'In Progress' },
  { eventName: 'Cybersecurity for Startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'In Progress' },
  { eventName: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'In Progress' },
  { eventName: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'Completed' },
  { eventName: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
  { eventName: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
  { eventName: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'In Progress' },
  { eventName: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'Completed' },
  { eventName: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed' },
  { eventName: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'Completed' },
  { eventName: 'Web3 Interfaces Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'In Progress' },
  { eventName: 'Cybersecurity for Startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'In Progress' },
  { eventName: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'In Progress' },
  { eventName: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'Completed' },
];

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
    title: 'Latest News & Updates',
    description: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
    pic: Slide1,
    alt: 'image 1'
  },
  {
    title: 'Latest News & Updates',
    description: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
    pic: Slide2,
    alt: 'image 2'
  },   {
    title: 'Latest News & Updates',
    description: 'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.',
    pic: Slide3,
    alt: 'image 3'
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
                border: '1px solid #64748B',
                padding: '32px',
              }}>
                <Chart />
              </Card>
            </Grid>
            <Grid sm={12} item lg={6}>
              <Card  sx={{
                height: '320px',
                position: 'relative'
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
                      position: 'relative'
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
