import * as React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Drawer } from '../shared/Drawer';
import { Avatar, Typography } from '@mui/material';
// import { ReactComponent as Home } from '../assets/Home.svg'
import Home from '../assets/Home.svg'
import Event from '../assets/Event.svg'
import Speakers from '../assets/Speakers.svg'
import Calendar from '../assets/Calendar.svg'
import Bell from '../assets/Bell.svg'
import Messages from '../assets/Messages.svg'
import Settings from '../assets/Settings.svg'
import ChevronRight from '../assets/ChevronRight.svg'
// import Avatar from '../assets/Avatar.svg'

const NAVDETAILS = [
  {
    title: 'Home',
    icon: <img src={Home} alt="icon" />,
    link: "/",
  },
  {
    title: 'Events',
    icon: <img src={Event} alt="icon" />,
    link: "/events",
  },
  {
    title: 'Speakers',
    icon: <img src={Speakers} alt="icon" />,
    link: "/speakers",
  },
  {
    title: 'Reports',
    icon: <img src={Calendar} alt="icon" />,
    link: "/reports",
  },
  {
    title: 'Notifications',
    icon: <img src={Bell} alt="icon" />,
    link: "/notifications",
  },
  {
    title: 'Messages',
    icon: <img src={Messages} alt="icon" />,
    link: "/messages",
  },
  {
    title: 'Settings',
    icon: <img src={Settings} alt="icon" />,
    link: "/settings",
  },
]

export function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const toggleBar = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Box sx={{ p: 1, height: '50px', display: 'flex', alignItems: 'center' }}>
          <Avatar />
        </Box>
        <Divider />
        <List>
          {NAVDETAILS.map((text, index) => (
            <ListItem key={index} 
              component={Link} 
              to={text.link} 
              disablePadding 
              sx={{ 
                display: 'block', 
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: 'initial',
                        }
                      : {
                          justifyContent: 'center',
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: 'auto',
                          },
                    ]}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={text.title} 
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box onClick={toggleBar}>
            {open ? (
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                pt: 3,
                ml: 3,
              }}>
                <img src={ChevronRight} />
                <Typography>Collapse</Typography>
            </Box>
            ) : (
              <ChevronLeftIcon />
          )}
        </Box>
        <Box sx={{ 
          pt: 3,
          ml: 2,
          height: '50px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px' 
        }}>
          <Avatar />
          <Typography>Martins Ogunsina</Typography>
        </Box>
      </Drawer>
    </Box>
  );
}
